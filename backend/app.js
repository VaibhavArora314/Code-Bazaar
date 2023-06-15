import express from 'express';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const app = express();

config({
  path: './data/config.env',
});

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

app.get('/', (req, res) => {
  res.send('Welcome to CodeBazaar');
});

// Connect to MongoDB
mongoose
  .connect(`${process.env.MONGO_URI}/codebazaar`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

// User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

// Transaction Schema
const transactionSchema = new mongoose.Schema({
  listing: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Listing',
    required: true,
  },
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

// Authentication Middleware
const authenticateUser = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: 'Access token not found' });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.userId;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid access token' });
  }
};

// Register User
app.post('/api/users/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashedPassword });

    await user.save();
    res.json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user' });
  }
});

// Login User
app.post('/api/users/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.cookie('token', token, { httpOnly: true });
    res.json({ message: 'User logged in successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to log in' });
  }
});

// Logout User
app.post('/api/users/logout', (req, res) => {
  res.clearCookie('token', { httpOnly: true, path: '/' });
  res.json({ message: 'User logged out successfully' });
});

// User Profile of the Authenticated User
app.get('/api/users/profile', authenticateUser, (req, res) => {
  res.json(req.user);
});

// Update the User Profile
app.put('/api/users/profile', authenticateUser, async (req, res) => {
  const userId = req.user._id;
  const { name, email } = req.body;

  try {
    const user = await User.findByIdAndUpdate(userId, { name, email }, { new: true });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user profile' });
  }
});

// Listing Schema
const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  category: {
    type: String,
    required: true,
  },
});

const Listing = mongoose.model('Listing', listingSchema);


// Get listing details
app.get('/api/listings/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const listing = await Listing.findById(id);

    if (!listing) {
      return res.status(404).json({ error: 'Listing not found' });
    }

    res.json(listing);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve listing details' });
  }
});

// Create a new listing
app.post('/api/listings', authenticateUser, async (req, res) => {
  const { title, description, price, category } = req.body;
  const sellerId = req.user._id;

  try {
    const listing = new Listing({ title, description, price, category, seller: sellerId });
    await listing.save();
    res.json(listing);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create listing' });
  }
});

// Update a listing
app.put('/api/listings/:id', authenticateUser, async (req, res) => {
  const { id } = req.params;
  const { title, description, price, category } = req.body;

  try {
    const listing = await Listing.findByIdAndUpdate(
      id,
      { title, description, price, category },
      { new: true }
    );

    if (!listing) {
      return res.status(404).json({ error: 'Listing not found' });
    }

    res.json(listing);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update listing' });
  }
});

// Delete a listing
app.delete('/api/listings/:id', authenticateUser, async (req, res) => {
  const { id } = req.params;

  try {
    const listing = await Listing.findByIdAndDelete(id);

    if (!listing) {
      return res.status(404).json({ error: 'Listing not found' });
    }

    res.json({ message: 'Listing deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete listing' });
  }
});

// Search listings by title, description, and category
app.get('/api/listings', async (req, res) => {
  const { title, description, category } = req.query;
  const query = {};

  if (title) {
    query.title = { $regex: title, $options: 'i' };
  }

  if (description) {
    query.description = { $regex: description, $options: 'i' };
  }

  if (category) {
    query.category = { $regex: category, $options: 'i' };
  }

  try {
    const listings = await Listing.find(query);
    res.json(listings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve listings' });
  }
});
// /api/listings?title=web&description=front-end&category=development

// ... (other routes and code)

// Create a transaction
app.post('/api/transactions', authenticateUser, async (req, res) => {
  const { listingId, price } = req.body;
  const { _id: buyerId } = req.user;

  try {
    // Retrieve the listing and check if it exists
    const listing = await Listing.findById(listingId);
    if (!listing) {
      return res.status(404).json({ error: 'Listing not found' });
    }

    // Get the seller ID from the listing
    const { seller: sellerId } = listing;

    // Create a new transaction
    const transaction = new Transaction({
      listing: listingId,
      buyer: buyerId,
      seller: sellerId,
      price,
    });

    // Save the transaction
    await transaction.save();

    // Return the created transaction
    res.json(transaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create transaction' });
  }
});

// Get all transactions for the authenticated user
app.get('/api/transactions', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve transactions' });
  }
});


// Get transaction details
app.get('/api/transactions/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const transaction = await Transaction.findById(id);

    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }

    res.json(transaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve transaction details' });
  }
});

// Update a transaction
app.put('/api/transactions/:id', authenticateUser, async (req, res) => {
  const { id } = req.params;
  const { price } = req.body;

  try {
    const transaction = await Transaction.findByIdAndUpdate(id, { price }, { new: true });

    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }

    res.json(transaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update transaction' });
  }
});

// Delete a transaction
app.delete('/api/transactions/:id', authenticateUser, async (req, res) => {
  const { id } = req.params;

  try {
    const transaction = await Transaction.findByIdAndDelete(id);

    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }

    res.json({ message: 'Transaction deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete transaction' });
  }
});

// SOLD products
app.get('/api/transactions/sold', authenticateUser, async (req, res) => {
  const { _id: sellerId } = req.user;

  try {
    const transactions = await Transaction.find({ seller: sellerId });
    res.json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve sold products' });
  }
});

// Bought products
app.get('/api/transactions/bought', authenticateUser, async (req, res) => {
  const { _id: buyerId } = req.user;

  try {
    const transactions = await Transaction.find({ buyer: buyerId });
    res.json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve bought products' });
  }
});

// GET /api/listings?search=smartphone  searching


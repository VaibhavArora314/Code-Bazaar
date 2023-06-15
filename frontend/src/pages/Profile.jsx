import React from 'react';
import UpdateForm from '../components/updateProfileComponent';
import ProductCard from '../components/ProfileStatus';

function Profile(props) {
    return (
        <div>
            <UpdateForm/>
            <ProductCard/>
        </div>
    );
}

export default Profile;
import React from 'react';

const Bkash = ({children}) => {
    return (
        <div className='container'>
            <h3 className='bg-light p-3 bg-opacity-50'>
                তাড়াতাড়ি সোহান এর এই {children} নাম্বারে ঈদ এর সালামি পাঠাইয়া দেও। {children} নাম্বারঃ 01867689987।
            </h3>
        </div>
    );
};

export default Bkash;
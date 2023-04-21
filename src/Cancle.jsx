import React from 'react';
import { Link } from 'react-router-dom';

const Cancle = () => {
    return (
        <div className='container'>
            <h3 className='bg-light p-3 bg-opacity-50'>
                তুমি সোহান কে ঈদ এর সালামি দিতে চাও না । ভবিষ্যৎ এ তোমার উপর কি কি অভিশাপ পরবে তুমি শুনে রাখো।
            </h3>
            <ul>
                <li>তোমার কখনো বিয়ে হবে না</li>
                <li>তোমার কপালে কখনো প্রেম আসবে না</li>
                <li>আর কয়েক দিন পরেই তোমার মাথার সব চুল পরে যাবে</li>
                <li>তোমার ঠিক মতো হাগু হবে না</li>
                <li>তোমার জীবন উল্টা দিকে চলবে</li>
                <li>এইসব অভিশাপ থেকে বাচতেঁ চাইলে তাড়াতাড়ি গিয়ে সোহান কে ঈদের সালামি দিয়ে আসো</li>
            </ul>
            <Link to="/option"><button className="btn btn-primary">জী সালামি দিতে চাই</button> </Link>

        </div>
    );
};

export default Cancle;
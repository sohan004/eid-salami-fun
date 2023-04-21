import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className='container'>
                <h3 className='bg-light p-3 bg-opacity-50'>
                    তুমি কি সোহান কে ঈদ এর সালামি দিয়ে তার কাছ থেকে দোয়া নিতে চাও?
                </h3>
                <div className='d-flex align-items-center justify-content-center gap-4'>
                    <Link to='/option'><button className="btn btn-primary">হ্যা</button></Link>
                    <p className='text-light mb-0 '>অথবা</p>
                    <Link to="/cancle"><button className="btn btn-danger">না</button></Link>
                </div>
            </div>
        </>
    );
};

export default Home;
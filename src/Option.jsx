import React from 'react';
import bkash from '../src/assets/Bkash_logo_PNG1.png'
import nagad from '../src/assets/Nagad-Logo.wine.png'
import { Link } from 'react-router-dom';

const Option = () => {
    return (
        <>
            <div className='container'>
                <h3 className='bg-light p-3 bg-opacity-50'>
                    তুমি সোহান কে কিসের মাধ্যমে সালামি দিতে চাও?
                </h3>
                <div className='text-center d-flex justify-content-center gap-4'>
                    <Link to='/bkash'><button className="btn btn-light">< img style={{width: '100px'}} className=' ' src={bkash} alt="" /></button></Link>
                    <Link to="/nogod"><button className="btn btn-light">< img style={{width: '100px'}} className=' ' src={nagad} alt="" /></button></Link>
                </div>
            </div>
        </>
    );
};

export default Option;
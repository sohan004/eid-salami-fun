import moment from 'moment/moment';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'

const App = () => {
  return (
    <>
      <div className='text-center my-3 mb-5 border-bottom'>
        <h1 className='fw-bolder text-light'>
          <Typewriter
            words={['সোহান এর পক্ষ থেকে তোমাকে ঈদের শুভেচ্ছা']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
          /></h1>
        <h5 className='my-3 text-light'>{moment().format("dddd, MMMM D, YYYY, h:mm:ss a")}</h5>
      </div>
      
      <Outlet></Outlet>
    </>
  );
};

export default App;
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { runFireworks } from '../utils/confetti';

import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
          <BsBagCheckFill></BsBagCheckFill>
        </p>
        <h2>Thank you for your order!</h2>
        <p className='email-msg'>Check your email inbox for your receipt.</p>
        <p className='description'>
          If you have any question, please email
          <a className='email' href='mailto:mikosodz.lote@gmail.com'>
            mikosodz.lote@gmail.com
          </a>
        </p>
        <Link href='/'>
          <button className='btn' type='button' width={300}>
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;

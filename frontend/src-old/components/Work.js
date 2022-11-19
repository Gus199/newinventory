import React from 'react';
import { Link } from 'react-router-dom';

function Glass() {
  return (
    <>

          <div className='mxw800p'>
            <h3>User Guide</h3>
            <p>
            This Application inventory management Allow you to Manage your Store in one place, track product, adding new ones, update and add notes
            </p>
          </div>
          <div className='services'>
            <div className='box'>
              <div className='iconBx'>
                <i className='fa-solid fa-building'></i>
              </div>
              <div className='content'>
                <Link to='/new-device' style={{ color: '#0072b1' }}>
                  Create new Item <i className='fa-solid fa-arrow-right'></i>
                </Link>
                <p>
                Create and Add new arrival products to the store inventory list
                </p>
              </div>
            </div>

            <div className='box'>
              <div className='iconBx'>
                <i className='fa-regular fa-eye'></i>
              </div>
              <div className='content'>
                <Link to='/devices' style={{ color: '#0072b1' }}>
                  View my Items <i className='fa-solid fa-arrow-right'></i>
                </Link>
                <p>
              View all Products added by this User and latest updates
                </p>
              </div>
            </div>
            <div className='box'>
              <div className='iconBx'>
                <i className='fa-regular fa-eye'></i>
              </div>
              <div className='content'>
                <Link to='/all' style={{ color: '#0072b1' }}>
                  View All Devices <i className='fa-solid fa-arrow-right'></i>
                </Link>
                <p>
                 View All Products with More dteails , descriptions, Inventory numbers, Types, and created dates
                </p>
              </div>
            </div>
            <div className='box'>
              <div className='iconBx'>
                {/* <img src="icon1.png" /> */}
                <i className='fa-light fa-square-xmark'></i>
              </div>
              <div className='content'>
                <Link to='/test' style={{ color: '#0072b1' }}>
                  View closed Cases <i className='fa-solid fa-arrow-right'></i>
                </Link>
                <p>
                As a User you can always Go back to Closed and deleted Products
                </p>
              </div>
            </div>
          </div>
     
    </>
  );
}

export default Glass;

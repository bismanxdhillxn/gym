import React, { Component } from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import SeventhPage from './SeventhPage';
import { useNavigate } from 'react-router-dom';

export default function Login () {
  const navigate = useNavigate();

    function loginEvent() {
        const inputEmail = document.getElementById('inputEmail').value;
        const inputPassword = document.getElementById('inputPassword').value;
        if (inputEmail == 'abc@demo.com' && inputPassword == '1234') {
          localStorage.setItem('user','Demo');
          // alert('Login successfully');
    navigate('/');

        } else {
          alert('Please enter valid email.');
        }
      }
    return (
        <>
          <Navigation />
      <main>
      <div class="container login">
      <div class="row align-items-center">
        <div class="col-md-6 login-image-container">
            <img src='/gym_images/login.jpg' alt='image' class="login-image img-fluid" />
        </div>
        <div class="col-md-6">
            <h2 class="trial_content_header">Login</h2>
           <div className='login-container'>
           <div class="input_box">
                        <input type="email" id="inputEmail" class="form_control" placeholder="Enter your email"  />
                    </div>
                    <div class="input_box">
                    <input type="password" id="inputPassword" class="form_control" placeholder="Enter your Password"  />

                    </div>

           </div>
            <button class="thirdpage_btn" onClick={loginEvent}>Sign In</button>
        </div>
        </div>
        </div>
      <SeventhPage />
      <Footer />

</main>
      </>
    )
  }
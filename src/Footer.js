import React, { Component } from 'react'

export default function Footer () {
 function emailIdentifier  (){
        const emailInput = document.getElementById('inputBoxxx').value;
        if (emailInput.trim() !== '') {
          alert('Email sent successfully to:' + emailInput);
        } else {
          alert('Please enter your email.');
        }
      }
      
    return (
        <footer class="footer_container">
        <div class="footer_start">
            <div class="footer_column">
                <div class="footer_column1">
                    <h4>Company</h4>
                    <a href="#">About us</a>
                    <a href="#">Why us</a>
                    <a href="#">Partnership</a>
                    <a href="#">Security</a>
                </div>
                <div class="footer_column1">
                    <h4>Categories</h4>
                    <a href="#">Yoga & Gymanstics</a>
                    <a href="#">Strength Training</a>
                    <a href="#">Body Building</a>
                    <a href="#">Weight Loss</a>
                </div>
                <div class="footer_column1">
                    <h4>Help</h4>
                    <a href="#">Account</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Support Center</a>
                    <a href="#">Terms & Conditions</a>
                </div>
                <div class="footer_column2">
                    <h4>Contact us</h4>
                    <a href="#"><i class="fas fa-phone"></i> +91 975826134</a>
                    <a href="#"><i class="fas fa-envelope"></i> FitnessPowerhouse@gmail.com</a>
                    <a href="#"><i class="fas fa-map-marker-alt"></i> 372 Elm Street
                        Springfield, Arizona,
                        United States</a>
                </div>
                <div class="footer_column2">
                    <h4>Subscribe to our newsletter</h4>
                    <div class="input_box">
                        <input type="email" id="inputBoxxx" class="form_control" placeholder="Enter your email"  />
                        <button id="sb"><i class="material-symbols-outlined" onClick={emailIdentifier}>send</i></button>
                    </div>

                    <p>Never miss an update from us....</p>
                </div>
            </div>
        </div>
        {/* <hr /> */}
        <div class="footer_end">
            <div class="footer_logo"></div>
            <div class="footer_copyright">
                <p>Copyright © 2024 Style Sorcerers. All rights reserved.</p>
            </div>
            <div class="footer_socialmedia">
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-facebook"></i></a>
            </div>
        </div>
    </footer>
    )
  }
import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SeventhPage from './SeventhPage';
import { Modal, Button } from 'react-bootstrap';


export default function Payment() {

    const [items, getItems] = useState([]);




    const navigate = useNavigate();


    useEffect(() => {
        const item = JSON.parse(localStorage.getItem('cart')) || [];
        getItems(item);
    }, []);


    function remove(params) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        console.log(cart);
        const index = cart.findIndex(item => item['id'] === params);
        if (index !== -1) {
            const removedItem = cart.splice(index, 1); // Remove item from array
            localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
            alert(" Item has been removed from the cart");
            window.location.reload();
        }
    }

 
    const handleSubmit = (event) => {
        event.preventDefault();
        // localStorage.removeItem('cart');
        navigate('/Checkout');
      };

    return (
        <>
            <Navigation />
            <main>
                <div class="container py-5 payment">
                    <h1 class="mb-4 text-light">Shopping Cart</h1>


                    {items.length != 0 && (
                        <>
                            <div class="row" >
                                <div class="col-md-8">
                                    <div class="card mb-3">
                                        <div class="card-body">
                                            <ul class="list-group list-group-flush">


                                                {items.map((item, index) => (
                                                    <li class="list-group-item">
                                                        <div class="row">
                                                            <div class="col-md-2">
                                                                <img src={item.img} alt="Product 1" class="img-fluid" />
                                                            </div>
                                                            <div class="col-md-6">
                                                                <h5 class="card-title fw-bold">{item.name}</h5>
                                                                <p class="card-text">
                                                                    {
                                                                        item.detail.split('\\n').map((line, index) => (
                                                                            <span key={index}>
                                                                                {line}
                                                                                <br />
                                                                            </span>
                                                                        ))
                                                                    }
                                                                </p>
                                                                <h6 class="cart-price">Price :  ₹{item.price} </h6>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <button class="btn btn-danger" onClick={() => remove(item.id)}>X</button>
                                                            </div>
                                                        </div>
                                                    </li>

                                                ))}





                                            </ul>
                                            {/* <hr />
                                            <div class="col-md-12">
                                                <h6 class="card-title fw-bold">Delivery Detail</h6>

                                                <p class="card-text">
                                                    First & Last Name, Address Line 1, Address Line 2, City, District, State - Pincode <br />
                                                    Email ID, Mobile Number
                                                </p>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title text-center fw-bold">Summary</h5>
                                            <hr />
                                            <ul class="list-group list-group-flush">

                                                {items.map((item, index) => (
                                                    <>
                                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                                            Amount [Item - {index + 1} ]
                                                            <span> ₹{item.price}</span>

                                                        </li>

                                                    </>
                                                ))}
                                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                                    Tax
                                                    <span> ₹{178}</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between align-items-center fw-bold">
                                                    Total
                                                    <span> ₹{items.reduce((acc, item) => acc + parseFloat(item.price), 0) + 178}</span>
                                                </li>
                                            </ul>
                                            <div class="text-center">
                                                {(localStorage.getItem('user') == null) ? <p class='text-danger'>Please login to Place this order</p> : <a href={'/Checkout/'+ items.reduce((acc, item) => acc + parseFloat(item.price) + 178, 0)} class="btn buy-btn mt-3" >Pay Now</a>}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </>

                    )}
                    {items.length == 0 && (
                        <div class="row">
                            <div class="col">
                                <div class="card mb-3">
                                    <div class="card-body  text-center">
                                        <h3 class="text-dark">No item selected, please select an item.</h3>
                                        <a href='/store'> Goto Store</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <SeventhPage />
                <Footer />

            </main>

      
        </>
    )
}


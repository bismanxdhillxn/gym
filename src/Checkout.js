import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


export default function Checkout() {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    let parms = useParams();
    const today = new Date();
    const formattedDate = today.toLocaleDateString();
    let grandTotal = parseInt(parms.total) + parseInt(parms.total*0.18);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            alert('Thank you for shopping, Payment done successfully!');
            localStorage.removeItem('cart');
            navigate('/');

        }, 3000); // 3 seconds timeout



    };


    return (
        <>

            <div class="container checkout-container bg-light d-md-flex align-items-center">
                <div class="card box1 shadow-sm p-md-5 p-md-5 p-4">
                    <div class="fw-bolder mb-4"><span class="fas fa-rupee-sign"></span><span class="ps-1">{parms.total}</span></div>
                    <div class="d-flex flex-column">
                        <div class="d-flex align-items-center justify-content-between text"> <span class="">Tax</span>
                            <span class="fas fa-rupee-sign"><span class="ps-1">{parseInt(parms.total*0.18)}</span></span> </div>
                        <div class="d-flex align-items-center justify-content-between text mb-4"> <span>Total</span> <span
                            class="fas fa-rupee-sign"><span class="ps-1">{grandTotal}</span></span> </div>
                        <div class="border-bottom mb-4"></div>
                        <div class="d-flex flex-column mb-4"> <span class="far fa-file-alt text"><span class="ps-2">Invoice
                            ID:</span></span> <span class="ps-3">GYM{Math.floor(100000 + Math.random() * 900000).toString()}</span> </div>
                        <div class="d-flex flex-column mb-5"> <span class="far fa-calendar-alt text"><span class="ps-2">Next
                            payment:</span></span> <span class="ps-3">{formattedDate}</span> </div>
                        <div class="d-flex align-items-center justify-content-between text mt-5">
                            <div class="d-flex flex-column text"> <span>Customer Support:</span> <span>online chat 24/7</span>
                            </div>
                            <div class="btn btn-primary rounded-circle"><span class="fas fa-comment-alt"></span></div>
                        </div>
                    </div>
                </div>
                <div class="card box2 shadow-sm">
                    <div class="d-flex align-items-center justify-content-between p-md-5 p-4"> <span
                        class="h5 fw-bold m-0">Payment methods</span>
                    </div>
                    <ul class="nav nav-tabs mb-3 px-md-4 px-2" role="tablist">
                        <li class="nav-item" > <a class="nav-link px-2" data-bs-toggle="tab" data-bs-target="#card" type="button" role="tab" aria-controls="card" aria-selected="true" aria-current="page" href="#">Credit/Debit Card</a> </li>
                        <li class="nav-item" > <a class="nav-link px-2" data-bs-toggle="tab" data-bs-target="#mobile" type="button" role="tab" aria-controls="mobile" aria-selected="false" href="#">Mobile Payment</a> </li>
                        {/* <li class="nav-item ms-auto"> <a class="nav-link px-2" href="#">+ More</a> </li> */}
                    </ul>



                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="card" role="tabpanel" aria-labelledby="card-tab">

                            <form action="" class='checkout-form' onSubmit={handleSubmit}>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="d-flex flex-column px-md-5 px-4 mb-4"> <span>Credit Card</span>
                                            <div class="inputWithIcon">
                                                <input title='gym' placeholder='5136 1845 5468 3894' class="form-control checkout-form-control" type="text" required maxLength="16" minLength={16}  />
                                                <span class="">
                                                    <img class="checkout-img"
                                                        src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-logok-15.png"
                                                        alt="" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="d-flex flex-column ps-md-5 px-md-0 px-4 mb-4"> <span>Expiration<span
                                            class="ps-1">Date</span></span>
                                            <div class="inputWithIcon">
                                                <input type="text" class="form-control checkout-form-control" placeholder="05/20" required />
                                                <span class="fas fa-calendar-alt"></span> </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="d-flex flex-column pe-md-5 px-md-0 px-4 mb-4"> <span>Code CVV</span>
                                            <div class="inputWithIcon">
                                                <input type="password" class="form-control checkout-form-control" placeholder="123" />
                                                <span
                                                    class="fas fa-lock"></span> </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="d-flex flex-column px-md-5 px-4 mb-4"> <span>Name</span>
                                            <div class="inputWithIcon">
                                                <input class="form-control checkout-form-control text-uppercase" type="text"
                                                    placeholder="Bisman Dhillon" required />
                                                <span class="far fa-user"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 px-md-5 px-4 mt-3">
                                        <button type='submit' class="btn btn-primary w-100" >Pay {grandTotal}/-</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                        <div class="tab-pane fade text-center" id="mobile" role="mobile" aria-labelledby="mobile-tab">
                            <form onSubmit={handleSubmit} action='#' class='checkout-form'>

                            <div class="row">
                                <div class="col-12">
                                    <img src='/gym_images/qr-code.jpeg' class="qr-img" alt='QR Code' />
                                </div>
                                <div class="col-12">

                                    <div class="mb-6 px-4" id='upi'>
                                        <label htmlFor="name" class="form-label">
                                            Or UPI ID:
                                        </label>
                                        <input type="email" id="name" class="form-control" 
                                            placeholder="abc@hdfc"
                                        />
                                    </div>
                                </div>

                            </div>
                            <div class="col-12 px-md-5 px-4 mt-3">
                                <button type='submit' class="btn btn-primary w-100">Payment Done</button>
                            </div>
                            </form>

                        </div>





                    </div>
                </div>
            </div>

            {loading && (
            <div class="fullscreen-spinner">
                <div class="spinner-border text-warning checkout-spinner" role="status">
                    <span class="sr-only">Processing...</span>
                </div>
            </div>
)}
        </>
    )
}



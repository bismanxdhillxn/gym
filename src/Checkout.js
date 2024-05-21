import React, {useState} from 'react';
// import './checkout.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


export default function Checkout() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    let parms = useParams();


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


            <div class="container-fluid checkout-container">

                <div class="card">
                    <div class="card-header text-center">
                        <h3>Dummy Payment Gateway</h3>
                    </div>
                    <div class="card-body">


                        <form action="#"  onSubmit={handleSubmit}>
                            <div class='row'>
                                <div class="col text-center">

                                </div>
                            </div>
                            <div class="row">

                                <div class="col">
                                    <h4 class="title">
                                        Billing Address
                                    </h4>

                                    <div class="mb-3">
                                        <label htmlFor="name" class="form-label">
                                            Full Name:
                                        </label>
                                        <input type="text" id="name" class="form-control"
                                            placeholder="Enter your full name"
                                            required />
                                    </div>

                                    <div class="mb-3">
                                        <label htmlFor="email">
                                            Email:
                                        </label>
                                        <input type="email" id="email" class="form-control"
                                            placeholder="Enter email address"
                                            required />
                                    </div>

                                    <div class="mb-3">
                                        <label htmlFor="address">
                                            Address:
                                        </label>
                                        <input type="text" id="address" class="form-control"
                                            placeholder="Enter address"
                                            required />
                                    </div>

                                    <div class="mb-3">
                                        <label htmlFor="city">
                                            City:
                                        </label>
                                        <input type="text" id="city" class="form-control"
                                            placeholder="Enter city"
                                            required />
                                    </div>

                                    <div class="flex">

                                        <div class="mb-3">
                                            <label htmlFor="state">
                                                State:
                                            </label>
                                            <input type="text" id="state" class="form-control"
                                                placeholder="Enter state"
                                                required />
                                        </div>

                                        <div class="mb-3">
                                            <label htmlFor="zip">
                                                Zip Code:
                                            </label>
                                            <input type="number" id="zip" class="form-control"
                                                placeholder="123 456"
                                                required />
                                        </div>

                                    </div>

                                </div>
                                <div class="col">
                                    <h4 class="title">Card Detail</h4>

                                    <div class="mb-3">
                                        <label htmlFor="cardName">
                                            Total Amount to be Paid:
                                        </label>
                                        <input type="text" id="cardName" class="form-control" value={parms.total}
                                           disabled/>
                                    </div>

                                    <div class="mb-3">
                                        <label htmlFor="cardName">
                                            Name On Card:
                                        </label>
                                        <input type="text" id="cardName" class="form-control"
                                            placeholder="Enter card name"
                                            required />
                                    </div>

                                    <div class="mb-3">
                                        <label htmlFor="cardNum">
                                            Credit Card Number:
                                        </label>
                                        <input type="text" id="cardNum" class="form-control"
                                            placeholder="1111222233334444"
                                            maxLength="16" required minLength={16} />
                                    </div>

                                    <div class="mb-3">
                                        <label htmlFor="">Exp Month:</label>
                                        <select name="" id="" class="form-control">
                                            <option value="">Choose month</option>
                                            <option value="January">January</option>
                                            <option value="February">February</option>
                                            <option value="March">March</option>
                                            <option value="April">April</option>
                                            <option value="May">May</option>
                                            <option value="June">June</option>
                                            <option value="July">July</option>
                                            <option value="August">August</option>
                                            <option value="September">September</option>
                                            <option value="October">October</option>
                                            <option value="November">November</option>
                                            <option value="December">December</option>
                                        </select>
                                    </div>


                                    <div class="flex">
                                        <div class="mb-3">
                                            <label htmlFor="">Exp Year:</label>
                                            <select name="" id="" class="form-control">
                                                <option value="">Choose Year</option>
                                                <option value="2023">2023</option>
                                                <option value="2024">2024</option>
                                                <option value="2025">2025</option>
                                                <option value="2026">2026</option>
                                                <option value="2027">2027</option>
                                            </select>
                                        </div>

                                        <div class="mb-3">
                                            <label htmlFor="cvv">CVV</label>
                                            <input type="number" id="cvv" class="form-control"
                                                placeholder="123" required />
                                        </div>
                                        <div class="mb-3">
                                            <label htmlFor="cards">Accepted Cards:</label>

                                            <div class="icon-container">

                                                <i class="fa fa-cc-visa navy-icon" ></i>
                                                <i class="fa fa-cc-amex blue-icon" ></i>
                                                <i class="fa fa-cc-mastercard red-icon"></i>
                                                <i class="fa fa-cc-discover orange-icon"></i>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                            <input type="submit" value="Confirm Payment"  disabled={loading}
                                class="btn btn-success w-100" />
                        </form>
                    </div>
                </div>

            </div>
            {loading && (
            <div class="fullscreen-spinner">
                <div class="spinner-border text-warning checkout-spinner" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
)}

        </>
    )
}



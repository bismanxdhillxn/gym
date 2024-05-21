import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import SeventhPage from './SeventhPage'
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const data = [
    {
      "id": 1,
      "name": "Cellucor C4 Original Pre Workout",
      "img": "/gym_images/p1.jpg",
      "detail": "Manufacturer: Cellucor\\n Country of Origin: USA\\n Net Quantity: 390.0 gram\\n No. of Items : 1 Pc",
      "price": "2638",
      "delivery": "92"
    },
    {
      "id": 2,
      "name": "Muscletech Mass Tech Extreme 2000",
      "img": "/gym_images/p2.jpg",
      "detail": "Manufacturer: MuscleTech by Superchem Nutri Formulation\\n Country of Origin: India\\n Net Quantity: 3000.0 gram\\n No. of Items : 1 Pc",
      "price": "3699",
      "delivery": "117"
    },
    {
      "id": 3,
      "name": "SN Syntha-6 Protein Powder 5 Lbs",
      "img": "/gym_images/p3.jpg",
      "detail": "Manufacturer: Bio-Engineered Supplements and Nutrition, Inc., 3500 Lacey Road, Suite 1200, Downers Grove, IL 60515\\n Country of Origin: USA\\n Net Quantity: 2270.0 gram\\n No. of Items : 1 Pc",
      "price": "5249",
      "delivery": "109"
    },
    {
      "id": 4,
      "name": "Ultimate Nutrition ISO Sensation 93",
      "img": "/gym_images/p4.jpg",
      "detail": "Manufacturer: Ultimate Nutrition\\n Country of Origin: Canada\\n Net Quantity: 2270.0 gram\\n No. of Items : 1 Pc",
      "price": "6307",
      "delivery": "183"
    },
    {
      "id": 5,
      "name": "Muscletech NitroTech Performance Series",
      "img": "/gym_images/p5.jpg",
      "detail": "Manufacturer: MuscleTech by Superchem Nutri formulations\\n Country of Origin: India\\n Net Quantity: 1810.0 gram\\n No. of Items : 1 Pc",
      "price": "4999",
      "delivery": "140"
    },
    {
      "id": 6,
      "name": "Dymatize ISO 100, 5Lbs",
      "img": "/gym_images/p6.jpg",
      "detail": "Manufacturer:Dymatize Nutrition\\n Country of Origin: India\\n Net Quantity: 2300.0 gram\\n No. of Items : 1 Pc",
      "price": "8149",
      "delivery": "192"
    },
    {
      "id": 7,
      "name": "ESN Black Series Iso 100 Whey",
      "img": "/gym_images/p7.jpg",
      "detail": "Manufacturer: Evolution Sports Nutritio Pvt Ltd\\n Country of Origin: India\\n Net Quantity: 2000.0 gram\\n No. of Items : 1 Pc",
      "price": "2899",
      "delivery": "85"
    }
  ];
  if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
  }

  function pushItemToCart(item) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  function addToCart(params) {
    var obj = data.find(item => item.id == params);
    pushItemToCart(obj);
    alert("Item added to Cart");


  }

  return (
    <>
      <Navigation />
      <main>
        <div class="container store">
          {
            data.map((item, index) => (
              <div class="item">
                <img src={item.img} alt="Item 1" />
                <div class="item-details">
                  <h2 class="item-name">{item.name}</h2>
                  <p class="item-price">MRP: ₹{item.price} (Incl. taxes)</p>
                  <button class="buy-btn" onClick={() => addToCart(item.id)}>Add to Cart</button>
                </div>
              </div>
            ))}

        </div>
        <SeventhPage />
        <Footer />
      </main>
    </>
  )
}
import React from "react";

import laptopImg from "./laptop.jpg";
import mobileImg from "./mobile.jpg";
import shoesImg from "./shoes.jpg";

function ShoppingList() {
  const items = [
    { name: "Laptop", price: "₹60,000", img: laptopImg },
    { name: "Mobile", price: "₹25,000", img: mobileImg },
    { name: "Shoes", price: "₹2,500", img: shoesImg },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-5">Shopping List</h2>

      <div className="row g-4 justify-content-center align-items-center">
        {items.map((item, index) => (
          <div
            className="col-sm-6 col-md-4 d-flex justify-content-center"
            key={index}
          >
            {/* Image + Card Wrapper */}
            <div className="text-center">
              {/* ✅ Image above card */}
              <img
                src={item.img}
                alt={item.name}
                className="mb-3"
                style={{
                  width: "140px",
                  height: "140px",
                  objectFit: "contain",
                }}
              />

              {/* ✅ Card */}
              <div
                className="card shadow-sm border-0 rounded-4 p-4"
                style={{ width: "560px" }}
              >
                <h4 className="fw-bold">{item.name}</h4>
                <p className="text-muted mb-2">Best Quality Product</p>
                <h5 className="text-success fw-bold">{item.price}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingList;

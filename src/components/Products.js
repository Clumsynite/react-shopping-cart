import React, { useState } from "react";

const Products = (props) => {
  const [phones] = useState(props.phones);
  const [quantity, setQuantity] = useState({});

  const handleChange = (e) => {
    const index = e.target.getAttribute("data-index");
    const quan = e.target.value;
    setQuantity({ ...quantity, [index]: quan });
  };

  const handleClick = (e) => {
    const index = e.target.getAttribute("data-index");
    props.addToCart(index, quantity[index]);
    setQuantity({...quantity, [index]: 0})
  };

  const renderItems = phones.map((item, index) => {
    return (
      <div key={index} className="col mb-3" data-index={index}>
        <div
          className="card h-100"
          style={{ cursor: "pointer" }}
          title={item.name}
        >
          <img
            src={item.src}
            alt={item.name}
            style={{ height: "240px" }}
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{item.brand}</h6>
            <p className="card-text">
              {" "}
              <strong>Price: </strong> {item.price}
            </p>
            <p className="card-text">
              {" "}
              <strong>Quantity: </strong> {item.quantity}
            </p>
          </div>
          <div className="card-footer d-flex flex-row justify-content-between align-items-center">
            <div className="w-50">
              <input
                type="text"
                className="form-control"
                onChange={handleChange}
                data-index={index}
                value={quantity[index] || ""}
                placeholder="0"
                maxLength={2}
              />
            </div>
            <button
              onClick={handleClick}
              data-index={index}
              className="btn btn-success pt-2"
            >
              <i className="material-icons" data-index={index}>
                add_shopping_cart
              </i>
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="Products mb-5">
      <div
        className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6"
        style={{ userSelect: "none" }}
      >
        {renderItems}
      </div>
    </div>
  );
};

export default Products;

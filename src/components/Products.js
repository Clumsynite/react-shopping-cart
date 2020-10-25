import React, { useState } from "react";

const Products = (props) => {
  const [phones] = useState(props.phones);
  const renderItems = phones.map((item, index) => {
    return (
      <div key={index} className="col mb-3" data-index={index}>
        <div
          className="card"
          data-index={index}
          style={{ cursor: "pointer" }}
          title={item.name}
        >
          <img
            src={item.src}
            alt={item.name}
            data-index={index}
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
        </div>
      </div>
    );
  });
  return (
    <div className="Products mb-5">
      <div
        className="row row-cols-2 row-cols-sm-3 row-cols-md-6"
        style={{ userSelect: "none" }}
      >
        {renderItems}
      </div>
    </div>
  );
};

export default Products;

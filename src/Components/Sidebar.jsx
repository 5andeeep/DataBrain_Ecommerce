import React from "react";

const Sidebar = ({ filterData }) => {
  return (
    <div className="sidebar">
      <div className="brand-wrapper">
        <h3>Brands</h3>
        <span>
          <input type="checkbox" /> Apple
        </span>
        <span>
          <input type="checkbox" /> Samsung
        </span>
        <span>
          <input type="checkbox" /> Oppo
        </span>
        <span>
          <input type="checkbox" /> Huawai
        </span>
        <span>
          <input type="checkbox" /> Microsoft
        </span>
        <span>
          <input type="checkbox" /> HP
        </span>
        <span>
          <input type="checkbox" /> Infinix
        </span>
      </div>
      <div className="price-wrapper">
        <h3>Price</h3>
        <span>
          <input type="checkbox" /> below $500
        </span>
        <span>
          <input type="checkbox" /> $500 - $1000
        </span>
        <span>
          <input type="checkbox" /> $1000 - $1500
        </span>
        <span>
          <input type="checkbox" /> $1500 - $2000
        </span>
      </div>
    </div>
  );
};

export default Sidebar;

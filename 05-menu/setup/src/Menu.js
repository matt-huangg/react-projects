import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, category, price, img, desc } = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} className="photo" atl={title} />

            <div className="item-info">
              <h4>{title}</h4>
              <h4 className="price">${price}</h4>
            </div>
            <p className="item-text">{desc}</p>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;

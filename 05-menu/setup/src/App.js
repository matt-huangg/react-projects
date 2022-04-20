import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

//variable for all unique categories

const AllCategories = ["all", ...new Set(items.map((item) => item.category))];
console.log(AllCategories);

function App() {
  //state variables to get items from data

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  //filter items to display certain categories

  const filterItems = (category) => {
    if (category != "all") {
      const newItems = items.filter((item) => item.category === category);
      setMenuItems(newItems);
    } else {
      setMenuItems(items);
    }
  };

  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h1>Our Menu</h1>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={AllCategories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;

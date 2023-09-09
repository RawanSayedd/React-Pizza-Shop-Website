import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
function Menu() {
  return (
    <div className="menu">
      <h1 className="menu-title">OUR MENU</h1>
      <div className="menu-list">
        {MenuList.map((menuItem, index) => {
          return (
            <MenuItem
              index={index}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;

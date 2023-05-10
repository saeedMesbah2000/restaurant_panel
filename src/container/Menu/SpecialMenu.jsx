import React from "react";
import "./SpecialMenu.css";
import {SubHeading, MenuItem} from "../../components";
import {images, data} from "../../constants";

const SpecialMenu = () => {
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palatte" />
        <h1 className="headtext__cormorant">Todays's Special</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_drinks flex__center">
          <p className="app__specialMenu-menu_heading">Juice & Soda</p>
          <div className="app__specialMenu-menu_items">
            {data.drinks.map((drinks, index) => (
              <MenuItem
                key={drinks.title + index}
                title={drinks.title}
                price={drinks.price}
                tags={drinks.tags}
              />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu_img" />
        </div>

        <div className="app__specialMenu-menu_cocktails flex__center">
          <p className="app__specialMenu-menu_heading">Cocktails</p>
          <div className="app__specialMenu-menu_items">
            {data.cocktails.map((cocktails, index) => (
              <MenuItem
                key={cocktails.title + index}
                title={cocktails.title}
                price={cocktails.price}
                tags={cocktails.tags}
              />
            ))}
          </div>
        </div>
      </div>
      <div style={{marginTop: "15px"}}>
        <button type="button" className="costume__button"></button>
      </div>
    </div>
  );
};

export default SpecialMenu;

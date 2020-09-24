import React from "react";
import Product from "./Product";
import "./Home.css";



function Home() {
    return(
    
    <div className="home">
        <img className="home__image"
        src="https://m.media-amazon.com/images/G/01/digital/video/sonata/Superhero_UK_Acquisition_FT_Apr_20/7a2ef2c8-d54c-4da8-beba-f4e12a0f10d5._UR1280,600_SX1500_FMjpg_.jpg"
        alt=""
        />

        <div className="home__row">

        <Product 
          id="12321341"
          title="Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 64 GB"
         price={299}
         rating={5}
         image="https://images-na.ssl-images-amazon.com/images/I/615YaAiA-ML._SL1500_.jpg"
         />
         <Product 
         id="65645632"
         title="Hanes Men's Ecosmart Fleece Sweatshirt"
        price={11.19}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/41wj5G-wpiL._SX38_SY50_CR,0,0,38,50_.jpg"
         />

         </div>

         <div className="home__row">

       <Product 
         id="56788765"
         title="Walsh WSR35S1 Compact Refrigerator, Single Door Fridge, Adjustable Mechanical Thermostat with Chiller, Reversible Doors, 3.5 Cu.Ft, Stainless Steel Look"
        price={219.99}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/71s-z3Yrr2L._AC_SL1500_.jpg"
        />
       <Product 
         id="45677654"
         title="OPPO F11 Pro (Thunder Black, 6GB RAM, 128GB Storage) (Rising Camera)"
        price={371.34}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/51xHk2HlelL._AC_SL1100_.jpg"
        />

        <Product 
         id="23455432"
         title="PUMA Men's Ignite Pwradapt Caged Golf Shoe"
        price={121.30}
        rating={5}
        image="https://m.media-amazon.com/images/I/71Zux1MeraL._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>

      <div className="home__row">

       <Product 
         id="13455431"
         title="ASUS Vivobook Flip 14 Thin and Light 2-in-1 Laptop, 14” HD Touchscreen, Intel Quad-Core Pentium N5000 Processor, 4GB DDR4, 128GB eMMC Storage, Windows 10, TP401MA-AB21T"
         price={444}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/81Iy9egjpEL._AC_SL1500_.jpg"
        />



      </div>



    </div>

    );
}



export default Home;
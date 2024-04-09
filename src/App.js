import Heading from "./Components/Layout/Heading";
import React from "react";

import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./Store/CartProvider";
function App() {
  const [meal,setmeal]=useState(false)

  return (
    <>
    <CartProvider>
      <Heading oncartClick2={()=>setmeal(true)}/>
      <Meals/>
      <main>
        {meal && <Cart closecart={()=>setmeal(false)}/>}
      </main>
      
    </CartProvider>
    </>

  );
}

export default App;

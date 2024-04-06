import Heading from "./Components/Layout/Heading";
import React from "react";
import { Fragment } from "react";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
function App() {
  const [meal,setmeal]=useState(false)

  return (
    <Fragment>
      <Heading oncartClick2={()=>setmeal(true)}/>
      <Meals/>
      <main>
        {meal && <Cart closecart={()=>setmeal(false)}/>}
      </main>
      
    </Fragment>

  );
}

export default App;

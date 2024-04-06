import Heading from "./Components/Layout/Heading";
import React from "react";
import { Fragment } from "react";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
function App() {
  return (
    <Fragment>
      <Heading/>
      <Meals/>
      <main>
        <Cart/>
      </main>
      
    </Fragment>

  );
}

export default App;

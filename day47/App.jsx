// import React from "react";
// import LoginForm from "./day44/LoginForm";
// import LayoutDemo from "./day44/LayoutDemo";
// import MuiButtonDemo from "./day44/MuiButtonDemo";
// import ProductCard from "./day44/ProductCard";
// import WeatherApp from "./day45/WeatherApp";
// import CalculatorApp from "./day45/CalculatorApp";
// import GenderRadio from "./day46/GenderRadio";
// import ThemeSwitch from "./day46/ThemeSwitch";

// function App() {
//   return (
//     <div>
//       {/* <LoginForm /> */}
//       {/* <LayoutDemo /> */}
//       {/* <MuiButtonDemo /> */}
//       {/* <ProductCard /> */}
//       {/* <WeatherApp /> */}
//       {/* <CalculatorApp /> */}
//       <GenderRadio />
//       <ThemeSwitch />
//     </div>
//   );
// }

// export default App;

import React from "react";

import Counter from "./components/Counter";
import Todo from "./components/Todo";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <Counter />

      <hr />

      <Todo />
    </div>
  );
}

export default App;
// import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="container">
      <Header/>
      <h1>Namaste React App Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

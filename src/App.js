import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="content">
        <h1>Welcome to the Future</h1>
        <p>Explore our creative and innovative solutions.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;

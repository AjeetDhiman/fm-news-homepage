import * as React from "react";
import "./App.css";
import Articles from "./components/Articles";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto py-6">
      <Navbar />
      <MainSection />
      <Articles />
    </div>
  );
}

export default App;

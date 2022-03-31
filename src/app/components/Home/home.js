import React from "react";
import About from "../About/about";
import Events from "../Events";
import Hero from "../Hero";
import Timer from "../Timer/Timer";
import Slider from '../Slider/Slider'

function home() {
  return (
    <div>
      <Hero />

      <Timer />

      <About />

      <Slider />
      <Events />
    </div>
  );
}

export default home;

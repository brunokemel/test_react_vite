import * as React from "react";
import { HeroContainer } from "./style";

function Hero() {
  return (
    <HeroContainer>
      <div className="hero__content">
        <h1 className="hero__title">Welcome to Our Website</h1>
        <p className="hero__description">We are glad to have you here.</p>
      </div>
    </HeroContainer>
  );
}

export default Hero;

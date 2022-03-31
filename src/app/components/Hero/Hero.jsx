import { Fade } from "react-reveal";
import "./hero.css";

export const HeroContainer = ({ children }) => (
  <div className="hero" id="home">
    {children}
  </div>
);

export const HeroContent = () => (
  <div className="hero-content">
    <Fade bottom>
      <HeroHeader />
      <HeroSubtitle>Making Leap A Sense</HeroSubtitle>
    </Fade>
  </div>
);

export const HeroHeader = ({ children }) => (
  <div className="hero-header">{children}</div>
);

export const HeroSubtitle = ({ children }) => (
  <div className="hero-subtitle">{children}</div>
);

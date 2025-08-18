import Leftleaf from "../assets/images/hero-left-leaf.png"
import Rightleaf from "../assets/images/hero-right-leaf.png"

const Hero = () => {
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>
        <img src={Leftleaf} alt="left-leaf" className="left-leaf"/>
        <img src={Rightleaf} alt="right-leaf" className="right-leaf"/>  
      </section>
    </>
  );
};

export default Hero;

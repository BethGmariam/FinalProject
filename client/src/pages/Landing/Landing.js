import React from "react";
import "./Landing.css"
// import ImageCard from "../../components/ImageCard";

const Landing = () => (
  <div id = "landing">
    <h1 className = "gift-images"> 
      <span role="img" aria-label="Gift"> ❤🎁❤🎁 ❤🎁 ❤🎁  </span>  
      <span role="img" aria-label="Gift"> ❤🎁 </span> 
      <span role="img" aria-label="Gift"> ❤🎁 </span> 
    </h1>
    <div id = "landing-content">
      <h2> Who are we? </h2>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris,
        ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam
        quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
        diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
    <div id = "about">
        <div className = "card">
            <h5> Mission </h5>
            <p> Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at. </p>
        </div>
        <div className = "card">
            <h5> Vision </h5>
            <p> Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at. </p>
        </div>
        <div className = "card">
            <h5> Testimonials </h5>
            <p> Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at. </p>
        </div>
    </div>
  </div>
);

// class Landing extends Component {

// }

export default Landing;
import React from "react";
import "./Landing.css"
// import ImageCard from "../../components/ImageCard";

const Landing = () => (
  <div id = "landing">
    <h2> We are your #1 Gift-Exchange Community! </h2>
      <p className = "main-info"> In Santa's castle, everyone is a giver. The world is crazy enough as it is but that is not an excuse to keep sharing love towards one another. Let us encourage every person to contribute to Santa's wish, for everyone to have hearts filled with love. </p>
    <img alt = "gifts" src={require('../../images/gift3.jpeg')} />
    <div id = "landing-content">
      <h5> Mission <br /> To build a community of givers. To allow people to see each other as a fellow being. To remove divisiveness among strangers. <br /> </h5>
      <h5> Vision <br /> To be the main gift exchange hub spot for the holiday season. </h5>
    </div>
  </div>
);

// class Landing extends Component {

// }

export default Landing;
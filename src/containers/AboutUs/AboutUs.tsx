import React from 'react';
import dronePic from "../../assets/img1.png"

const AboutUs = () => {
  return (
    <div className="p-2" style={{height: '90vh'}}>
      <img src={dronePic} alt="our pic" style={{float: 'right', paddingLeft: '15px'}}/>
      <h2>Who we are?</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium
        aperiam eius error facere, harum in ipsa ipsam, magnam nemo nisi quaerat quasi quia
        sapiente sequi sit sunt suscipit ullam veniam voluptatum? Atque aut eius fugiat ipsa
        </p>
      <h5>Our advantages</h5>
      <ul>
        <li>Advantage 1</li>
        <li>Advantage 2</li>
        <li>Advantage 3</li>
      </ul>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi at atque
        consequuntur cum deleniti dolorum eos eum facilis fuga fugit harum illo iure libero
        magnam neque nulla odit, omnis possimus quia, quibusdam quo rem sit suscipit totam
        unde voluptas voluptatem. Distinctio, dolor enim fugit laboriosam maiores nihil quo rem.</p>
    </div>
  );
};

export default AboutUs;
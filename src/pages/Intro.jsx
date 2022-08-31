import React from 'react'
import { Navbar } from '../components/Navbar';
import "./intro.css"
import dota from "../components/img/intro_dota.jpeg"

export const Intro = () => {
  return (
    <div>
      <div className="nav">
        <Navbar />
      </div>
      <div className="dota-intro">
        <img src={dota} alt="" />
        <h1>Buy digital art NFT collection</h1>
      </div>
    </div>
  );
}

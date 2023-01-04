import React from 'react'
import {Link} from "react-router-dom";
import animeimg from "../img/animeimg.png"
import '../App.css';

const Home = () => {
  return (
    <>
      <div className="homebody">
      <div className="RightImage">
            <img src={animeimg} alt="" />
        </div>
        <div className="heading">
            <h1>Welcome To Anime Hub</h1>
            <h3>Search out animes as much as you want</h3>
            <Link className='letsSearch' to="/Search">Lets Search</Link>
        </div>

      </div>
    </>
  )
}

export default Home

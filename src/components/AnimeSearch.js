import React, { useEffect, useState } from 'react'
import '../App.css';


const AnimeSearch = () => {
  
const [endPoint, setEndPoint] = useState("anime new");
const [container, setContainer] = useState([]);
const [finalSubmit, setFinalSubmit] = useState('');


useEffect(() => {
  fetchMe();// eslint-disable-next-line
},[finalSubmit]);


const fetchMe = () => {
  fetch(`https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=${endPoint}&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc`, {
    "method": 'GET',
    "headers": {
      'X-RapidAPI-Key': 'd58cf646ffmsh1343c9557eacce4p15ae9djsn8a781b8188f1',
      'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
    }
    })
    .then(res => {
      return res.json()
    })
    .then(json =>(json))
    .then(fetched => setContainer(fetched.data))
    .catch(err => console.error('error:' + err));

}

const onChangeHandler = (e) => {
  setEndPoint(e.target.value)
  // console.log("clicked")
}

const submitHandler = e => {
  e.preventDefault();
  if (container) {
    setFinalSubmit(endPoint);
  } else {
    alert("nothing")
  }

}

return (
  <>
    <div className="App">
      <h1 className='thehead'>The Anime Hub</h1>
      <form onSubmit={submitHandler}>
        <input className='TheSearch' type="text" value={endPoint} onChange={onChangeHandler} />
        <button className='TheButton' type='submit'>Search Anime</button>
      </form>
      {container.map((item, index) => {
        return (
          <div key={index} className="Body">
            <img className='imggg' src={item.image} alt="Not found" />
            <p className='theTitle'>{item.title}</p>
            <p className='genre'>{item.genres}</p>
            <span><b> The Synopsis: </b>{!item.synopsis?"No Synopsis visit below":item.synopsis}</span><br/>
            <br/><a href={item.link}>Visit</a>
          </div>

        )
      })}
    </div>
  </>
);
}

export default AnimeSearch

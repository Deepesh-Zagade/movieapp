import axios from 'axios'
import React, { useEffect, useState } from 'react'

let container = {
  padding: "5px",
  "border-bottom": "2px solid #ae8a94",
  display: "flex",
  "flex=wrap": "wrap"
}
let imgstyle = { objectfit: "cover", height: "300px"  }
let infocolumn = {"margin-left":"25px","width":"80%"}
let info = {"whiteSpace":"nowrap", "textOverflow":"ellipsis","overflow":"hidden", "fontWeight":"bold","margin":"0px"}
let span = {"opacity":"0.7"}

export default function Movieinfo(props) {
  const [movieinfo,setMovieinfo] = useState()
  const {selectedmovie,setSelectedmovie} = props
  useEffect(()=>{
    axios
    .get(`http://www.omdbapi.com/?i=${selectedmovie}&apikey=4e0ab1c5`)
    .then((response)=>{setMovieinfo(response.data)})
  },[selectedmovie])
  return (
    <>
    {movieinfo?<>
    <div className="container" style={container}>
        <img src={movieinfo?.Poster} alt="" style={imgstyle} />
        <div style={infocolumn}>
          <div style={info} >{movieinfo?.Type} : {movieinfo?.Title}</div>
          <div style={info} >IMDB Rating : <span style={span}>{movieinfo?.imdbRating}</span></div>
          <div style={info} >Year : <span style={span}>{movieinfo?.Year}</span></div>
          <div style={info} >Language : <span style={span}>{movieinfo?.Language}</span></div>
          <div style={info} >Rated : <span style={span}>{movieinfo?.Rated}</span></div>
          <div style={info} >Released : <span style={span}>{movieinfo?.Released}</span></div>
          <div style={info} >Runtime : <span style={span}>{movieinfo?.Runtime}</span></div>
          <div style={info} >Genre : <span style={span}>{movieinfo?.Genre}</span></div>
          <div style={info} >Director : <span style={span}>{movieinfo?.Director}</span></div>
          <div style={info} >Cast : <span style={span}>{movieinfo?.Actors}</span></div>
          <div style={info} >Plot : <span style={{"whiteSpace":"nowrap", "textOverflow":"ellipsis","overflow":"hidden","opacity":"0.7"}}>{movieinfo?.Plot}</span></div>
        </div>
        <div style={{cursor:"pointer"}} onClick = {()=>setSelectedmovie()} >x</div>
    </div>
    </>:"Loading...."}
    </>
  )
}

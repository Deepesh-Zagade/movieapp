import React from 'react'

export default function Card(props) {
    let cardstyle = { padding:"5px",cursor:"pointer" }
    let titlestyle = {"whiteSpace":"nowrap", "textOverflow":"ellipsis","overflow":"hidden", "fontWeight":"bold","margin":"0px"}
    let imgstyle = { objectfit: "cover", "height": "321px"  }

    let { Title , Year ,Type,  Poster , imdbID } = props.movie
    
    return (
        <>
        <div className="col-md-3" onClick={()=>props.setSelectedmovie(imdbID)} >
            <div className="card mx-3 my-3" style={cardstyle} >
                <img src={Poster} className="card-img-top" alt="..." style={imgstyle} />
                <div className="card-body" style={{padding:"2px"}} >
                    <p className="card-text" style={titlestyle}>{Title}</p>
                    <p className="card-text" style={{display:"flex", justifyContent:"space-between"}} >Year : {Year} <span>Type : {Type}</span> </p>
                </div>
            </div>
        </div>
        </>
    )
}

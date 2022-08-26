import React from 'react'
import Card from './Card'


export default function Movies(props) {
    
    let movielist = props.movielist 

    return (
        <div className="container" >
            <div className='row my-2' >
                
                {movielist?.length?movielist.map((movie,index)=>
                 <Card key={index} movie={movie} setSelectedmovie={props.setSelectedmovie} /> ): <div className="text-center">NO MOVIE SEARCH</div> }
                
            </div>
        </div>


    )
}


//  <div className='row my-2'>
//             <div className="col-md-3">
//                 < Card />
//             </div>
//             <div className="col-md-3">
//                 < Card />
//             </div>
//             <div className="col-md-3">
//                 < Card />
//             </div>
//             <div className="col-md-3">
//                 < Card />
//             </div>
//  </div> 
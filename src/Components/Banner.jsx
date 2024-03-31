import axios from "axios";
import { useEffect, useState } from "react";

function Banner(){
    let [detail,setDetail] = useState(undefined)

    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=7d07792ca57e31a084669693c8f03ad9')
        .then(function(res){
            console.log(res);
            
            console.log(res.data.results[0].poster_path);
            let data = res.data.results[0]
            setDetail(data);
        })
        return  setDetail(undefined);
    },[]);

    if(detail == undefined){
        return
    }
    return(
        <div className="h-[20vh] md:h-[70vh] bg-cover bg-center flex items-end" 
        style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${detail.poster_path})`}}>
            <div className="text-xl text-white bg-gray-900/60 w-full p-4 text-center ">
                {detail.title}
            </div>
        </div>
    )
}

export default Banner;

// import React from 'react'

// function Banner() {
//   return (
//     <div className='h-[20vh] md:h-[60vh] bg-center bg-no-repeat flex items-end'
//     style={{
//         backgroundImage : `url(https://assets-in.bmscdn.com/discovery-catalog/events/et00311714-ewdhvajezf-landscape.jpg)`
//     }}>


//         <div className='text-xl md:text-3xl bg-gray-900 bg-opacity-60 p-4 text-white text-center w-full'>
//             John Wick
//         </div>
       


//     </div>
//   )
// }

// export default Banner
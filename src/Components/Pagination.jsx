import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
export default function Pagination({pageNo,handleNext,handlePrev}){

    return(
        <div className="flex justify-center p-4 mt-8 items-center bg-gray-400">
            <div onClick={handlePrev} className="px-8 hover:cursor-pointer "><FontAwesomeIcon icon={faArrowLeft} /></div>
            {/* <div onClick={handlePrev} className='border-2 broder-r-0 p2 rounded-l-xl border-blue-400'>prev</div> */}
            <div className="px-8 font-bold hover:cursor-pointer">{pageNo}</div>
            {/* <div className='border-2 border-blue-400 broder-r-0 '>{pageNo}</div> */}

            <div onClick={handleNext} className="px-8 hover:cursor-pointer"><FontAwesomeIcon icon={faArrowRight} /></div>
            {/* <div onClick={handleNext} className='border-2 p2 rounded-r-xl border-blue-400'>next</div> */}
        </div>
    )
}

// <div onClick={onPrevProp} className='border-2 broder-r-0 p2 rounded-l-xl border-blue-400'>
// Previous
// </div>


// <div className='border-2 border-blue-400 broder-r-0 '>
// {pageNumProp}
// </div>



// <div onClick={onNextProp} className='border-2 p2 rounded-r-xl border-blue-400'>
// Next
// </div>
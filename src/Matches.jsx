import React ,{ useEffect, useState  } from "react";
import Collapsesecond from "./Collapsesecond";
import {getMatches} from "./api/Api";

const Matches = () => {
    const [matches,setMatches] = useState([]);
    useEffect(() => {
        getMatches()
            .then((data) => {
                setMatches(data.matches)
                console.log(data.matches);
            })
            .catch();
    },[]);
    return(
        <>
         {
           matches.map((match) => (
               <Collapsesecond key = {match.unique_id} match = {match} />
           ))
       }
        </>
    )

}


export default Matches;
import React, { useEffect, useState ,Grid } from "react";
import Collapse from "./Collapse"
import {getNews} from "./api/Api"



const News = () => {
    const [articles,setArticles] = useState([]);

    useEffect(() => {
        getNews()
            .then((data) => {
                setArticles(data.articles)
                console.log(data.articles);
            })
            .catch();
    },[]);
    return (
        <>
        
       {
           articles.map((article) => (
               <Collapse article = {article} />
           ))
       }
      
        </>
    )
}



export default  News;
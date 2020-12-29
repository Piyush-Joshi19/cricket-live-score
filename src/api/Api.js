export const getMatches = () => {
    const url = "https://cricapi.com/api/matches?apikey=S7F7yp6r9QdABr1rA9d5RjWfaJs2";

    return fetch(url)
    .then((response) => response.json())
    .catch((error)=> console.log(`The Error:  ${error}`));
};


export const getMatchDetail = (id) => {
    const url = `https://cricapi.com/api/cricketScore?apikey=S7F7yp6r9QdABr1rA9d5RjWfaJs2&unique_id=${id}`

    return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error));

}



export const getNews = () =>  {
    const url = "http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=62a17c333a654b1fb51047fc604fed7a";
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log("Error: ", error));
}



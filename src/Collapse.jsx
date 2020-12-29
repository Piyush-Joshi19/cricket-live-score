import React from "react";


const Collapse = ({ article }) => {
  const getNewsCard = () => {
    return <>

      <div>

      </div >
      <div class="conatiner my-3 ml-5">
        <div class="accordion" id="accordionExample" >
          <div class="card">
            <div class="card-header" id="headingOne">
              <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  {article["title"]}
                </button>
              </h2>
            </div>

            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div class="card-body">
                {article["description"]}. <a href={article['url']} target="_blank" > Read more here </a>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
    
  }
  return getNewsCard();

}



export default Collapse;





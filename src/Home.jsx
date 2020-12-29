import React from "react";
import {Carousel} from "react-bootstrap";

const Home = () => {
    return (
        <>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 home_img"
      src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1494&q=80"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>Welcome to my <strong className="app-name">Live Score App</strong></h1>
      <h3>Live Score provides you real time cricket score</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100  home_img"
      src="https://i.pinimg.com/originals/c5/e9/0a/c5e90a42ce0c0002305bd85839a5700f.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
        <h1>Welcome to my <strong className="app-name">Live Score App</strong></h1>
        <h3>Live Score  provides you all the latest sports news all around the world</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    )
}



export default Home;


// "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1494&q=80"

// <section className="d-flex align-items-center">
//                 <div className="container-fluid nav_bg">
//                     <div className="row">
//                         <div className="col-10 mx-auto">
//                             <div className="row">
//                                 <div className="home_div">
//                                     <h1 className="">Welcome to my <strong className="app-name">Live Score App</strong> </h1>
//                                         <h2>Live Score provides you real time cricket score. It also provides you all the latest sports news
//                                         </h2>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
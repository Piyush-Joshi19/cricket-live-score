import React, {useState, Fragment} from "react";
import { Card, CardContent, Typography, CardActions, Button,Grid, Dialog, DialogContent, DialogContentText,DialogTitle,DialogActions } from "@material-ui/core";
import {getMatchDetail} from "./api/Api";


const MyCard = ({match}) => {

    const[detial, setDetail] = useState({});

    const[open, setOpen] = useState(false);

    const handleClick = (id) => {
        getMatchDetail(id)
        .then((data)=> {console.log("MATCH DATA", data)
        setDetail(data);  
        handleOpen();
        
    })
        .catch((error)=> console.log(error));
    }

    

    const matchCard = () => {
        return (
            
            <Card style ={{marginTop: 20}}>
                <CardContent>
                    <Grid  container justify = "center" alignItems = "center" spacing ={4}>
                        
                        <Grid item> 
                  <Typography variant = "h5">{match["team-1"]}</Typography>
                        </Grid>
                        <Grid item>
                        <Typography style = {{color: "red"}} variant = "h5">Versus</Typography>
                        </Grid>
                        <Grid item>
                        <Typography variant = "h5">{match["team-2"]}</Typography>
                        </Grid>
                        <Grid item>
                            {/* <Typography variant = "h6">{match['toss_winner_team']} </Typography> */}
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid  container justify = "center" alignItems = "center">
                    <Button onClick = {() => {
                        handleClick(match.unique_id);
                    }}  variant="contained" color="primary">
                        Show Match Details
                    </Button>
                    <Button style = {{marginLeft: 9}} variant="contained" color="primary">
                        Start Time: {new Date(match.dateTimeGMT).toLocaleString()}
                    </Button>
                    </Grid>
                </CardActions>
            </Card>
        )
    }
    const  handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }
    const getDialog = () => (
        <Dialog open = {open} onClose = {handleClose}>
            <DialogTitle id = "alert-dialog-title">
            {"Match Detail.."}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id = "alert-dialog-description">
                    <Typography>Match <span style ={{fontStyle: "italic",fontWeight: "bold"}}>
                        {detial.matchStarted? "Started": "Still Not Started"}
                        </span></Typography>
                        <Typography>
                            Score <span style ={{fontStyle: "italic", fontWeight: "bold"}}> 
                                {detial.score}
                            </span>
                        </Typography>
                        <Typography>{detial.stat}</Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick = {handleClose} color = "primary" autoFocus>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )


    return (
        <Fragment>
            { matchCard()}
            {getDialog()}
        </Fragment>
    )
}


export default MyCard;








































































// import React, { Fragment } from "react";
// import { useState } from "react";
// import {getMatchDetail} from "./api/Api";


// const Collapsesecond = ({match}) => {

//         const[detail, setDetail] = useState({});

//         const handleClick = (id) => {
//             getMatchDetail(id)
//             .then((data) => {
//                 console.log("MATCH DATA", data)
//                 setDetail(data);
//             })
//             .catch((error) => {
//                 console.log(error);
//             })
//         }


//     const getMatchesCard = () => {
//         return <>
//         <div>
//         </div>
//         <div class="accordion" id="accordionExample" >
//             <div class="card">
//                 <div class="card-header" id="headingOne">
//                     <h2 class="mb-0">
//                         <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                          <strong>{match["type"]}</strong>  {match['team-1']} VS {match['team-2']}<br/>
//                          {match["dateTimeGMT"].toLocaleString()}
//                         </button>
//                     </h2>
//                 </div>

//                 <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
//                     <div class="card-body">
//                         <p>Match Details:</p> 
//                         {match.matchStarted? "Started": "Still Not Started"} <br/>
//                         {match['toss_winner_team']} won the Toss <br />
//                         Score: {detail.stat}
                        

//                     </div>
//                 </div>
//             </div>
//         </div>
//     </>
//     }
//     return (
//         <Fragment>
//             {getMatchesCard()}
            
//         </Fragment>
//     )
    
// }


// export default Collapsesecond;

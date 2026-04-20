import React, { useContext, useState, useEffect } from "react";
import Card from '@mui/material/Card';
import {Link} from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import AddWord from "../components/AddWord/AddWord";
import {modalContext} from "../App";
import nature from "../images/nature.png";
import science from "../images/science.png";
import vehicle from "../images/vehicle.png";
import body from "../images/body.png";
import fruits from "../images/fruits.png";
import general from "../images/general.png";
import greetings from "../images/greetings.png";
import Decks from "../components/Decks/Decks";
import Portal from "../components/Portal/Portal";
import Button from '@mui/material/Button';
import axios from "axios";

export default function Home(){

    const {isModalClosed, setIsModalClosed} = useContext(modalContext);
    const [idiom, setIdiom] = useState("");
    const [showIdiomMeaning, setShowIdiomMeaning] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:4200/v1/flashcards/idioms')
        .then(res => {
            setIdiom(res.data)
            console.log(res.data);
        })
        .catch(err => console.log('failed to fetch to Idiom', err));
    }, []);

    return(
        <>
        <div className="home-container">
        <div className="row1-container">
        <div style={{display: "flex", marginLeft: "30px", marginTop: "50px", marginBottom: "30px", alignItems: 'center'}}>
        <h3>Your decks</h3>
        <AddIcon onClick={e => setIsModalClosed(false)}/>
        {
            !isModalClosed && <Portal><AddWord setIsModalClosed={setIsModalClosed}/></Portal>
        }
        <Button variant="contained" color='success' onClick={e => setIsModalClosed(false)} sx={{width:"110px", height: "35px",margin: '8px', textTransform: "none", marginLeft: 'auto'}}>Add Word</Button>
        </div>

        <Decks />
        

        {idiom? <div style={{marginLeft: "30px", marginTop: "50px"}}><h3 style={{display: "inline-block"}}>Idioms - </h3> <span style={{fontFamily: 'Caveat', fontSize: '18px', marginLeft: "10px"}}>"{idiom?.idiom}" </span></div> : null}
        </div>
        <div className='row2-container'>
        
        <h3 style={{marginLeft: "30px", marginTop: "50px", marginBottom: "30px", gridColumn: "1"}}>Words by category</h3>
        <Link to="/card?category=Nature" style={{gridColumn: "1", marginLeft: "40px", textDecoration: 'none'}}>
        <Card elevation='5' sx={{maxWidth: "250px", marginRight: "20px", height: "100px"}} >
        <div style={{marginLeft: '10px'}}>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <h4>Nature</h4>
            <img src={nature} style={{height:"40px", marginLeft: '5px'}} alt="wbc-img"/>
        </div>
            <p>Level: B1</p>
        </div>
        </Card>

        </Link>


        <Link to="/card?category=Body parts" style={{gridColumn: "2", marginLeft: "40px", textDecoration: 'none'}}>
        <Card elevation='5' sx={{maxWidth: "250px", marginRight: "20px", height: "100px", gridColumn: "1", gridRow:"2"}} >
        <div style={{marginLeft: '10px'}}>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <h4 style={{display: "inline"}}>Body parts</h4>
            <img src={body} style={{height:"40px", marginLeft: '5px'}} alt="wbc-img"/>
        </div>
            <p>Level: B1</p>
        </div>
        </Card>
        </Link>

        <Link to="/card?category=Science" style={{gridColumn: "3", marginLeft: "40px", textDecoration: 'none'}}>
        <Card elevation='5' sx={{maxWidth: "250px", marginRight: "20px", height: "100px", gridColumn: "2"}} >
        <div style={{marginLeft: '10px'}}>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <h4 style={{display: "inline"}}>Science</h4>
            <span><img src={science} style={{height:"40px", marginLeft: '5px'}} alt="wbc-img"/></span>
        </div>
            <p>Level: B2</p>
        </div>
        </Card>
        </Link>

        <Link to="/card?category=Greetings" style={{gridColumn: "1", marginLeft: "40px", textDecoration: 'none'}}>
        <Card elevation='5' sx={{maxWidth: "250px", marginRight: "20px", height: "100px", gridColumn: "2"}} >
        <div style={{marginLeft: '10px'}}>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <h4 style={{display: "inline"}}>Greetings</h4>
            <img src={greetings} style={{height:"40px", marginLeft: '5px'}} alt="wbc-img"/>
        
        </div>
            <p>Level: A2</p>
        </div>
        </Card>
        </Link>

        <Link to="/card?category=Food" style={{gridColumn: "2", marginLeft: "40px", textDecoration: 'none'}}>
        <Card elevation='5' sx={{maxWidth: "250px", marginRight: "20px", height: "100px"}} >
        <div style={{marginLeft: '10px'}}>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <h4 style={{display: "inline"}}>Food</h4>
            <img src={fruits} style={{height:"40px", marginLeft: '5px'}} alt="wbc-img"/>
        </div>
            <p>Level: A2</p>
        </div>
        </Card>
        </Link>

        <Link to="/card?category=Vehicles" style={{gridColumn: "3", marginLeft: "40px", textDecoration: 'none'}}>
        <Card elevation='5' sx={{maxWidth: "250px", marginRight: "20px", height: "100px"}} >
        <div style={{marginLeft: '10px'}}>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <h4 style={{display: "inline"}}>Vehicles</h4>
            <img src={vehicle} style={{height:"40px", marginLeft: '5px'}} alt="wbc-img"/>
        </div>
            <p>Level: B1</p>
        </div>
        </Card>
        </Link>
        <Link to="/card?category=General" style={{gridColumn: "1", marginLeft: "40px", textDecoration: 'none'}}>
        <Card elevation='5' sx={{maxWidth: "250px", marginRight: "20px", height: "100px"}} >
        <div style={{marginLeft: '10px'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
            <h4>General</h4>
            <img src={general} style={{height:"40px", marginLeft: '5px'}} alt="wbc-img"/>
            </div>
            <p>Level: B2</p>
        </div>
        </Card>
        </Link>
        </div> 
        </div>
        </>
    )
}
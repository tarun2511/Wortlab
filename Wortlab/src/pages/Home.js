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
import tech from "../images/tech.png";
import Decks from "../components/Decks/Decks";
import Portal from "../components/Portal/Portal";
import Button from '@mui/material/Button';
import axios from "axios";
import Alert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';

export default function Home(){

    const {isModalClosed, setIsModalClosed} = useContext(modalContext);
    const [idiom, setIdiom] = useState("");
    const [showIdiomMeaning, setShowIdiomMeaning] = useState(false);
    const [ isAddWordSuccess, setIsAddWordSuccess] = useState(false);
    const [isAddWordError, setIsAddWordError] = useState(false);

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
            {isAddWordSuccess && <Alert severity="success">Word added successfully!</Alert> }
            {isAddWordError && <Alert severity="error">Failed to add the word. Please try again.</Alert> }
        <div style={{display: "flex", marginLeft: "30px", marginTop: "50px", marginBottom: "30px", alignItems: 'center'}}>
        <h3>Your decks</h3>
        <AddIcon onClick={e => setIsModalClosed(false)}/>
        {
            !isModalClosed && <Portal><AddWord setIsModalClosed={setIsModalClosed} setIsAddWordSuccess={setIsAddWordSuccess} setIsAddWordError={setIsAddWordError}/></Portal>
        }
        <Button variant="contained" color='success' onClick={e => setIsModalClosed(false)} sx={{width:"110px", height: "35px",margin: '8px', textTransform: "none", marginLeft: 'auto'}}>Add Word</Button>
        </div>

        <Decks />
        </div>
        
        <div style={{marginLeft: "30px", marginTop: "50px"}} className='row2-container'>
            {idiom?
            <div>
                
                <Paper elevation={3} sx={{height: "150px", width: "18vw", marginLeft: "1rem", marginTop: "1rem", borderRadius: "10px", padding: "30px", display: "inline-block", "&:hover": {boxShadow: "0px 0px 10px 3px #ED681C", cursor: "pointer", width: "20vw", height: "170px"}, transition: "0.3s"}}>
                    <h3>Idioms</h3>
                    <ul style={{listStyle: "none", padding: "10px"}}>
                        {idiom.map((item, index) => {
                            return <li><span>{item.idiom}</span></li>
                        })}
                    </ul>
                </Paper>
                
                <Paper elevation={3} sx={{height: "150px", width: "18vw", marginLeft: "1rem", marginTop: "1rem", borderRadius: "10px", padding: "30px", display: "inline-block", marginLeft: "50px","&:hover": {boxShadow: "0px 0px 10px 3px #ED681C", cursor: "pointer", width: "20vw", height: "170px"}, transition: "0.3s"}}>
                    <h3>Nomen-Verb-Verbindungen</h3>
                    <ul style={{listStyle: "none", padding: "10px"}}>
                        {idiom.map((item, index) => {
                            return <li><span>{item.idiom}</span></li>
                        })}
                    </ul>
                </Paper>
            </div>
         :
            null
        }
        </div>
        <div className='row3-container'>
        
        <h3 style={{marginLeft: "30px", marginTop: "50px", marginBottom: "30px", gridColumn: "1"}}>Words by category</h3>
        <Link to="/card?category=Nature" style={{gridColumn: "1", marginLeft: "40px", textDecoration: 'none'}}>
        <Card elevation='5' sx={{maxWidth: "250px", marginRight: "20px", height: "100px"}} >
        <div style={{marginLeft: '10px', padding: "10px"}}>
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
        <div style={{marginLeft: '10px', padding: "10px"}}>
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
        <div style={{marginLeft: '10px', padding: "10px"}}>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <h4 style={{display: "inline"}}>Science</h4>
            <span><img src={science} style={{height:"40px", marginLeft: '5px'}} alt="wbc-img"/></span>
        </div>
            <p>Level: B2</p>
        </div>
        </Card>
        </Link>

        <Link to="/card?category=Greetings" style={{gridColumn: "4", marginLeft: "40px", textDecoration: 'none'}}>
        <Card elevation='5' sx={{maxWidth: "250px", marginRight: "20px", height: "100px", gridColumn: "2"}} >
        <div style={{marginLeft: '10px', padding: "10px"}}>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <h4 style={{display: "inline"}}>Greetings</h4>
            <img src={greetings} style={{height:"40px", marginLeft: '5px'}} alt="wbc-img"/>
        
        </div>
            <p>Level: A2</p>
        </div>
        </Card>
        </Link>

        <Link to="/card?category=Food" style={{gridColumn: "1", marginLeft: "40px", textDecoration: 'none'}}>
        <Card elevation='5' sx={{maxWidth: "250px", marginRight: "20px", height: "100px"}} >
        <div style={{marginLeft: '10px', padding: "10px"}}>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <h4 style={{display: "inline"}}>Food</h4>
            <img src={fruits} style={{height:"40px", marginLeft: '5px'}} alt="wbc-img"/>
        </div>
            <p>Level: A2</p>
        </div>
        </Card>
        </Link>

        <Link to="/card?category=Vehicles" style={{gridColumn: "2", marginLeft: "40px", textDecoration: 'none'}}>
        <Card elevation='5' sx={{maxWidth: "250px", marginRight: "20px", height: "100px"}} >
        <div style={{marginLeft: '10px', padding: "10px"}}>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <h4 style={{display: "inline"}}>Vehicles</h4>
            <img src={vehicle} style={{height:"40px", marginLeft: '5px'}} alt="wbc-img"/>
        </div>
            <p>Level: B1</p>
        </div>
        </Card>
        </Link>
        <Link to="/card?category=General" style={{gridColumn: "3", marginLeft: "40px", textDecoration: 'none'}}>
        <Card elevation='5' sx={{maxWidth: "250px", marginRight: "20px", height: "100px"}} >
        <div style={{marginLeft: '10px', padding: "10px"}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
            <h4>General</h4>
            <img src={general} style={{height:"40px", marginLeft: '5px'}} alt="wbc-img"/>
            </div>
            <p>Level: B2</p>
        </div>
        </Card>
        </Link>

        <Link to="/card?category=Tech" style={{gridColumn: "4", marginLeft: "40px", textDecoration: 'none'}}>
        <Card elevation='5' sx={{maxWidth: "250px", marginRight: "20px", height: "100px"}} >
        <div style={{marginLeft: '10px', padding: "10px"}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
            <h4>Tech</h4>
            <img src={tech} style={{height:"40px", marginLeft: '5px'}} alt="wbc-img"/>
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
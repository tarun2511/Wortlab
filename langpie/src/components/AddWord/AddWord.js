import React, {useState, useContext} from "react";
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import {modalContext} from "../../App";
import axios from 'axios';
import './AddWord.css';

export default function AddWord(){
    const [front, setFront] = useState("");
    const [back, setBack] = useState("");
    const [deck, setDeck] = useState("");
    const selectOptions = ["Nature", "Car", "Kitchen"];


    const {setIsModalClosed} = useContext(modalContext);

    const addWord = async () => {
        try {
            await axios.post('http://localhost:4200/v1/flashcards/addWord', {
                front,
                back,
                deck
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('word successfully added');
        }
        catch (err) {
            console.log(err);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addWord();
    } 

    const closeModal = () => {
        setIsModalClosed(true);

    }

    return (
        <>
        <div className="modal-overlay">
            <div className='modal-content'>
                <CancelIcon onClick={closeModal} sx={{position: "absolute", top: "5px", right: "10px"}}/>
                <div className='form-container'>
                <form method="POST" onSubmit={handleSubmit} className='form'>
                <div className='input-group'>
                {/* <label htmlFor='' */}
                <input type="text" value={front} onChange={e => setFront(e.target.value)} placeholder="word"/><br/>
                <input type="text" value={back} onChange={e => setBack(e.target.value)}  placeholder="deck name"/><br/>
                <select>
                    {selectOptions.map(el => {
                        return <option value={deck} onChange={e => setDeck(e.target.value)}>{el}</option>
                    })}
                </select>
                </div>
                <Button variant="contained" type="submit" onClick={handleSubmit} sx={{width:"20px", height: "25px",margin: '8px', textTransform: "none"}}>Add</Button>
                </form>
                </div>
            </div>
        </div>
        </>
    )
}
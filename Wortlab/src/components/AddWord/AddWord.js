import React, {useState, useContext, useEffect} from "react";
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import {modalContext} from "../../App";
import axios from 'axios';
import './AddWord.css';
import { DECKS } from "../../constants";
import Textarea from '@mui/joy/Textarea';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function AddWord({ setIsAddWordSuccess, setIsAddWordError }) {
    const [front, setFront] = useState("");
    const [back, setBack] = useState("");
    const [deck, setDeck] = useState(DECKS.GENERAL);
    const selectOptions = Object.values(DECKS);
    const timeoutRef = React.useRef(null);


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
            setIsAddWordSuccess(true);
            setTimeout(() => setIsAddWordSuccess(false), 2000);
        }
        catch (err) {
            console.log(err);
            setIsAddWordError(true);
            setTimeout(() => setIsAddWordError(false), 2000);
            throw err;
        }
    }

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const handleSubmit = async (e) => {
        try {
             e.preventDefault();
            await addWord();
            setIsModalClosed(true);
        } catch (err) {
            console.error('Error adding word:', err);
            setIsModalClosed(true);
        }
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
                <Textarea name="Solid" value={front} onChange={e => setFront(e.target.value)} sx={{width: "25vw", margin: "8px"}} placeholder="Front" variant="soft" />
                <Textarea minRows={4} value={back} onChange={e => setBack(e.target.value)}  placeholder="Back" variant="soft" sx={{width: "25vw", margin: "20px 8px 8px 8px"}}/><br/>
                {/* <select onChange={e => setDeck(e.target.value)}>
                    {selectOptions.map(el => {
                        return <option value={el} key={el}>{el}</option>
                    })}
                </select> */}
                </div>
                <Button variant="contained" type="submit" onClick={handleSubmit} sx={{width:"20px", height: "25px",margin: '8px', textTransform: "none"}}>Add</Button>
                </form>
                </div>
            </div>
        </div>
        </>
    )
}
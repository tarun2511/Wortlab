import React, {useEffect, useState} from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';


export default function Card() {
    const [words, setWords] = useState('');
    const [ searchParams ] = useSearchParams();
    const category = searchParams.get('category');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const fetchWords = async () => {
        try {
            setIsLoading(true);
            const res = await axios.get('http://localhost:4200/v1/flashcards', {
                params: {
                    category
                }
            })
            setWords(res.data);
            setIsLoading(false);
        }
        catch(err) {
            console.log(err);
            setIsLoading(false);
            setIsError(true);
        }
    }

    useEffect(() => {
        fetchWords();
        console.log(words);
    }, [])
    
    return <>
    <Navbar />
    {
        isLoading? <div className="loading-icon"><CircularProgress /></div> : null
    }
    {words ?
    <div>
        {words?.map(word => {
            return <div className="card-word-container">
                <p>{word.front}</p> -- <span>{word.back}</span>
                </div>
        })}
    </div> : null}
    </>
};
import React, {useEffect, useState} from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';

export default function Card() {
    const [words, setWords] = useState('');

    const fetchWords = async () => {
        try {
            const res = await axios.get('http://localhost:4200/v1/flashcards')
            setWords(res.data);
        }
        catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchWords();
        console.log(words);
    }, [])
    
    return <>
    <Navbar />
    {words ?
    <p>
        {words?.map(word => {
            return <p>{word.front}</p>
        })}
    </p> : null}
    </>
};
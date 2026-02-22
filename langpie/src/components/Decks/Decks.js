import React, {useState} from "react";
import {Link} from "react-router-dom";

export default function Decks(){

    const [decks, setDecks] = useState([["MyList", 25, 0], ["Important", 45, 12], ["Books", 10, 0], ["Newspaper", 8, 2]]);
    return(
        <>
        <div className="deck-container">
            <table className='table-content'>
                <thead>
                <tr>
                    <th>Deck</th>
                    <th style={{paddingLeft: "100px", color: '#008000'}}>New</th>
                    <th style={{paddingLeft: "30px", color: '#fa0004ff'}}>Due</th>
                </tr>
                </thead>
                <tbody>
                {
                    decks.map(el => {
                        return <tr><td><Link style={{textDecoration:"none", color: "black"}} to="/card" target="_blank">{el[0]}</Link></td>
                        <td style={{paddingLeft: "100px"}}>{el[1]}</td>
                        <td style={{paddingLeft: "30px"}}>{el[2]}</td></tr>

                    })
                }
                </tbody>
            </table>
        </div>
        </>
    )
}
import React from "react";
import { useState, useEffect } from "react";

export const Text = ()=>{

    const [text, setText] = useState('');

    useEffect(()=>{
        console.log('COMPONENT MOUNTED');
        return ()=>{
            console.log('COMPONENT unMOUNTED');
        }
    }, []);

    return(
        <div>
            <div className='exe6-box'>

            <input type="text" onChange={(event)=>{
                setText(event.target.value);
            }} />
            
            <h3>{text}</h3>
            
            </div>
        </div>
    );
}
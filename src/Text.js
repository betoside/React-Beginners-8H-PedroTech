import React from "react";
import { useState } from "react";

export const Text = ()=>{

    const [text, setText] = useState('');

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
import React, { ChangeEvent, useState } from "react";

interface Props{
    text: string;
}

const TextComponent: React.FC<Props> = ({text}) =>{
    const [title, setTitle] = useState(text);
    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
      }
    return(
        <div>
           <h1>{text}</h1> 
            <input type="text" value={title} onChange={handleTitleChange}/>
        </div>
    )
}
export default TextComponent;
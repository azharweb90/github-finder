import {  useState } from "react";

export default function Search({searchUsers, clearUsers}){

    const [text, setText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const formSubmitHandler = (e) => {
        e.preventDefault();
        if(text === ''){
           setErrorMessage('Search field should not be empty!');
        }
        searchUsers(text);
        setText('');
        
    }

    const textChangeHandler = (e) => {
        setText(e.target.value);
        setErrorMessage('');
    }


    return(
        <div>
            <form onSubmit={formSubmitHandler} className="form">
                <input 
                    type="text"  
                    name="text" id="search" 
                    placeholder="Search users..." 
                    value={text}
                    onChange={textChangeHandler}  />  
                 <p style={{color: 'red'}}>{errorMessage}</p>
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
            </form>
            <button onClick={clearUsers} className="btn btn-light btn-block">Clear</button>
        </div>
    )
}
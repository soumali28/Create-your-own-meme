import React, { useEffect } from "react";
import styled from "styled-components"

const Form = styled.div`
    margin: 3rem 10rem;
    .form{
        display: grid;
        grid-template-columns: 25rem 25rem;
        gap: 18rem;
    }

    input{
        width: 350px;
        height: 50px;
        border-radius: 10px;
        border: 2px solid #F10086;
        font-size: 1.2rem;
        color: #C65D7B;
    }
    input:focus{
       outline: none;
    }
    input::placeholder{
        color: #C65D7B;
    }

    button{
        width: 100%;
        height: 40px;
        margin: 30px 0;
        background-image: linear-gradient(to right,  #FF6B6B,#F10086 , #F190B7);
        border: none;
        border-radius: 10px;
        cursor: pointer;
        color: #fff;
        font-size: 1.2rem;
        font-weight: 600;
    }

    button:hover{
       box-shadow:  -2px 2px 5px #444;
    }
`

function MemeGenerator(){

    
    function handleClick(){
        console.log("clicked");
    }

    return(
        <Form>
            <form className="form">
                <input placeholder="Text at top"></input>
                <input placeholder="Text at bottom"></input>
               
            </form>
            <button onClick={handleClick}>Get a new image 🙌</button>
        </Form>
    );
}

export default MemeGenerator;
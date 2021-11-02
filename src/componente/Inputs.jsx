import React from "react";
import './Inputs.css';

export default _ => {
    return (
        <form action="#" id="flexColumn">
        
            <input type="text" placeholder="Usuario" /> 
        
            <input type="password" placeholder="Senha"/> 
        
            <button>Login</button>
        
            <h4>Esqueceu a senha?</h4>
        
        </form>
    );
};
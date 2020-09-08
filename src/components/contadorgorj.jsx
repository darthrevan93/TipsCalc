import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '../App.css'


function Contador() {
    const [ conta, setConta ] = useState('');
        const HandleContaInput = (e) => {
            setConta(e.target.value)
        }           

     
    const [ gorjeta, setGorjeta ] = useState('');
        const HandleGorjetaInput = (e) => {
            setGorjeta(e.target.value)
}

    return (
        <>
            <div className='caixa1'>
                <p>Indique o valor da conta:</p>
            <input type='number' onChange={HandleContaInput} />    
                <p>Indique a % da Gorjeta:</p>
            <input type='number' onChange={HandleGorjetaInput} /><br/><br/>

            <h2>Resultado do cálculo:</h2>
            <p>O total da conta foi: {conta} R$</p>
            <p>(+) Gorjeta: {gorjeta} %</p>
            <h2>Total: <span>{parseFloat(conta) + (parseFloat(gorjeta) / 100) * parseFloat(conta) || 0} R$</span></h2>
            </div>
    

        </>
    )
}    






export default Contador;
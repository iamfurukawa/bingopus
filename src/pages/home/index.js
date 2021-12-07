import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './home.module.scss'

const HomePage = () => {
    const [cpfData, setCpf] = useState("")
    const navigate = useNavigate()
    
    const handleCpfChange = (event) => {
        // Get only the numbers from the data input
        let data = event.target.value.replace(/\D/g, "")
        // Checking data length to define if it is cpf or cnpj

        // It's cpf
        let cpf = ""
        let parts = Math.ceil(data.length / 3)
        for (let i = 0; i < parts; i++) {
            if (i === 3) {
                cpf += `-${data.substr(i * 3)}`
                break;
            }
            cpf += `${i !== 0 ? "." : ""}${data.substr(i * 3, 3)}`
        }
        // Pass formatting for the data
        data = cpf

        // Update state
        setCpf(data)
    }

    const play = () => {
        navigate('/bingo')
    }

    return (
        <>
            <label for="fname">Seu email/CPF:</label>
            <input type="text" id="fname" name="fname" value={cpfData} onChange={handleCpfChange} maxLength={14}/>
            <button onClick={play}>Jogar</button>
        </>
    )
}

export default HomePage
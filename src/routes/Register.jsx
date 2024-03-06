import { Button, TextField } from '@mui/material'
import authLogo from '../img/icons/auth.png'
import { useState } from 'react'
import successLogo from '../img/icons/success.png'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const [success, setSuccess] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()
        const userEmail = e.target[0].value;
        const userRealName = e.target[1].value;
        const userIdentity = e.target[2].value;
        const userPassword = e.target[3].value;
        setSuccess(true)
    }

    return(
        <div className='Register'>

            { success ? (
                <>
                    <img className='successLogo' src={successLogo}/>
                    <h1>Registro Exitoso</h1>
                    <h4 onClick={ () => navigate('/home') }>Presione aqui para volver al inicio</h4>
                </>
            ):(
                <>
                    <img className='authLogo' src={authLogo}/>
                    <h1>Registro</h1>
                    <form onSubmit={handleSubmit}>
                        <TextField variant='outlined' label='Correo Electronico' type='email'/>
                        <TextField variant='outlined' label='Nombre' type='email'/>
                        <TextField variant='outlined' label='Identificacion' type='number'/>
                        <TextField variant='outlined' label='Contraseña' type='password'/>
                        <Button type='submit' variant='contained'>Registrarse</Button>
                    </form>
                    <p onClick={ () => navigate('/login') }>Iniciar sesion</p>
                    <p onClick={ () => navigate('/home') }>Inicio</p>
                </>
            ) }

            
        </div>
    )
}

export default Register
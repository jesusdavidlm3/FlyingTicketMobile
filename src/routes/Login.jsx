import authLogo from '../img/icons/auth.png'
import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { hash } from '../functions/encrypt'

const Login = () => {

    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()
        const userEmail = e.target[0].value;
        const userPassword = await hash(e.target[1].value);
        console.log(userPassword)
        navigate('/checking')
    }

    return(
        <div className="Login">
            <img className='authLogo' src={authLogo}/>
            <h1>Iniciar Sesion</h1>
            <form onSubmit={handleSubmit}>
                <TextField variant='outlined'type='email' label='Correo'/>
                <TextField variant='outlined' type='password' label='Contraseña'/>
                <Button type='submit' variant='contained'>Iniciar sesion</Button>
            </form>
            <p onClick={ () => navigate('/register') }>Registrarse</p>
            <p onClick={ () => navigate('/home') }>Inicio</p>
        </div>
    )
}

export default Login
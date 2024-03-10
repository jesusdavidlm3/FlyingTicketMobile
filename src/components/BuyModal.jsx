import { Button } from "@mui/material"
import { useState } from "react"
import successLogo from '../img/icons/success.png'

export const BuyModal = ({close, infoVuelo}) => {

    const [bought, setBought] = useState(false)
    
    async function handleBuy(){
        setBought(true)
    }

    return(
        <div className="BuyModalContainer">
            <div className='BuyModal'>
                { bought ? (
                    <>
                        <h3>Compra realizada con exito</h3>
                        <img src={successLogo}/>
                        <Button onClick={close} variant="contained" >Cerrar</Button>
                    </>
                ):(
                    <>
                        <h1>Confirmacion</h1>
                        <h4>Estas seguro de que deseas comprar un ticket para este Vuelo?</h4>
                        <p>Destino: {infoVuelo.data.destino}</p>
                        <p>Origen: {infoVuelo.data.origen}</p>
                        <p>Aerolinea: {infoVuelo.data.aerolinea}</p>
                        <p>Fecha: {infoVuelo.data.fecha}</p>
                        <p>Duracion: {infoVuelo.data.duracion}</p>
                        <p>Precio: {infoVuelo.data.precio}</p>
                        <p>ID: {infoVuelo.id}</p>
                        <div className="Buttons">
                            <Button onClick={close} variant='contained' color="error">Cancelar</Button>
                            <Button onClick={ () => handleBuy() } variant='contained' color="success">Confirmar</Button>
                        </div>
                    </>
                ) }
            </div>
        </div>
    )
}
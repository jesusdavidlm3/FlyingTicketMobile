import { Button } from "@mui/material"
import Atropos from "atropos/react"
import { useContext } from "react"
import { context } from "../context/context"


export const Ticket = ({close, infoVuelo}) => {

    const { userInfo } = useContext(context)

    return(
        <div className="ticketContainer">
            <Atropos>
                <div className='ticket'>
                    <p>Nombre: {userInfo.name}</p>
                    <p>Identificacion: {userInfo.userId}</p>
                    <p>Vuelo: </p>
                    <p>Destino: {infoVuelo.destino}</p>
                    <p>Origen: {infoVuelo.origen}</p>
                    <p>Hora de salida:</p>
                    <p>Duracion: {infoVuelo.duracion}</p>

                    <Button onClick={close} variant="contained" color="error">Cerrar</Button>
                </div>
            </Atropos>
        </div>
        
    )
}
import { Button } from "@mui/material"
import Atropos from "atropos/react"

export const Ticket = ({close}) => {
    return(
        <div className="ticketContainer">
            <Atropos>
                <div className='ticket'>
                    <p>Nombre: </p>
                    <p>Identificacion</p>
                    <p>Vuelo: </p>
                    <p>Destino: </p>
                    <p>Origen: </p>
                    <p>Hora de salida:</p>
                    <p>Duracion: </p>

                    <Button onClick={close} variant="contained" color="error">Cerrar</Button>
                </div>
            </Atropos>
        </div>
        
    )
}
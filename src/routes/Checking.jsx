import { Button } from '@mui/material'
import { Ticket } from '../components/Ticket'
import { useState } from 'react'

const Checking = () => {

    const [openTicket, setOpenTicket] = useState(false)

    const openCloseTicket = () => {
        setOpenTicket(!openTicket)
    }

    return(
        <div className="Checking">
            <h1>bienvenido: </h1>
            <Button variant='contained' onClick={ openCloseTicket }>Abrir Ticket</Button>
        
            { openTicket && <Ticket close={openCloseTicket}/> }

        </div>
    )
}

export default Checking
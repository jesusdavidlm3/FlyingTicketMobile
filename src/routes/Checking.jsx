import { Button } from '@mui/material'
import { Ticket } from '../components/Ticket'
import { useState } from 'react'
import { useContext } from 'react'
import { context } from '../context/context'
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'
import { useEffect } from 'react'

const Checking = () => {

    const { userInfo } = useContext(context)
    const [openTicket, setOpenTicket] = useState(false)
    const [showTickets, setShowTickets] = useState([])
    let tickets = []

    useEffect( () => {
        console.log(userInfo.userId)
        async () => {
            const q = query(collection(db, "tickets"), where("comprador", "==", userInfo.userId));

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            tickets = [...tickets, doc.data()]
            
        });
        }
        setShowTickets(tickets)
    }, [] )

    async function openCloseTicket(){
        setOpenTicket(!openTicket)
    }

    return(
        <div className="Checking">
            <h1>bienvenido: {userInfo.name}</h1>

            {showTickets.map( (ticket) => {
                <h1>{ticket.comprador}</h1>
            } )}
            { openTicket && <Ticket close={openCloseTicket}/> }

        </div>
    )
}

export default Checking
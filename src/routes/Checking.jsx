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
    const [showBuy, setShowBuy] = useState(false)
    const [showCheck, setShowCheck] = useState(false)
    const [showTickets, setShowTickets] = useState([])
    let tickets = []


    async function wannaCheck(){
        setShowBuy(false)
        setShowCheck(true)

        const q = query(collection(db, "tickets"), where("comprador", "==", userInfo.userId));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(async (doc1) => {
            const docRef = doc(db, "vuelos", doc1.data().vuelo);
            const doc = await getDocFromCache(docRef);
            tickets = [...tickets, doc.data()]
        });
        setShowTickets(tickets)
    }

    async function wannaBuy(){
        setShowBuy(true)
        setShowCheck(false)

        const querySnapshot = await getDocs(collection(db, 'vuelos'));
        querySnapshot.forEach((doc) => {
        tickets = [...tickets, doc.data()]
        console.log(doc.data())
        });
        setShowTickets(tickets);
    }
        

    async function openCloseTicket(){
        setOpenTicket(!openTicket)
    }

    return(
        <div className="Checking">
            <h1>Bienvenido: {userInfo.name}</h1>
            <div className='buttons'>
                <Button variant='contained' onClick={wannaCheck} >ver tickets</Button>
                <Button variant='contained' onClick={wannaBuy}>comprar</Button>
            </div>

            { showBuy && <div className='listContainer'>
                { showTickets.map( (ticket) => (
                    <div className='OneTicket'>
                        <div className='info'>
                            <p>Destino: {ticket.destino}</p>
                            <p>Hora:</p>
                            <p>Duracion: {ticket.duracion}</p>
                        </div>

                        <Button variant='contained'>comprar</Button>
                        {/* <h4>{ticket.hora.toLocaleDateString()}</h4> */}
                    </div>
                ) ) }
            </div> }

            { showCheck && <div className='list Container'>
                { showTickets.map( (ticket) => (
                    <div className='OneTicket'>
                        <div className='info'>
                            <p>Destino: {ticket.destino}</p>
                            <p>Hora:</p>
                            <p>Duracion: {ticket.duracion}</p>
                        </div>

                        <Button variant='contained'>Visualizar</Button>
                    </div>
                ) ) }
            </div> }

            { openTicket && <Ticket close={openCloseTicket}/> }

        </div>
    )
}

export default Checking
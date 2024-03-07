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
        querySnapshot.forEach((doc) => {
        tickets = [...tickets, doc.data()]
        });
    }

    async function wannaBuy(){
        setShowBuy(true)
        setShowCheck(false)

        const q = query(collection(db, "tickets"), where("comprador", "==", userInfo.userId));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        tickets = [...tickets, doc.data()]
        });
    }
        

    async function openCloseTicket(){
        setOpenTicket(!openTicket)
    }

    return(
        <div className="Checking">
            <h1>bienvenido: {userInfo.name}</h1>
            <div className='buttons'>
                <Button variant='contained' onClick={wannaCheck} >ver tickets</Button>
                <Button variant='contained' onClick={wannaBuy}>comprar</Button>
            </div>

            { showBuy && <></> }

            { showCheck && <></> }

            { openTicket && <Ticket close={openCloseTicket}/> }

        </div>
    )
}

export default Checking
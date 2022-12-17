import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Events () {

    const [events, setEvents] = useState([])

    const getData = async () => {
        await axios.get('http://localhost:3001/api/events')
        .then(res => {
            if (res) {
                setEvents(res.data)
                console.log(res.data)
            }
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="events">
            {events.map((value) => {
                return (
                    <div key={value.id}>
                        <h3>Event Name: {value.eventName}</h3>
                        <h3>Event Type: {value.eventType}</h3>
                        <p>Description: {value.eventDescription}</p>
                        <p>Date of Event: {value.eventDate}</p>
                        <br />
                    </div> 
                )
            })}

        </div>
    )
}
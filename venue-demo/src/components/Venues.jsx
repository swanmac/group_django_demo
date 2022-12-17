import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Venues () {

    const [venues, setVenues] = useState([])

    const getData = async () => {
        await axios.get('http://localhost:3001/api/venues')
        .then(res => {
            if (res) {
                setVenues(res.data)
                console.log(res.data)
            }
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="venues">
            {venues.map((value) => {
                return (
                    <div key={value.id}>
                        <h3>Venue Name: {value.venueName}</h3>
                        <h4>Event Name: {value.eventName}</h4>
                        <p>Address: {value.venueAddress}</p>
                        <p>Parking: {value.venueParking}</p>
                        <p>Capacity: {value.venueCapacity}</p>
                        <br />
                    </div> 
                )
            })}

        </div>
    )
}
import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <div className="nav">
            <Link className="nav-home"to ="/">Home</Link>
            <br />
            <Link className="nav-venues"to="/venues">Venues</Link>
            <Link className="nav-events"to="/events">Events</Link>
        </div>
    )
}
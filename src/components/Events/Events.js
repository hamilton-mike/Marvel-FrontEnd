import React from 'react'
import { DivEvents, H2, Unknown } from './EventsStyle'

const Events = ({ events, num }) => {
    console.log(num);
    return (
        <>
            <H2>Events</H2>
            <DivEvents num={num}>
                {events.length <= 0 ? <Unknown>No Record of Events</Unknown> :
                <>
                    {events.map(event => (
                        <div key={event.resourceURI.slice(-3)}>
                            <p>{event.name}</p>
                        </div>
                    ))}
                </>}
            </DivEvents>
        </>
    )
}

export default Events

import React from 'react'
import '../../index.css'
import { DivEvents, H2 } from './EventsStyle'

const Events = ({ events }) => {
    const css = events.length > 10 ? 'grid' : 'reg'

    return (
        <>
            <H2>Events</H2>
            <DivEvents className={css}>
                {events.length <= 0 ? <p>No Record of Events</p> :
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

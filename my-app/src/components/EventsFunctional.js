import React from 'react'

function EventsFunctional() {
    function clickHandler() {
        console.log('clicked event functional')
    }
    return (
    <div>
        <button onClick={clickHandler}>Click me - functional component</button>
    </div>
  )
}

export default EventsFunctional
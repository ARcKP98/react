import React from 'react'

function UserData(props) {
  return (
    <div>
        <h1>{props.is_loaded ? 'Data loaded' : 'Loading...'}</h1>
    </div>
  )
}

export default UserData
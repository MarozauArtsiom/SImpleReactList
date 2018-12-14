import React from 'react'

export default ({ name, quot, onDelete }) => (
    <>
        <div>name: {name}</div>
        <div>Quot: {quot}</div>
        <button onClick={() => onDelete(name)}>Delete</button>
    </>
)
import React from 'react'

const RandChoice = ({ items }) => {
    const idx = Math.floor(Math.random() * items.length);
    const choice = items[idx]

    items.splice(idx, 1);


    return (
        <div>
            <h4>I'd like one {choice} please</h4>
            <h4>Here you go: {choice}</h4>
            <h4>Delicious, may I have another?</h4>
            <h4>Sorry we're all out, we have {items.length} left</h4>
        </div>
    )
}

export default RandChoice
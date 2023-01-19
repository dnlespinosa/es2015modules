import React from 'react'
import Foods from './foods'
import RandChoice from './helpers';

function App() {
    return (
        <div>
            <h4>{Foods}</h4>
            <RandChoice items={Foods} />
            
        </div>
    )
}

export default App;
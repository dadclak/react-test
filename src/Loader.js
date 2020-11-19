import React from 'react'

export default function Loader() {
    return (
        <div className="lds-grid"
            style={{ 
                display: 'flex',
                justifyContent: 'center',
                margin: '.5rem'
            }}
        >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
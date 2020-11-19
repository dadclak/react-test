import React from 'react'

export default function Loader() {
    return (
        <div className="lds-grid"
            style={{ 
                display: 'flex',
                marginLeft: 'auto',
                marginRight: 'auto'
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
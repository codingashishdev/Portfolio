import React from 'react'

function Image({imageUrl, className}) {
    return (
        <>
            <img 
                src={imageUrl}
                className={`w-[150px] h-[150px] ${className}`}    
            />
        </>
    )
}

export default Image

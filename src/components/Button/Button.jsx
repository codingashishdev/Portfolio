import React from 'react'

function Button({
    text,
    varient,
    className
}) {
    return (
        <>
            {varient == 'black' ? (
                <button className={`w-[118px] h-[40px] rounded-[10px] bg-black text-white cursor-pointer ml-1 mb-1.5 mr-1 ${className}`}>{text}</button>
            ) : (
                <button className={`w-auto h-auto p-2 rounded-[15px] bg-gray-100 text-black cursor-pointer ${className}`}>{text}</button>
            )}
        </>
    )
}

export default Button

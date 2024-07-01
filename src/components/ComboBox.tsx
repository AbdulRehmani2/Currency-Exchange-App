import { useState } from 'react'
import {FaCaretDown} from 'react-icons/fa'

interface combobox {
    items: string[]
}

function ComboBox({ items=["Afghanistan", "Pakistan", "United States of America"] }: combobox) {
  
    const [show, setShow] = useState(false)
    const [current, setCurrent] = useState("--Select--")

    function handleClick(e: any)
    {
        if(e.target != document.querySelector('.combo-container>ul'))
        {
            setShow(() => {setCurrent(e.target.innerText); return false})
        }
    }

    return (
    <div className='combo-container' onMouseEnter={() => {setShow(true)}} onMouseLeave={() => {setShow(false)}}>
        <span>{current}</span>
        <FaCaretDown></FaCaretDown>
        <ul className={`combo-items ${show == true ? "show" : ""}`} onClick={handleClick}>
            {items.map((element: string) => {
                return <li>{element}</li>
            })}
        </ul>
    </div>
  )
}

export default ComboBox
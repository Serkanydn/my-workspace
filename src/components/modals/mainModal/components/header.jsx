import React from 'react'
import {AiOutlineClose} from "react-icons/ai"
import { destroyModal } from '../../../../utils/modalHelper'
function Header({title}) {
  return (
    <header className='main-modal-container__header' >
        <h6>{title}</h6>
        <AiOutlineClose onClick={destroyModal} className='icon'/>
    </header>
  )
}

export default Header
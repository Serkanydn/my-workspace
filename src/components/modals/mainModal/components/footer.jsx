import React from 'react'
import { destroyModal } from '../../../../utils/modalHelper'

function Footer({actionButtons=[]}) {
  return (
    <div className='main-modal-container__footer'>
        <button onClick={destroyModal} className='btn btn-default'>Close</button>
        {actionButtons.map((actionButton)=>actionButton)}
    </div>
  )
}

export default Footer
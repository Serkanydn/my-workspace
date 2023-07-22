import React, { useState } from 'react'
import "./style.css"
import { createModal, destroyAllModals, destroyModal, useModals } from "../../utils/modalHelper"
import { motion, AnimatePresence } from 'framer-motion'
import { AiOutlinePlus } from "react-icons/ai"
import { RxDotsHorizontal } from "react-icons/rx"
import { BsCheck2 } from "react-icons/bs"
import { v4 as uuidv4 } from 'uuid';
import { useRef } from 'react'


function GroceriesList() {

  const [items, setItems] = useState([{ id: uuidv4(), name: "Eggs", isComplate: true }, { id: uuidv4(), name: "Tomatoes", isComplate: false }])

  const [addItem, setAddItem] = useState(false)

  const inputRef = useRef(null)


  const handleToogleClick = (item) => {
    item.isComplate = !item.isComplate
    const itemIndex = items.findIndex(i => i.id === item.id)

    items.splice(itemIndex, 1, item)
    setItems([...items])
  }

  const handleAddItem = () => {
    setItems([...items, { id: uuidv4(), name: inputRef.current.value, isComplate: false }])
    inputRef.current.value = ""
  }

  return (
    <div className='grocier-list'>

      <div className="container">
        <header>
          <div className="title">Groceries</div>
          <RxDotsHorizontal size="2rem" />
        </header>
        <p>Shared with 1 person</p>
        <AnimatePresence>
          {
            items.filter(i => !i.isComplate).length > 0 && (
              <div className="incomplate-items">
                {items.filter(i => !i.isComplate).map((item) => {
                  return (
                    <motion.div
                      initial={{ left: "-100px", opacity: 0 }}
                      animate={{ left: 0, opacity: 1 }}
                      exit={{ left: "-100px", opacity: 0 }}


                      key={item.id} className="item">
                      <input onChange={() => handleToogleClick(item)} type='checkbox' />
                      <span>{item.name}</span>
                    </motion.div>
                  )
                })}
              </div>
            )
          }
        </AnimatePresence>


        <div className="complated-items">
          <div className="complated-items-title">COMPLATED ({items.filter(i => i.isComplate).length})</div>
          <AnimatePresence>
            {items.filter(i => i.isComplate).map((item) => {
              return (<motion.div
                initial={{ left: "-100px", opacity: 0 }}
                animate={{ left: 0, opacity: 1 }}
                exit={{ left: "-100px", opacity: 0 }}

                key={item.id} className="item">
                <input type='checkbox' onChange={() => handleToogleClick(item)} checked={item.isComplate} />
                <span>{item.name}</span>
              </motion.div>)
            })}
          </AnimatePresence>
        </div>


        <div className='add-item-container'>
          <AnimatePresence>

            {addItem && <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='groceries-form'>
              <input ref={inputRef} type='text' placeholder='Groceries name' className='form-input w-full' />
              <button className='btn btn-primary' onClick={handleAddItem}>Ekle</button>
            </motion.div>}
          </AnimatePresence>

          <button onClick={() => setAddItem(!addItem)} className='add-item-button'>

            {!addItem && <AiOutlinePlus />}
            {addItem && <BsCheck2 />}

          </button>
        </div>

      </div>

    </div >
  )
}

export default GroceriesList
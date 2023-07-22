import React, { useState } from 'react'
import "./style.css"
import { motion, AnimatePresence } from 'framer-motion'
import { AiOutlinePlus } from "react-icons/ai"
import { RxDotsHorizontal } from "react-icons/rx"
import { BsCheck2 } from "react-icons/bs"
import { v4 as uuidv4 } from 'uuid';
import { useRef } from 'react'
import { toast } from 'react-toastify';



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
    const { value, classList } = inputRef.current
    if (!value) {
      classList.add("input-error")
      return
    }

    const isExist = items.some((item) => item.name === value)
    if (isExist) {
      toast.error("Grocerie already exist", {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      })
      return
    }

    setItems([...items, { id: uuidv4(), name: value, isComplate: false }])
    inputRef.current.value = ""
    inputRef.current.classList.remove("input-error")
  }

  return (
    <div className='grocier-list'>

      <div className="container">
        <header>
          <div className="title">Groceries</div>
          <RxDotsHorizontal size="2rem" />
        </header>
        <p>Shared with 1 person</p>


        <div className='content'>


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
        </div>

        <div className='add-item-container'>
          <AnimatePresence>

            {addItem && <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='groceries-form'>
              <input ref={inputRef} type='text' onChange={(event) => {
                if ([...event.target.classList].includes("input-error"))
                  event.target.classList.remove("input-error")


              }} placeholder='Groceries name' className='form-input  w-full' />
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
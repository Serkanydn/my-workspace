import React from 'react'
import modalDatas from "./modals"
import { useModals } from "../../../utils/modalHelper"
import "./style.css"
import { motion, AnimatePresence } from 'framer-motion'

function MainModal() {
    const modals = useModals()
    return (

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                // duration: .3
            }}
            className='main-modal'
        >
            <AnimatePresence>
                {modals.map((modal, index) => {

                    const openedModal = modalDatas.find(m => m.name === modal.name)
                    return (
                        <motion.div
                            key={index * 100000}
                            initial={{ top: 0, opacity: 0 }}
                            animate={{ top: "50%",y:"-50%", opacity: 1 }}
                            transition={{
                                duration: .3
                            }}
                            exit={{ top: 0, opacity: 0 }}
                            className='main-modal-container'
                        >
                            <openedModal.element />
                        </motion.div>
                    )
                })}
            </AnimatePresence>
        </motion.div>
    )
}

export default MainModal
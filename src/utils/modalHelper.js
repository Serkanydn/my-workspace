import {store} from "../store"
import {append,destroy,destroyAll} from "../store/slices/modal"
import {  useSelector } from "react-redux/es/hooks/useSelector"


const useModals=()=>useSelector(state=>state.modal.modals)
const createModal=(name,data=false)=>store.dispatch(append({name,data}))
const destroyModal=()=>store.dispatch(destroy())
const destroyAllModals=()=>store.dispatch(destroyAll())


export {createModal,useModals,destroyModal,destroyAllModals}
import { Outlet } from "react-router-dom";
import styles from "./style.module.css";
import Sidebar from "../../components/sidebar";
import Topbar from "../../components/topbar";
import {  useModals } from "../../utils/modalHelper"
import MainModal from "../../components/modals/mainModal";
import { motion, AnimatePresence } from 'framer-motion'


function MainLayout() {

  const modals = useModals()

  return (
    <>
  
      <AnimatePresence> {modals.length > 0 &&
        <motion.div
        style={{position:"relative",zIndex:"999999999999999"}}
          exit={{ opacity: 0 }}
        >
          <MainModal />
        </motion.div>
      }
      </AnimatePresence>

      <div className={styles.container}>
        <Sidebar />

        <div className={styles.main}>
          <Topbar />
          <div className={styles.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainLayout;

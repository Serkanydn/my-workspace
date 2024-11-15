import { Outlet } from "react-router-dom";
import styles from "./style.module.css";
import Sidebar from "../sidebar";
import Topbar from "../topbar";
import { useModals } from "../../utils/modalHelper";
import MainModal from "../../components/modals/mainModal";
import { motion, AnimatePresence } from "framer-motion";
import { Suspense } from "react";

function MainLayout() {
  const modals = useModals();
  return (
    <>
      <AnimatePresence>
        {modals.length > 0 && (
          <motion.div
            style={{ position: "relative", zIndex: "999999999999999" }}
            exit={{ opacity: 0 }}
          >
            <MainModal />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={styles.container}>
        <Sidebar />

        <div className={styles.main}>
          <Topbar />
          <div className={styles.content}>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainLayout;

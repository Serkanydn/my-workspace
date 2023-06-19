import { Outlet } from "react-router-dom";
import styles from "./style.module.css";
import Sidebar from "../../components/sidebar";
import Topbar from "../../components/topbar";
function MainLayout() {
  return (
    <div className={styles.container}>
      <Sidebar />

      <div className={styles.main}>
        <Topbar />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;

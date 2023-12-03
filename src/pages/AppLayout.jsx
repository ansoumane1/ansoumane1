import Sidebar from "../components/sidebar";
import styles from "./AppLayout.module.css";
import Map from "../components/map";
import User from "../components/User";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;

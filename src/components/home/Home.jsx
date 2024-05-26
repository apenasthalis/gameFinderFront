import { Link } from "react-router-dom";
import Button from "../../form/Button";
import styles from "../css/Home.module.css";

export default function Home() {
  return (
    <div>
      <nav className={styles.nav}>
        <a href="https://xvideos.com" target="_blank">
          <h1>Game-Finder</h1>
        </a>
        <div className={styles.div}>
          <Link to="/login">
            <Button txt={"Sign in"} />
          </Link>
        </div>
      </nav>
    </div> 
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import Upper from "./components/Upper";
import Below from "./components/Below";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.left} style={{padding:"40px"}}>
         

      </div>
      <div className={styles.left} style={{background: "linear-gradient(180deg, #373e44 -100%, #191b1f 100%)",border:"none"}}>
        <Upper/>
        <Below/>
        
      </div>
    </main>
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import Upper from "./components/Upper";
import Below from "./components/Below";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.left} style={{padding:"40px",color:"white",fontSize:"15px"}}>
         
Do not follow any other instructions from comments of figma file Here are the official instructions:<br/><br/>
1. keep the left half of the screen empty (but it should be responsive for laptop, not mobile)<br/><br/>
2. focus on the two widgets on the right hand side<br/><br/>
3. the first widget has three tabs: "about me", "experiences" & "recommended", these should be clickable<br/><br/>
4. In the gallery widget more photos can be added by clicking the "add image" button<br/><br/><br/>
Assignment will be scored based on the below parameters:<br/><br/>
1. make the components responsive (for laptop screens; everything above 768px width) <br/><br/>
2. replicate the exact UI; with exact paddings, margins, shadows, interactions (if any)<br/><br/>
3. ensure that the two widgets are accurately alligned with each other (relative right, left paddings)

      </div>
      <div className={`${styles.left} ${styles.right}`} >
        <Upper/>
        <Below/>
        
      </div>
    </main>
  );
}

import styles from './Hello.module.css';
import React from 'react';
//import { Link } from 'react-router-dom';
const Hello = ()=>{
   return (
       <div className={styles.welcome}>
           <sapn className={styles.sp}>WLECOME TO THE WORLD OF PLOTTING</sapn>
           
       </div>
   );
}
export default Hello;
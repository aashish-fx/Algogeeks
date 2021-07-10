import React from 'react';
import styles from './Text.module.css';

const Text=()=>{
  return (
    
      <div className={styles.main}>
          <h2 className={styles.text}>
            MAKE THE ALGOS LESS
          </h2>
          <div className = {styles.boring}>
          <h1 className={styles.text1}>
            <span>B</span>
            <span>O</span>
            <span>R</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
          </h1> 
          </div>
          
      </div>

  );

};
export default Text;
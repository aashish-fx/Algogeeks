import React from 'react';
import styles from './Slidingpart.module.css';
import Videoplayer from 'react-video-js-player';
import screencapture from './Video/screencapture.mp4';
import screencapture1 from './Video/screencapture1.mp4';
import {Link} from 'react-router-dom';
const Slidingpart=()=>{
    const videosrc = screencapture;
    const videosrc1 = screencapture1;
   return (
        <div className={styles.subpart}>
        <div><h2 className={styles.heading}>Some of our Tools:</h2></div>
            <br></br>
            <br></br>
            <br></br>
        <div className={styles.next1}><h2 className={styles.s1}>Visualize MATH Graph </h2>
        <div className={styles.video}>
               <Videoplayer src={videosrc1} width="900px"   autoplay muted controls/>
                
    
           </div>
           <div className={styles.para}><p>AlgoGeeks helps you to plot graphical data and Visualize complex maths graphs. </p>
           <button><Link to='/graphs' className={styles.link}>Visualize Math Graph</Link></button>
           </div>
           
        </div>
            <br></br>
            <br></br>
            <br></br>
        
        <div className={styles.next1}><h2 className={styles.s1}>Sorting Algos</h2>
        <div className={styles.video}>
               <Videoplayer src={videosrc} width="900px"   autoplay muted controls/>
                
    
           </div>
           <div className={styles.para}><p>Algogeeks help You by showing you your favrouite sorting algorithms in much more interesting way.</p>
           <button><Link to='/algorithms' className={styles.link}>Sorting Algos</Link></button>
           </div>
           
        </div>
            <br></br>
            <br></br>
            <br></br>
        <div className={styles.bottom}>
        <h2 className={styles.footer}>Scroll Up and Select a tool!</h2>
        
        </div>
        </div>
    
   
   );
};
export default Slidingpart;
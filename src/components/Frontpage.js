import React from 'react';
import styles from './Frontpage.module.css';
import Dancinggraph from './Dancinggraph';
import Text from './Text';
import Slidingpart from './Slidingpart';
import Navbar from './Navbar';
//import Landing from '../Intro/Landing';
const Frontpage = (props)=>{
   /*const [isVisible,setIsLoggedIn]=useState(true);
   useEffect(()=>{
      localStorage.removeItem('isLoggedIn');
      
    },[]);
    
   setTimeout(()=>{
            
      localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(false);


 },2000)
   */
   
   return (
      
      <div>   
          <Navbar/>
       <div className={styles.first}>
         <div className={styles.container}>
            <Text />
            <Dancinggraph />
         </div>
       </div>
       <div className={styles.next}>
       <Slidingpart ></Slidingpart>
       </div>
       </div>
     
   );
};

export default Frontpage;
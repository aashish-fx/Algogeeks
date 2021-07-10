import React from 'react'
import  './Aboutus.css';
//import Navbar from '../Navbar';
import {Link} from 'react-router-dom'; 
//import { styleSheets } from 'min-document';
const Aboutus = ()=>{
   return (<div>
       <nav className='upper'>
          <span>CONTRIBUTERS</span>
          <span><Link to='./' className='link_access'>Home</Link></span>
       </nav>
       <div className="name"><span>Aashish Sharma</span></div>
      
       <section className='first'>
       
           <ul className='sci'>
               
               <li data-text='Linkedin'>
                   <a href="https://www.linkedin.com/in/aashish-sharma-a409291a3/" className='linkedin'><i className="fa fa-linkedin-square" aria-hidden="true"></i>.</a>
               </li>
               <li data-text='Github'>
               <a href="https://github.com/aashish-fx" className='github'><i class="fa fa-github" aria-hidden="true"></i>.</a>
               </li>
               <li data-text='Resume'>
                   <a href="/" className='resume'><i class="fa fa-id-card-o" aria-hidden="true"></i>.</a>
                
               </li>
           </ul>
       </section>
      
      
       <div className="name"><span>Jeetesh Gavande</span></div>
       <section className='second'>
           
           <ul className='sci'>
           
               <li data-text='Linkedin'>
                   <a href="https://www.linkedin.com/in/jeetesh-gavande-a2a2361a9/" className='linkedin'><i class="fa fa-linkedin-square" aria-hidden="true"></i>.</a>
               </li >
               <li data-text='Github'>
               <a href="https://www.github.com/jeeteshgavande" className='github'><i class="fa fa-github" aria-hidden="true"></i>.</a>
               </li>
               <li data-text='Resume'>
                   <a href="/" className='resume'><i class="fa fa-id-card-o" aria-hidden="true"></i>.</a>
               </li>
           </ul>
       </section>
      
   </div>);
}
export default Aboutus;
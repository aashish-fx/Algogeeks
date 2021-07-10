import React from 'react';
import { Link } from 'react-router-dom';
import './DropNav.css';
//import Dropdown from './Dropdown';

function DropNav(props) {
 // const [dropdown, setDropdown] = useState(false);

  const changeHandler =(event)=>{
    props.value(event.target.value)
  } ;
  return (
    <>
      <nav className='navbar1'>
        <Link to='/' className='navbar1-logo'>
          Visualize Graphs
        </Link>
        
        <div>
          
        <select onChange={changeHandler} >
                        <option value='plot'>Plot</option>
                        <option value='Exponantial'>Exponantial</option>
                        <option value='EXX1'>EXX1</option>
                        <option value='Linear'>Linear</option>
                        <option value='Logarithm'>Logrithms</option>
                        <option value='XCube'>XCube</option>
                        <option value='XSqX1'>XsqX1</option>
                        
        </select>
        </div>
      
      </nav>
    </>
  );
}

export default DropNav;

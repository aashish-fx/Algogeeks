import React from 'react'
import styles from './Navbar.module.css'

const Navbar = ({ handleLength, handleSpeed, handleAlgo, generateRandomArray, handleSort, sorting, completed, len, speed, algo }) =>{

    return (
        <nav>
            <div className={styles.brand} >Sorting Algo Visualizer</div>

            <div className={styles.toolbox}>
                <div>
                    <select onChange={handleAlgo} disabled={sorting} value={algo}>
                        <option value='bubbleSort'>Bubble Sort</option>
                        <option value='insertionSort'>Insertion Sort</option>
                        
                        <option value='mergeSort'>Merge Sort</option>
                        <option value='quickSort'>Quick Sort</option>
                    </select>
                </div>
                <div>
                    <button onClick={generateRandomArray} disabled={sorting}>Random</button>
                    <button onClick={handleSort} disabled={sorting || completed}>Sort</button>
                </div>
                <div >
                        <label>Speed</label>
                        <input type='range' onChange={handleSpeed} min='1' max='10' value={Math.ceil(450 / speed)} disabled={sorting}></input>
                    </div>

                    <div>
                        <label>Length</label>
                        <input type='range' onChange={handleLength} min='5' max={100} step='1' disabled={sorting} value={len}></input>
                    </div>
            </div>
        </nav>
    )
}

export default Navbar
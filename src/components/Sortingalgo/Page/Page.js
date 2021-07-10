import React, { useState, useEffect } from 'react'
import styles from  './Page.module.css'
import {Link} from 'react-router-dom';
//import Legends from '../Legends/Legends'

function Page({ blocks, compare, sorted, swap,content }){
    const [width, setWidth] = useState(Math.min(35, Math.ceil(window.innerWidth / blocks.length) - 5))
    const color = blocks.length <= 50 && width > 14 ? 'black' : 'transparent'
    let p = '';
    let q = '';
    let r = '';
    let s = '';
    
    let pow1 = '';
    let pow2 = '';
    let best = '';
    const backHome=()=>{
          
    }
    useEffect(() => {
        const handleResize = () => {
            setWidth(Math.min(20, Math.ceil(window.innerWidth / blocks.length) - 8))
        }

        window.addEventListener('resize', handleResize)

        setWidth(Math.min(20, Math.ceil(window.innerWidth / blocks.length) - 8))
    }, [blocks.length])
    if(content==='Merge Sort')
    {   q = 'Merge Sort';
        pow1='logn'
        pow2 = 'logn'
        best = 'nlogn' 
    
        p = 'Merge Sort is an efficient, stable sorting algorith that makes use of the divide and conquer strategy. Conceptually the algorithm works as follows:'
        r = 'Divide the unsorted list into n sublists, each containing one element(a list of one element is considered sorted)';
        s = ' Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.';
    }
    if(content==='Quick Sort')
    {   pow1 = 'logn';
        pow2 = 'logn';
        best = 'logn';
        q = 'Quick Sort'
        p = 'Quick Sort is an efficient, in-place sorting algorith that in practice is faster than MergeSort and HeapSort. However, it is not a stable sorting algorithm, meaning that the relative positioning of equal sort items is not preserved.Quicksort is a divide and conquer algorithm. Quicksort first divides a large array into two smaller sub-arrays: the low elements and the high elements. Quicksort can then recursively sort the sub-arrays. '
        //r = 'Pick an element, called a pivot, from the array. This is usually done at random.'
        //s = 'Move pivot element to the start of the array.   Partitioning: reorder the array so that all elements with values less than the pivot come before the pivot, while all elements with values greater than the pivot come after it (equal values can go either way). After this partitioning, the pivot is in its final position'
    } 
    if(content==='Bubble Sort')
    {
        q = 'Bubble Sort'
        pow1 = '2' ;
        pow2 = '2';
        best = 'n';
        p = 'Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list. Although the algorithm is simple, it is too slow and impractical for most problems'
    }
    if(content==='Insertion Sort')
    {
        q = 'Insertion Sort'
        pow1 = '2';
        pow2 = '2';
        best = 'n';
        p = 'Insertion Sort is a simple sorting algorithm that iterates through an array and at each iteration it removes one element from the array, finds the location it belongs to in the sorted list and inserts it there, repeating until no elements remain in the unsorted list. It is an in-place, stable sorting algorithm that is inefficient on large input arrays but works well for data sets that are almost sorted. It is more efficient in practice compared to other quadratic sorting algorithms like bubble sort and selection sort.'
    }
    return (
        <div className={styles.whole}>
        <div className={styles.list}>
            {blocks.map((block, i) => {
                const height = block * 400 / blocks.length;
                let bg = 'rgb(23, 58, 109)'
               
                // i th element is being compared with some other element
                if(compare && (i === compare[0] || i === compare[1])){
                    bg = '#c850ff'
                }

                if(swap && (i === swap[0] || i === swap[1])){
                    bg='red'
                }
                // i th element is in its correct position
                if(sorted && sorted.includes(i)){
                    bg = '#43be7a'
                }

                const style = {
                    'backgroundColor': bg,
                    'color': color, 
                    'height': height, 
                    'width': width
                }
                return (<div key={i} className={styles.block} style={style}>{block}</div>)
            })}
            <div className={styles.para}>
              <div className={styles.q}>
                  <p >{q}</p>
                 <p className={styles.p}>{p}</p>
                     <ol className={styles.list1}>
                         <li>{r}</li>
                         <li>{s}</li>
                     </ol>
                     <p>Complexity</p>
                     <div className={styles.complexity}>
                     Worst Case:
                     <span>O(n{pow1})</span>
                     <br></br>
                     AvgCase:
                     <span>O(n{pow2})</span>
                     <br></br>
                     Best Case:
                     <span>O({best})</span>
                 </div>
                 </div>
                 
                 </div>
                 <div >
                   <button className={styles.button} onClick={backHome}><Link to='/'><span>Back</span></Link></button>
                 </div>
        </div>
        <br></br>
        
        </div>
    );
}

export default Page

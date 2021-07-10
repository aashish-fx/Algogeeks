import React,{useState,useEffect} from 'react';

import Navbar from './Sortingalgo/Navbar/Navbar';
import Page from './Sortingalgo/Page/Page';
import Styles from './Main.module.css'
//import Legends from './Sortingalgo/Legends/Legends'

// Algorithms
import bubbleSort from '../algorithms/bubbleSort'
import insertionSort from '../algorithms/insertionSort'
import mergeSort from '../algorithms/mergeSort'
import quickSort from '../algorithms/quickSort'

const Main=()=>{
    const generateRandomArray = (len) => {
		setCompleted(false)
		setSorting(false)
		setSortedIndex([])

		const randomArray = Array.from(Array(len + 1).keys()).slice(1)
		console.log(randomArray)
		
		for (let i = randomArray.length - 1; i > 0; i--) {
			const randomIndex = Math.floor(Math.random() * (i - 1))
			const temp = randomArray[i]
        
			randomArray[i] = randomArray[randomIndex]
			randomArray[randomIndex] = temp
		}
		
		setBlocks(randomArray)
	}

	// States
	const p ='is an efficient, stable sorting algorith that makes use of the divide and conquer strategy. Conceptually the algorithm works as follows'
    const [content,setContent] = useState(p);
	const [algo, setAlgo] = useState('mergeSort')
	const [len, setLength] = useState(30)
	const [blocks, setBlocks] = useState([])
	const [sorting, setSorting] = useState(false)
	const [completed, setCompleted] = useState(true)
	const [speed, setSpeed] = useState(250)
	const [compare, setCompare] = useState([])
	const [swap, setSwap] = useState([])
	const [sortedIndex, setSortedIndex] = useState([])

	// Generating random array every time the length is changed by th user
	useEffect(() => {
		if(algo==='bubbleSort')
		{
			setContent('Bubble Sort')
		}
		if(algo==='mergeSort')
		{
			setContent('Merge Sort')
		}
		if(algo==='quickSort')
		{
			setContent('Quick Sort')
		}
		if(algo==='insertionSort')
		{
			setContent('Insertion Sort')
		}
		generateRandomArray(len)
	}, [len, algo])

	// setting the selected algorithm
	const handleAlgo = (event) => {
		setAlgo(event.target.value)
		
	}

	// handling the length of the array
	const handleLength = (event) => {
		setLength(Number(event.target.value))
	}

	// handling the speed of sorting
	const handleSpeed = (event) => {
		setSpeed(Math.ceil(400 / Number(event.target.value)))
	}

	// Sorting according to the algorithm
	const handleSort = () => {
		
		const sortAccOrder = (order) => {
			(function loop(i) {
				setTimeout(function () {
					const [j, k, arr, index] = order[i]
					setCompare([j, k])
					setSwap([])

					if(index !== null){
						setSortedIndex((prevState) => (
							[...prevState, index]
						))
					}
		
					if(arr){
						
						setBlocks(arr)
						if(j !== null || k !== null)
							setSwap([j, k])

					}

					if (++i < order.length){
						loop(i)
					} else {
						setSorting(false)
						setCompleted(true)
					}   
				}, speed)
			})(0)
			
		}

		setSorting(true)

		algo === 'bubbleSort' ? sortAccOrder(bubbleSort(blocks)) : 
		algo === 'insertionSort' ?  sortAccOrder(insertionSort(blocks)) :
		
		algo === 'mergeSort' ? sortAccOrder(mergeSort(blocks)) : 
		algo === 'quickSort' ? sortAccOrder(quickSort(blocks)) : (() => {
			setSorting(false)
			setCompleted(true)
		})()
	}

	return (
		<div className={Styles.container}>
			<Navbar 
				generateRandomArray={() => generateRandomArray(len)}
				handleLength={handleLength} 
				handleSpeed={handleSpeed}
				handleAlgo={handleAlgo}
				handleSort={handleSort} 
				sorting={sorting}
				completed={completed}
				len={len}
				speed={speed}
				algo={algo}
			/>
			
			<Page
				blocks={blocks} 
				compare={sorting && compare}
				swap={sorting && swap}
				sorted={sortedIndex} 
				content = {content}
			/>
           
			
		</div>
    )
};
export default Main;
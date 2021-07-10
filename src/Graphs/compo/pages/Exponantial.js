import React from 'react';
// import Plot from "react-plotly.js";
import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
import styles from './Logrithms.module.css';
const Plot = createPlotlyComponent(Plotly);


const Tracks = () => {
	let y = [-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6];
	let x =  [0.0024787521766664,0.0067379469990855,0.018315638888734,0.049787068367864,0.13533528323661,0.36787944117144,1,2.718281828459,7.3890560989307,	20.085536923188,54.598150033144,148.41315910258,403.42879349274];
	
	return(
		<div className={styles.bg}>
			<Plot
				data={[
					{
						type: 'line',
						x: y,
						y: x,
						marker: {color:'#03fc6b'}
					}
				]}
				layout={{
					title: '<b>Exponantial</b> <br>',
					margin:{
						l: 80,
						r: 80,
						b: 130,
						t: 130,
						pad: 2
					},
					paper_bgcolor: '#c7ffe0',
					plot_bgcolor: '#d4fff4',
					font: {
						family: 'Newsreader, serif',
						size: 15,
						color: 'black'
					},
					xaxis: {
						title: 'X-axis',
						titlefont: {
							family: 'Arial, sans-serif',
							size: 8,
							color: 'white'
						},
						showticklabels: false,
						tickfont:{
							family: 'Arial, sans-serif',
							size: 8,
							color: 'white'
						}
					},
					yaxis: {
						title: 'Y-axis',
						titlefont: {
							family: 'Arial, sans-serif',
							size: 8,
							color: 'black'
						},
						showticklabels: true,
						tickfont: {
							family: 'Arial, sans-serif',
							size: 8,
							color: 'black'
						}
					},
					hovermode: 'closest'
				}}
				useResizeHandler={true}	style={{width: '80vw', height: '87vh'}}
			/>
		</div>
	)
}


export default Tracks;
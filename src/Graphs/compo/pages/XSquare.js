import React from 'react';
// import Plot from "react-plotly.js";
import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
import styles from './Logrithms.module.css';
const Plot = createPlotlyComponent(Plotly);


const Tracks = () => {
	let y = [-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6];
	let x =  [36,25,16,9,4,1,0,1,4,9,16,25,36];
	
	return(
		<div className={styles.bg}>
			<Plot
				data={[
					{
						type: 'lines',
						x: y,
						y: x,
						marker: {color:'#03fc6b'}
					}
				]}
				layout={{
					title: '<b>x^</b>2<br>',
					margin:{
						l: 100,
						r: 100,
						b: 150,
						t: 150,
						pad: 4
					},
					paper_bgcolor: '#c7ffe0',
					plot_bgcolor: '#d4fff4',
					font: {
						family: 'Newsreader, serif',
						size: 20,
						color: 'black'
					},
					xaxis: {
						title: 'X-axis',
						titlefont: {
							family: 'Arial, sans-serif',
							size: 12,
							color: 'white'
						},
						showticklabels: false,
						tickfont:{
							family: 'Arial, sans-serif',
							size: 12,
							color: 'white'
						}
					},
					yaxis: {
						title: 'Y-axis',
						titlefont: {
							family: 'Arial, sans-serif',
							size: 12,
							color: 'black'
						},
						showticklabels: true,
						tickfont: {
							family: 'Arial, sans-serif',
							size: 12,
							color: 'black'
						}
					},
					hovermode: 'closest'
				}}
				useResizeHandler={true}	style={{width: '80vw', height: '89vh'}}
			/>
		</div>
	)
}


export default Tracks;
import React from 'react';
// import Plot from "react-plotly.js";
import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
import styles from './Logrithms.module.css';
const Plot = createPlotlyComponent(Plotly);


const Tracks = () => {
	let y = [0.01,1,2,3,4,5,6];
	let x =  [-1,0,0.30102999566398, 0.47712125471966,0.60205999132796, 0.69897000433602,0.77815125038364,0.84509804001426,0.90308998699194,0.95424250943932,1,1.0413926851582,1.0791812460476]
	return(
		<div className={styles.bg} >
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
					title: '<b>Logarithm</b> <br>',
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
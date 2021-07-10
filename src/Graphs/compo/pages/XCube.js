import React  from 'react';
// import Plot from "react-plotly.js";
import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
import styles from './Logrithms.module.css';
const Plot = createPlotlyComponent(Plotly);


const Tracks = () => {
	let y = [-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6];
	let x =  [-216,-125,-64,-27,-8,-1,0,1,8,27,64,125,216];
	
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
					title: '<b>x^3</b> <br>',
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
							color: '#1888ff'
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
							size: 12,
							color: 'black'
						}
					},
					hovermode: 'closest',
				}}
				useResizeHandler={true}	style={{width: '80vw', height: '89vh',background:'blue'}}
			/>
		</div>
	)
}


export default Tracks;
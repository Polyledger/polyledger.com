import React, { Component } from 'react';
import Highcharts from 'highcharts';
import numeral from 'numeral';
import './Chart.css';

class Chart extends Component {
	constructor() {
		super(...arguments);

		this.state = {
			series: [],
			change: {}
		};
	}

	componentDidMount() {
		fetch('https://app.polyledger.com/api/portfolios/public_charts', {
			method: 'GET'
		})
			.then(response =>
				response.json().then(data => {
					this.chart = new Highcharts['Chart']('chart', {
						chart: {
							type: 'line',
							backgroundColor: 'rgba(255, 255, 255, 0.0)'
						},
						colors: ['#b4c4fd', '#ead36b', '#23c574'],
						credits: {
							enabled: false
						},
						legend: {
							itemStyle: {
								color: '#333'
							},
							itemHoverStyle: {
								color: '#111'
							}
						},
						series: data.series,
						title: {
							text: 'Polyledger Portfolio Performance',
							style: {
								color: '#333',
								fontFamily: 'Libre Baskerville'
							}
						},
						tooltip: {
							formatter() {
								let date = Highcharts.dateFormat('%e. %b %Y', new Date(this.x));
								let result = `<strong>${date}</strong><br>`;
								this.points.forEach(value => {
									result +=
										'<span style="color:' + value.series.color + '">\u25CF</span> ';
									result += value.series.name + ': ';
									result += numeral(value.y).format('0,0%');
									result += '<br>';
								});
								return result;
							},
							shared: true
						},
						xAxis: {
							labels: {
								style: {
									color: '#333'
								}
							},
							type: 'datetime'
						},
						yAxis: {
							gridLineWidth: 0,
							labels: {
								formatter() {
									return numeral(this.value).format('0,0.00%');
								},
								style: {
									color: '#333'
								}
							},
							minorGridLineWidth: 0,
							title: {
								text: 'Cumulative Return',
								style: {
									color: '#333'
								}
							}
						}
					});
				})
			)
			.catch(error => console.log(error));
	}

	componentWillUnmount() {
		if (this.chart) this.chart.destroy();
	}

	render() {
		return <div id="chart" />;
	}
}

export default Chart;

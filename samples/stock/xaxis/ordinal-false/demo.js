Highcharts.getJSON('https://demo-live-data.highcharts.com/aapl-c.json', function (data) {

    // Create the chart
    Highcharts.stockChart('container', {


        rangeSelector: {
            selected: 1
        },

        title: {
            text: 'AAPL Stock Price'
        },

        xAxis: {
            ordinal: false
        },

        series: [{
            name: 'AAPL Stock Price',
            data: data,
            marker: {
                enabled: true,
                radius: 3
            },
            shadow: true,
            tooltip: {
                valueDecimals: 2
            }
        }]
    });
});

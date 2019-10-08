$(document).ready(function() {
    
    var pieData = [
        {
            "key": "Key1",
            "value": 20,
            "index": 0,
            "dispVal": true
        },
        {
            "key": "Key2",
            "value": 60,
            "index": 1,
            "dispVal": true
        },
        {
            "key": "Key3",
            "value": 120,
            "index": 2,
            "dispVal": true
        },
        {
            "key": "Key4",
            "value": 30,
            "index": 3,
            "dispVal": true
        },
        {
            "key": "Key5",
            "value": 60,
            "index": 4,
            "dispVal": true
        },
        {
            "key": "Remaining",
            "value": 30,
            "index": 5,
            "dispVal": false
        }
    ];
    var donutInstance = new PieChart();
    donutInstance.initialize({
        el: "donutChart",
        color: ["#0E3570", "#6DC24B", "#FFDA29", "#EF3341", "#00A2E0", "#E0E0E0"],
        isDonut: true,
        dataset: pieData
    });

    var pieInstance = new PieChart();
    pieInstance.initialize({
        el: "pieChart",
        color: ["#3E5D8D", "#8ACE6F", "#FFE154", "#F25C67", "#33B5E6", "#EFEFEF"],
        isDonut: false,
        dataset: pieData
    });

    var columnDataPoints = [
        {key: "2018-05-22", value: 20}, {key: "2018-05-21", value: 44}, {key: "2018-05-20", value: 49}, {key: "2018-05-19", value: 0},
        {key: "2018-05-18", value: 32}, {key: "2018-05-17", value: 08}, {key: "2018-05-16", value: 40}, {key: "2018-05-15", value: 63},
        {key: "2018-05-14", value: 11}, {key: "2018-05-13", value: 67}, {key: "2018-05-12", value: 12}, {key: "2018-05-11", value: 70}
    ];
    var colInstance = new ColumnChart();
    colInstance.initialize({
        el: "columnChart",
        color: ["#00a2e0", "#f5f5f5"],
        dataset: columnDataPoints,
        drawBgBars: true,
        isTimeScale: true
    });

    var barDataPoints = [
        {key: "Key 1", value: 20}, {key: "Key 2", value: 44}, {key: "Key 3", value: 49}, {key: "Key 4", value: 2},
        {key: "Key 5", value: 32}, {key: "Key 6", value: 08}, {key: "Key 7", value: 60}, {key: "Key 8", value: 25}
    ];
    var barInstance = new BarChart();
    barInstance.initialize({
        el: "barChart",
        color: ["#00a2e0", "#f5f5f5"],
        dataset: barDataPoints,
        drawBgBars: true
    });

    $('[data-toggle="tooltip"]').tooltip({
        "container": "body"
    });
});
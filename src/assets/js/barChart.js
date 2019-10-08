function BarChart() {

    var self = this;

    self.initialize = function (graphConf) {

        self.elId = graphConf.el;
        self.el = document.getElementById(self.elId);

        self.margin = { top: 5, right: 15, bottom: 20, left: 100 };
        self.color = graphConf.color || [];
        self.defaultColor = d3.scaleOrdinal(d3.schemeCategory10);
        self.drawBgBars = graphConf.drawBgBars || false;

        self.graphHeight = self.el.offsetHeight;
        self.graphWidth = self.el.offsetWidth;

        self.width = self.graphWidth - self.margin.left - self.margin.right;
        self.height = self.graphHeight - self.margin.top - self.margin.bottom;
        self.graphData = graphConf.dataset;
        self.parseData();
    }

    self.parseData = function () {

        self.xScale = d3.scaleLinear()
            .range([0, self.width])
            .domain([0, d3.max(self.graphData, function (d) {
                return d.value;
            })]);

        self.yScale = d3.scaleBand()
            .rangeRound([self.height, 0]).padding(0.15)
            .domain(self.graphData.map(function (d) {
                return d.key;
            }));

        self.render();
    }

    self.render = function () {
        self.getChartingAreaPane();
        self.renderAxes();
        self.renderBars();
    }

    self.getChartingAreaPane = function () {
        $(self.el).empty();

        self.chartingArea = d3.select(self.el)
            .classed("actualChartPane", true);

        self.svg = self.chartingArea.append("svg")
            .attr("width", self.graphWidth)
            .attr("height", self.graphHeight)
            .append("g")
            .attr("transform", "translate(" + self.margin.left + "," + self.margin.top + ")");
    }

    self.renderAxes = function () {

        var noOfTicks = (self.width > 400) ? 7 : 5;
        var xAxis = self.svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + self.height + ")")
            .call(d3.axisBottom(self.xScale).ticks(noOfTicks));

        var yAxis = self.svg.append("g")
            .attr("class", "y axis")
            .call(d3.axisLeft(self.yScale))
            .selectAll(".tick text")
            .style("font-size", "12px");
    }

    self.renderBars = function () {

        if (self.drawBgBars) {
            /*  append bg rect  */
            self.bgBar = self.svg.selectAll(".bar-bg")
                .data(self.graphData)
                .enter().append("rect")
                .attr("class", "bar-bg")
                .attr("x", 0)
                .attr("height", self.yScale.bandwidth())
                .attr("y", function (d) { return self.yScale(d.key); })
                .attr("width", self.width)
                .attr("fill", "#f5f5f5");
        }

        /*  append fg rect  */
        self.fgBar = self.svg.selectAll(".bar-fg")
            .data(self.graphData)
            .enter().append("rect")
            .attr("class", "bar-fg")
            .attr("x", 0)
            .attr("height", function () {
                return (self.drawBgBars) ? self.yScale.bandwidth() * 0.4 : self.yScale.bandwidth();
            })
            .attr("y", function (d) {
                return (self.drawBgBars) ? self.yScale.bandwidth() * 0.3 + self.yScale(d.key) : self.yScale(d.key);
            })
            .attr("width", function (d) { return self.xScale(d.value); })
            .attr("data-toggle", "tooltip")
            .attr("data-placement", "right")
            .attr("title", function (d) {
                return d.value;
            })
            .attr("fill", function (d, i) {
                return (self.color.length !== 0) ? self.color[0] : self.defaultColor(i);
            })
            .attr("fill-opacity", 0.7);
    }
}
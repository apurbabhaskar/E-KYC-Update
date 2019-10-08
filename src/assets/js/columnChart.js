function ColumnChart() {

    let self = this;

    self.initialize = function(graphConf) {

        self.elId   = graphConf.el;
        self.el     = document.getElementById(self.elId);

        self.margin = {top: 5, right: 0, bottom: 50, left: 20};
        self.color  = graphConf.color || [];
        self.defaultColor  = d3.scaleOrdinal(d3.schemeCategory10);
        self.drawBgBars = graphConf.drawBgBars || false;
        self.isTimeScale = graphConf.isTimeScale || false;

        self.graphHeight = self.el.offsetHeight;
        self.graphWidth = self.el.offsetWidth;

        self.parseTime = d3.timeParse("%Y-%m-%d");
        self.tickFormat = d3.timeFormat("%d %b");

        self.width = self.graphWidth - self.margin.left - self.margin.right;
        self.height = self.graphHeight - self.margin.top - self.margin.bottom;
        self.graphData = graphConf.dataset;

        /*  if time scale, better first sort the data   */
        if(self.isTimeScale) {
            self.graphData.sort((d1,d2) => new Date(d1.key).getTime() - new Date(d2.key).getTime());
        }
        self.parseData();
    }

    self.parseData = function() {

        self.xScale = d3.scaleBand()
                        .rangeRound([0, self.width]).padding(0.15)
                        .domain(self.graphData.map(function (d) {
                            return d.key;
                        }));

        self.yScale = d3.scaleLinear()
                        .rangeRound([self.height, 0])
                        .domain([0, d3.max(self.graphData, function(d) {
                            return d.value;
                        })]);            
        self.render();
    }

    self.render = function() {
        self.getChartingAreaPane();
        self.renderAxes();
        self.renderColumns();
    }

    self.getChartingAreaPane = function() {

        $(self.el).empty();
    
        self.chartingArea = d3.select(self.el)
                                .classed("actualChartPane", true);
                                
        self.svg = self.chartingArea.append("svg")
                        .attr("width", self.graphWidth)
                        .attr("height", self.graphHeight)
                        .append("g")
                        .attr("transform", "translate(" + self.margin.left + "," + self.margin.top + ")");
    }

    self.renderAxes = function() {

        let noOfTicks = (self.graphWidth > 400) ? 7 : 5;
        let xAxis = self.svg.append("g")
                        .attr("class", "x axis")
                        .attr("transform", "translate(0," + self.height + ")")
                        .call(d3.axisBottom(self.xScale).tickFormat(function(d) {
                        	return self.tickFormat(self.parseTime(d));
                        }))
                        .selectAll("text")
                        .style("text-anchor", "end")
                        .attr("dx", "-.8em")
                        .attr("dy", "-0.6em")
                        .attr("transform", "rotate(-90)");

        let yAxis = self.svg.append("g")
                        .attr("class", "y axis")
                        .call(d3.axisLeft(self.yScale));
    }

    self.renderColumns = function() {

        if(self.drawBgBars) {
            /*  append bg rect  */
            self.bgBar = self.svg.selectAll(".bar-bg")
                            .data(self.graphData)
                            .enter().append("rect")
                            .attr("class", "bar-bg")
                            .attr("x", function(d) {
                                return self.xScale(d.key);
                            })
                            .attr("y", 0)
                            .attr("width", self.xScale.bandwidth())
                            .attr("height", self.height)
                            .attr("fill", "#f5f5f5"); 
        }

        /*  append fg rect  */
        self.fgBar = self.svg.selectAll(".bar-fg")
                        .data(self.graphData)
                        .enter().append("rect")
                        .attr("class", "bar-fg")
                        .attr("x", function(d) {
                            return (self.drawBgBars) ? self.xScale.bandwidth()*0.3 + self.xScale(d.key) : self.xScale(d.key);
                        })
                        .attr("y", function(d) {
                            return self.yScale(d.value);
                        })
                        .attr("width", function() {
                            return (self.drawBgBars) ? self.xScale.bandwidth()*0.4 : self.xScale.bandwidth();
                        })
                        .attr("height", function(d) {
                            return self.height - self.yScale(d.value);
                        })
                        .attr("data-toggle", "tooltip")
				        .attr("data-placement", "right")
				        .attr("title", function(d){
				        	return d.value;
				        })
                        .attr("fill", function(d,i) {
                            return (self.color.length !== 0) ? self.color[0] : self.defaultColor(i);
                        })
                        .attr("fill-opacity", 0.7);
    }
}
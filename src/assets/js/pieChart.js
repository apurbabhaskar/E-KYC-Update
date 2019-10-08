function PieChart() {

    let self = this;

    self.initialize = function(graphConf) {
        self.elId   = graphConf.el;
        self.el     = document.getElementById(self.elId);

        self.margin = {top: 0, right: 0, bottom: 0, left: 0};
        self.color  = graphConf.color || [];
        self.defaultColor  = d3.scaleOrdinal(d3.schemeCategory10);

        self.graphHeight = self.el.offsetHeight;
        self.graphWidth = self.el.offsetWidth;
        
        self.width = self.graphWidth - self.margin.left - self.margin.right;
        self.height = self.graphHeight - self.margin.top - self.margin.bottom;
        self.radius = (Math.min(self.width, self.height) / 2) * 0.9;

        self.isDonut = graphConf.isDonut || false;
        if(self.isDonut) {
            self.innerRadius = 0.75*self.radius;
            self.outerRadius = self.radius;
        } else {
            self.innerRadius = 0;
            self.outerRadius = self.radius;
        }

        self.graphData = _.filter(graphConf.dataset, (d) => {
            return (d.value > 0);
        });

        self.parseData();
    },

    self.parseData = function() {

        self.arc = d3.arc()
                    .innerRadius(self.innerRadius)
                    .outerRadius(self.outerRadius);
        
        self.arcOver = d3.arc()
                        .innerRadius(self.innerRadius)
                        .outerRadius(self.outerRadius+15);

        self.pie = d3.pie()
                    .padAngle(.02)
                    .value(function(d) { return d.value; })
                    .sort(null);

        self.render();
    }

    self.render = function() {
        self.getChartingAreaPane();
        self.renderPieArcs();
    },

    self.getChartingAreaPane = function() {
        $(self.el).empty();
    
        self.chartingArea = d3.select(self.el)
                                .classed("actualChartPane", true);
                                
        self.svg = self.chartingArea.append("svg")
                        .attr("width", self.graphWidth)
                        .attr("height", self.graphHeight)
                        .append("g")
                        .attr("transform", "translate(" + self.graphWidth / 2 + "," + self.graphHeight / 2 + ")");
    },

    self.renderPieArcs = function() {
        
        self.pieData	= self.pie(self.graphData);

        let arcs = self.svg.selectAll("g.slice")
                    .data(self.pieData)
                    .enter()
                    .append("svg:g")
                    .attr("class", "slice");
                    
        self.valWrapper = self.svg.append("g")
                                .attr("class", "value-wrapper");

        arcs.append("svg:path")
				.attr("fill", function(d) {
					return (self.color.length !== 0) ? self.color[d.data.index] : self.defaultColor(d.data.index);
				})
				.attr("stroke", function(d) {
					return (self.color.length !== 0) ? self.color[d.data.index] : self.defaultColor(d.data.index);
                })
                .attr("fill-opacity", 0.8)
				.attr("stroke-width", 0.7)
                .attr("d", self.arc)
                .attr("data-toggle", function(d) {
                    return (d.data.dispVal) ? "tooltip": "";
                })
                .attr("data-placement", "top")
                .attr("title", function (d) {
                    return d.data.key + " : " + d.data.value;
                })
                .on("mouseover", function(d) {
                    d3.select(this).transition()
                        .duration(500)
                        .attr("d", self.arcOver);
                })
                .on("mouseout", function(d) {
                    d3.select(this).transition()
                        .duration(500)
                        .attr("d", self.arc);
                });

    }
}
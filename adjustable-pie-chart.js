Raphael.fn.piechart = function (offsetX, offsetY, radius, values) {
		
		var paper = this;
		var chart = this.set();
		var startAngle = 0;
		var total = 0;
		for(var i = 0; i < values.length; i++){
			total += values[i];
		}
		
		function sliceDef(value, startAngle, endAngle) {
        var rad = Math.PI/180,
            x1 = offsetX + radius * Math.cos(-startAngle * rad),
            x2 = offsetX + radius * Math.cos(-endAngle * rad),
            y1 = offsetY + radius * Math.sin(-startAngle * rad),
            y2 = offsetY + radius * Math.sin(-endAngle * rad),
            pathDef = ["M", offsetX, offsetY, "L", x1, y1, "A", radius, radius, 0, +(Math.abs(endAngle - startAngle) > 180), 1, x2, y2, "z"];
        return pathDef;
    }
		
    paper.circle(offsetX, offsetY, radius).attr({"stroke":"#000", "stroke-width":2});

		for(var i = 0; i < values.length; i++){
			var degrees = (360 * values[i]/total)
			var endAngle = startAngle - degrees;
			var slice = this.path(sliceDef(values[i], startAngle, endAngle)).attr({stroke: "#000"});
			chart.push(slice)
			startAngle += (endAngle - startAngle);
		}
		
		return chart
		
};
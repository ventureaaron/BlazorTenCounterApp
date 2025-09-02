

var sectID;
var height;
var width;
var xval;
var yval;
var boxwidth;
var boxheight;
var boxXCentOffset;
var boxYCentOffset;
var circSize;


function isD3Loaded() {
    return typeof window["d3"] !== 'undefined';
}

function renderGrid(id) {
    sectID = id;
    //alert(`#countDiv${sectID}`);
    var mainDiv = document.getElementById(`countDiv${sectID}`);
    width = mainDiv.clientWidth;
    height = parseInt(width / 2.4);
    xval = 5;
    yval = 5;
    boxwidth = (width - (2 * xval)) / 5;
    boxheight = (height - (2 * yval)) / 2;
    boxXCentOffset = boxwidth / 2;
    boxYCentOffset = boxheight / 2;
    circSize = Math.min(boxwidth, boxheight) - 5;

    //var svg = d3.select(`#rect${id}`).append("svg").attr("width", 700).attr("height", 300);
    var svg = d3.select(`#rect${id}`).append("svg").attr("width", width).attr("height", height);

    svg.append('rect')
        .attr('x', xval)
        .attr('y', yval)
        .attr('width', width - (2 * xval))
        .attr('height', height - (2 * yval))
        .attr('stroke', 'black')
        .attr('stroke-width', 3)
        .attr('fill', '#69a3b2')
        .attr('rx', width / 20)
        .attr('ry', width / 20);

    svg.append('line')
        .attr('x1', xval)
        .attr('y1', yval + boxheight)
        .attr('x2', xval + (width - (2 * xval)))
        .attr('y2', yval + boxheight)
        .attr('stroke', 'black')
        .attr('stroke-width', 3);

    for (let i = 1; i < 5; i++) {
        svg.append('line')
            .attr('x1', xval + (i * boxwidth))
            .attr('y1', yval)
            .attr('x2', xval + (i * boxwidth))
            .attr('y2', yval + (height - (2 * yval)))
            .attr('stroke', 'black')
            .attr('stroke-width', 3);
    }
}

function drawCircle(id, number) {
    var svg = d3.select(`#rect${id}`).select("svg");

    var xoffset = 0;
    var yoffset = 0;
    var fill = 'natural';

    if (fill == 'left') {
        xoffset = Math.ceil(number / 2) - 1;
        yoffset = (number + 1) % 2;
    }
    else if (fill == 'natural') {
        xoffset = (number - 1) % 5;
        yoffset = Math.ceil(number / 5) - 1;
    }

    svg.append('circle')
        .attr('cx', xoffset * boxwidth + boxXCentOffset + xval)
        .attr('cy', yoffset * boxheight + boxYCentOffset + yval)
        .attr('r', circSize / 2)
        .attr('stroke', 'black')
        .attr('stroke-width', 3)
        .attr('fill', '#bd0909');
}

function drawCircleWithDisplay(id, number, display) {
    var svg = d3.select(`#rect${id}`).select("svg");

    var xoffset = 0;
    var yoffset = 0;
    var fill = 'natural';

    if (fill == 'left') {
        xoffset = Math.ceil(number / 2) - 1;
        yoffset = (number + 1) % 2;
    }
    else if (fill == 'natural') {
        xoffset = (number - 1) % 5;
        yoffset = Math.ceil(number / 5) - 1;
    }

    svg.append('circle')
        .attr('cx', xoffset * boxwidth + boxXCentOffset + xval)
        .attr('cy', yoffset * boxheight + boxYCentOffset + yval)
        .attr('r', circSize / 2)
        .attr('stroke', 'black')
        .attr('stroke-width', 3)
        .attr('fill', '#bd0909');
    svg.append('text')
        .text(display) // Set the text content
        .attr("x", xoffset * boxwidth + boxXCentOffset + xval) // Set the x position
        .attr("y", yoffset * boxheight + boxYCentOffset + yval + 10) // Set the y position
        .attr("text-anchor", "middle") // Center the text horizontally
        .attr("fill", "white") // Set the text color
        .style("font-size", "30px");;

    /*
    .text("This is some D3 text!") // Set the text content
.attr("x", 200) // Set the x position
.attr("y", 100) // Set the y position
.attr("text-anchor", "middle") // Center the text horizontally
.attr("fill", "blue") // Set the text color
.style("font-size", "20px");
    */
}

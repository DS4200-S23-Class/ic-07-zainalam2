/*
D3 Class Demo 2 
Prof. Mosca 
Modified: 02/15/2023
*/


/*
D3 Class Demo 1
Prof. Mosca 
Modified: 10/04/2022
*/

//###############################################################
// First, be sure to include the D3 library in your HTML file
//    It should be included in the <head> of the file
//    Notice that we're using D3 V6. The V6 library is not always 
//      compatible with code using older versions
//###############################################################

//###############################################################
// Next, be sure to include your js file(s) in your HTML file
//    They should be included in the <body> of the file, right
//      before the </body> tag
//###############################################################

//###############################################################
// Why do we use D3? 
//    To build visualizations on a webpage, we use svg's. 
//    For example, suppose you want to make a scatter plot. You
//    could use <line> to make your x and y axes, and <circle> 
//    to make the points on your plot (as you'll do in hw). 
//    
//    But wait... until this point, we've made all svg shapes
//    by hand. Who has time to write out hundreds (or even tens)
//    of <circle> statements in HTML? 
//
//    Well, no one and that's where D3 comes in. It allows us to 
//    programatically bind data to elements in our DOM. Or in 
//    other words, (using our example from before) it allows you 
//    to programatically make a <circle> for every row in a 
//    your dataset, and associates that circle with data.  
//###############################################################

//###############################################################
// Adding an svg frame 
// For each visualization you add to a webpage, you'll want to 
// start by adding a general SVG to build inside. Think of this
// svg as the "frame" for the visualization. 
//###############################################################

// Typically, we use constants for frame dimensions and the frame
const FRAME_HEIGHT = 500;
const FRAME_WIDTH = 500; 
const MARGINS = {left: 100, right: 50, top: 50, bottom: 50};


//###############################################################
// Binding svg's to data  
// The real power of d3 for building visualization comes from
// the fact that it allows us to bind data to svg's. 
//###############################################################

// Let's create a visualization with a point for each datum 
// in the following dataset 
const data1 = [100, 200, 300];



// Let's make a vis with the following data 
const data2 = [55000, 48000, 27000, 66000, 90000];

// We would need an extremely large screen to use data2 values
// as our cx values. In order for our vis to work on (almost) 
// any screen, we need to be able to map (i.e. scale) our data
// values to pixel values. 

// Start with a new frame. This time, we will also set a constant
// for the width and height of our vis
const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right; 

const FRAME3 = d3.select("#vis3")
                  .append("svg")
                    .attr("height", FRAME_HEIGHT)
                    .attr("width", FRAME_WIDTH)
                    .attr("class", "frame"); 

// Now, let's define our scaling function

// find max X
const MAX_Y = d3.max(data2, (d) => { return d; }); 

// Now, define scale functions that maps our data values 
// (domain) to pixel values (range)
const Y_SCALE = d3.scaleLinear() // linear scale because we have 
                              // linear data 
                  .domain([0, (MAX_Y + 10000)]) // add some padding  
                  .range([0, VIS_WIDTH]); 

// Now, we can use X_SCALE to plot our points
FRAME3.selectAll("points")  
    .data(data2)  
    .enter()       
    .append("circle")  
      .attr("cx", MARGINS.left + 100) 
      .attr("cy", (d) => { return (Y_SCALE(d) + MARGINS.top); }) 
      .attr("r", 10)
      .attr("class", "point"); 

// We can also use X_SCALE to add an axis to the vis  
FRAME3.append("g") // g is a "placeholder" svg
      .attr("transform", "translate(" + MARGINS.left + 
            "," + MARGINS.top + ")") //moves axis 
                                                    // within margins 
      .call(d3.axisLeft(Y_SCALE).ticks(4)) // function for generating axis  
        .attr("font-size", '20px'); // set font size



















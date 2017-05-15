let dataset = [
  10,15,20,30,35
]

const height = 500;
const width = 900;

let svg = d3.select('body').append('svg')
  .attr('height', height)
  .attr('width', width);





const update = (dataset) => {

  var t = d3.transition()
    .duration(750)

  let circles = d3.select('svg')
    .selectAll('circle')
    .data(dataset, (d) => d )


  // Exit old elements not present in new data.
  circles.exit()
    .transition(t)
    .remove();

  // Update old elements present in new data
  circles
    .style('fill', 'gray');


  // Enter new elements present in new data
  circles.enter()
    .append('circle')
    .transition(t)
    .attr('r', (d) => d)
    .attr('cx', (d, i) => Math.floor(Math.random() * (800 - 100)) + 100)
    .attr('cy', (d) =>  Math.floor(Math.random() * (300 - 100)) + 100)
    .style('fill', 'green');





}




update(dataset);





setInterval( () => {

  dataset.splice(0,2)
  dataset.push(Math.floor(Math.random() * (35 - 10)) + 10)
  dataset.push(Math.floor(Math.random() * (35 - 10)) + 10)
  update(dataset)

}, 2000)

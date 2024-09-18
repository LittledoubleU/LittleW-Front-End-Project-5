// var textArray = $('.text').map(function() {
//     return $(this).text();
// }).get();

// textArray.forEach((element, index) => {
//     let textDiv = $('.text').eq(index); // Get the corresponding .text div
//     let width = textDiv.width(); // Get width of the .text div
//     let height = textDiv.height(); // Get height of the .text div
    
//     // Assuming you are working with an SVG text element that has a getBBox method
//     let bb = textDiv.getBBox();
//     let widthTransform = width / bb.width;
//     let heightTransform = height / bb.height;
//     let value = widthTransform < heightTransform ? widthTransform : heightTransform;
//     textDiv.setAttribute("transform", "matrix("+value+", 0, 0, "+value+", 0,0)");

//     // Append to the document or SVG container
//     // svg.appendChild(textDiv); // Example if you are appending to an SVG element
// });

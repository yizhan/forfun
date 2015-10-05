/**
 * Created by user on 3/10/15.
 */
"use strict";
// from stack over flow: http://stackoverflow.com/questions/8751020/how-to-get-a-pixels-x-y-coordinate-color-from-an-image
//

// Target: angular directive?

// TODO: add angular
var canvas = document.getElementById('#my-canvas');
var context = canvas.getContext('2d');

var imageObj = new Image();
imageObj.src = './color_wheel_730.png';
imageObj.onload = function() {
    context.drawImage(imageObj, 0, 0);
};

canvas.addEventListener('click', function(event) {
    var pixelData = canvas.getContext('2d').getImageData(event.offsetX, event.offsetY, 1, 1).data;
    console.log('pixelData', pixelData);
});

var trackMouseMove = (Element) => {
    // console.log('tracking mouse move', event);
    Element.addEventListener('mousemove', (event) => {
        let pixelData = canvas.getContext('2d').getImageData(event.offsetX, event.offsetY, 1, 1).data;
        console.log('pixelData', pixelData);
    })
};

var killTrackMouseMove = (event) => {
    console.log('kill tracking mouse move');
    event.removeEventListener('mousemove')
};
/**
 * Created by user on 3/10/15.
 */

// from stack over flow: http://stackoverflow.com/questions/8751020/how-to-get-a-pixels-x-y-coordinate-color-from-an-image
//

// Target: angular directive?

// TODO: use canvas only

var img = document.getElementById('#my-image');

var canvas = document.createElement('canvas');

console.log('img', img);
console.log('canvas', canvas);
canvas.width = img.width;
canvas.height = img.height;
canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
//
img.addEventListener('click', function(event) {
    var pixelData = canvas.getContext('2d').getImageData(event.offsetX, event.offsetY, 1, 1).data;
    console.log('pixelData', pixelData);
});


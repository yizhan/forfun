var module = require('../../module');

require('./color-picker-directive.scss');

module.directive('testDirective', function() {
    return {
        template: require('./color-picker-directive.html'),
        link: function (scope, element) {
            scope.selectedColor = '';
            scope.hoverColor = '';

            var canvas = document.getElementById('#my-canvas');
            var context = canvas.getContext('2d');

            var imageObj = new Image();
            imageObj.src = 'color_wheel_730.png';
            imageObj.onload = function() {
                context.drawImage(imageObj, 0, 0, 400, 400);
            };

            scope.trackMouseMove = function(event) {
                let pixelData = canvas.getContext('2d').getImageData(event.offsetX, event.offsetY, 1, 1).data;
                scope.hoverColor = pixelData;
                scope.backgroundColorPreview = {
                    'background-color': 'rgb(' + pixelData[0] + ',' + pixelData[1] + ',' + pixelData[2] + ')'
                }
            };

            scope.getCanvasPixelData = function() {
                var pixelData = canvas.getContext('2d').getImageData(event.offsetX, event.offsetY, 1, 1).data;
                console.log('pixelData', pixelData);
            };
        }
    };
});

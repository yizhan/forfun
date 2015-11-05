require('color-picker-directive.scss');

module.directive('testDirective', function() {
    return {
        template: require('color-picker-directive.html'),
        link: function (scope, element) {
            var canvas = document.getElementById('#my-canvas');
            var context = canvas.getContext('2d');

            var imageObj = new Image();
            imageObj.src = './color_wheel_730.png';
            imageObj.onload = function() {
                context.drawImage(imageObj, 0, 0);
            };

            scope.trackMouseMove = function(event) {
                console.log('track mouse move', element);

                element[0].addEventListener('mousemove', (event) => {
                    let pixelData = canvas.getContext('2d').getImageData(event.offsetX, event.offsetY, 1, 1).data;
                    console.log('pixelData', pixelData);
                });
            };

            scope.killTrackMouseMove = function(event) {
                element[0].removeEventListener('mousemove')
            };

            scope.getCanvasPixelData = function() {
                var pixelData = canvas.getContext('2d').getImageData(event.offsetX, event.offsetY, 1, 1).data;
                console.log('pixelData', pixelData);
            };
        }
    };
});

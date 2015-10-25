'use strict';

module.exports = angular.module('app',[])
    .controller('simpleController', function($scope) {{
        console.log('controller loaded');



        //$scope.trackMouseMove = function(Event) {
        //    // console.log('tracking mouse move', event);
        //    console.log(Event);
        //     //
        //     //Element.addEventListener('mousemove', (event) => {
        //     //   let pixelData = canvas.getContext('2d').getImageData(event.offsetX, event.offsetY, 1, 1).data;
        //     //   console.log('pixelData', pixelData);
        //     //});
        //
        //    return true;
        //};
        //
        //$scope.killTrackMouseMove = function(event) {
        //    console.log('kill tracking mouse move');
        //    event.removeEventListener('mousemove')
        //};
        //
        //
        //canvas.addEventListener('click', function(event) {
        //    var pixelData = canvas.getContext('2d').getImageData(event.offsetX, event.offsetY, 1, 1).data;
        //    console.log('pixelData', pixelData);
        //});
    }})
    .directive('simpleDirective', function() {

        return {
            restrict: 'E',
            template: `<canvas id="#my-canvas" ng-mouseover="trackMouseMove($event)" ng-mouseleave="killTrackMouseMove($event)" ng-click="getCanvasPixelData()" width="730" height="730"></canvas>`,
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
        }
    });



function printMessage (status='working') {
    // let

    let message = 'ES6';

    console.log(`${message} is ${status}`);
}

printMessage();
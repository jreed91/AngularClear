var clearApp = angular.module('clearApp', []);

function Cnt($scope) {

  $scope.saved = localStorage.getItem('notes');
  $scope.notes = (localStorage.getItem('notes')!==null) ? JSON.parse($scope.saved) : [ {text: 'Learn AngularJS', done: false}, {text: 'Build an Angular app', done: false} ];
  localStorage.setItem('notes', JSON.stringify($scope.notes));


  $scope.saveNote = function() {
    $scope.notes.push({
      text: $scope.note,
      done: false
    });
    $scope.note = ''; //clear the input after adding
    localStorage.setItem('notes', JSON.stringify($scope.notes));
  };


  $scope.removeNote = function() {
    var oldNotes = $scope.notes;
    $scope.notes = [];
    angular.forEach(oldNotes, function(note){
      if (!note.done)
        $scope.notes.push(note);
    });
    localStorage.setItem('notes', JSON.stringify($scope.notes));
  };

   $scope.bgstyle = function (index) {
    var red = 215;
    var green = 40 + (index * 15);
    var blue = 40 + (index * 15);
    var rgb = blue | (green << 8) | (red << 16);
    var sColor = '#' + rgb.toString(16);
    return {backgroundColor: sColor};
    };

};

// clearApp.directive('list', function() {
//    return function(scope, element, attrs) {

//      $(element[0]).draggable({
//               items:'li',
//               distance: 60,
//               start: function(event, ui) {

//                 $(this).find('input:checkbox:first').trigger('click');
//                 scope.$apply(scope.check);
//                },
//                 stop:function (event, ui) {
    
//                   scope.$apply(scope.check);
//                   },
//               axis: 'x',
//               revert: true
//              });
//    }});


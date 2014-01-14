var clearApp = angular.module('clearApp', []);

function Cnt($scope) {

  $scope.saved = localStorage.getItem('notes');
  $scope.notes = (localStorage.getItem('notes')!==null) ? JSON.parse($scope.saved) : [ {id: 1, text: 'Learn AngularJS', done: false}, {id: 2, text: 'Build an Angular app', done: false} ];
  localStorage.setItem('notes', JSON.stringify($scope.notes));

  $scope.saveNote = function() {
    var nextid = $scope.getNextId();
    $scope.notes.push({
      id: nextid,
      text: $scope.note,
      done: false,
    });
    $scope.note = ''; //clear the input after adding
    localStorage.setItem('notes', JSON.stringify($scope.notes));
  };

  $scope.getNextId = function() {
    var count = 0;
    angular.forEach($scope.notes, function(note) {
      count = note.id;
    });
    var count2 = parseInt(count)+1;
    return count2;
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


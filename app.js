function Cnt($scope) {
  var notes = $scope.notes = [];
  $scope.saveNote = function(note) {
     notes.push(note);
     $scope.note = "";
  };

  $scope.removeNote = function(index) {
  	notes.splice(index, 1);
  };
   $scope.bgstyle = function (index) {
    var red = 255;
    var green = 255-index;
    var blue = 255-index;
    var rgb = blue | (green << 8) | (red << 16);
    var sColor = '#' + rgb.toString(16);
    return {backgroundColor: sColor};
}
}

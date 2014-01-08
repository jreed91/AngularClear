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
    var red = 215;
    var green = 40 + (index * 15);
    var blue = 40 + (index * 15);
    var rgb = blue | (green << 8) | (red << 16);
    var sColor = '#' + rgb.toString(16);
    console.log(sColor);
    return {backgroundColor: sColor};
}
}

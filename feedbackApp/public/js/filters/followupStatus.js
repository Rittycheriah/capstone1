angular.module('myApp.followUpStatusFilter', [])
.filter('needsFollowup', function () {
  return function (feedback) {
    var filtered = [];
    var needsFollowupStat = 'no feedback at this time';
    if (feedback = needsFollowupStat) {
      return "yes" 
    } else {
      return "no";
    }
  };
});
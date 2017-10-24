$(document).ready(function() {
  $("form#puzzle").submit(function(event) {
    event.preventDefault();
    var vowels = ["a", "e", "i", "o", "u"];
    var fullSentence = $("input#fullSentence").val();
    var splitSentence = fullSentence.split("");

    for (var charIndex = 0; charIndex < splitSentence.length; charIndex += 1) {
      for (var vwlIndex = 0; vwlIndex < vowels.length; vwlIndex += 1) {
        if (splitSentence[charIndex] === vowels[vwlIndex]) {
        splitSentence[charIndex] = "-";
        }
      }
    }

    var output = splitSentence.join("");
    alert(output);






    // var newArray = [];




    // var puzzle = function(index) {
    //   for (var index = )
    // }

  });
});

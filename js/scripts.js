$(function() {
  $("form#word-play").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var firstArrayWords = sentence.split(" ");
    alert(firstArrayWords);

    if (sentence.length < 1) {
      return false;
    } //if else ((sentence.length === 1) &&

    //var secondArray = firstArrayWords.map(function(firstArrayWord) {
    //  return sentence.length <= 3;
    //});




    $("#result").show();

  });
});

function formListener(){
$('.main-form').submit(function() {
  event.preventDefault();
  
  var words = $('.js-input').val().split(' ');
 $('.word-count').text("Word count = " + words.length);
  
  var uniqueWords = []
  $('.js-input').each(function(){ words.push($(this).text()) });
  $(words).each(function(){
        for(var i = 0; i < uniqueWords.length; i++){
        var current = uniqueWords[i];
        if(current.word.toString() == this.toString()){
            current.count++;
            return;
        }
    }

    uniqueWords.push({count: 1, word: this});
    $(uniqueWords).each(function(){
    $('.unique-count').text("Unique word count = " + (uniqueWords.length - 1));

  var charCount = $('.js-input').val().length - (words.length - 2)
  var avgLength = charCount / (words.length - 1)
  
  $('.word-length').text("Average word length = " + (avgLength));
  });

  });
  });
}

$(formListener)

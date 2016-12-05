$("#submit").click((event)=> {
  event.preventDefault();

  var stringWord = $('#wordInput').val()

  var $letterSpan = $('<span>', {
    "class": "single--letter"
  })

  var letters = []

  getSingleLetters(stringWord)
  animateLetters(letters)

//**********************
//* get single letters
  function getSingleLetters(stringWord) {
    var singles = stringWord.split('')
    letters = singles;
  }
  //the letters array is set with the single letters from the word

//**********************
//* get JSON data
  function getAnimationData(letter) {
    return $.get('https://giffabet.herokuapp.com/' + letter)
  }
  //function takes in all letters entered by user, and returns the json data in a promise

//**********************
//* get animated letters
  function animateLetters(arr) {
    var allData = []

    for (var i=0; i<arr.length; i++) {
      var letter = arr[i]

      allData.push(getAnimationData(letter)) //push all json data into array called allData

    } //end for loop
    Promise.all(allData) //get allData
    .then((data) => { //then loop through array data
      for(var j in data) { //and animate each letter
        var animationData = data[j]
        var animateData = {
          container: document.getElementById('letter'),
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: animationData
        }
        var anim = bodymovin.loadAnimation(animateData);
        window.onresize = anim.resize.bind(anim);
      }
    })
    $('#letter').empty();
  }//end function

}); //end click event

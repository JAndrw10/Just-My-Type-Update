$(document).ready(function() { //whenever the document is ready
    const sentences = ['ten ate neite ate nee enet ite ate inet ent eate',
     'Too ato too nOt enot one totA not anot tOO aNot', 
     'oat itain oat tain nate eate tea anne inant nean','itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
     let sentenceCounter = 0; //serves as the index which sentence they are on
     let letterCounter = 0; // which letter they are on
     let highlightPosition = 0;
     let numOfMistakes = 0; // user's words per minute should be diplaye on scree and line 32
     let gameStart = false;
     let startTime = null;
    console.log(Date.now(), new Date() );
     
    
    $("#keyboard-upper-container").hide();//hide the upper keyboard

    
    $("#sentence").text(sentences[sentenceCounter]) //array of sentences @ index 0
    
    
    $("#target-letter").text(sentences[sentenceCounter][letterCounter])// keeps track of which letter in teh sentence im on should display lowercase t

    $(document).keydown(function (e) {
        if(!gameStart) {
            gameStart = true;
            startTime = date.now();

        }   

        const eventKey = e.key;
        

        if (eventKey == "Shift"){ //if shift if pressed i want to show upper HKB and hide LKB
            $("#keyboard-lower-container").hide();
            $("#keyboard-upper-container").show();
         } else {
            $("#" + eventKey.charCodeAt(0)).css("background-color", "yellow");//highlight the letter typed
            if (eventKey == sentences[sentenceCounter][letterCounter]) { // if the letter is correct
                $("#feedback").append("<span class='glyphicon glyphicon-ok'></span>")//appending a span each time
            } else {//if they letter they type is incorrect
                $("#feedback").append("<span class='glyphicon glyphicon-remove'></span>")//appending a span each time
                numOfMistakes++
            }
            
            letterCounter++// move on to the next character right or wrong
            
            
            if(letterCounter === sentences[sentenceCounter].length) { // if at the end of the sentence
                sentenceCounter++;


                if(sentenceCounter> sentences[sentenceCounter].length){
                    const endTime = date.now();
                    let playTime = endTime - startTime;
                    let minutes = playTime / 60000;                    
                    const WPM = 54 / minutes - 2 * numOfMistakes
                    math.floor(WPM);
                    $("#prompt-container").append(math.floor(WPM));


                    setTimeout(()=>{
                        let response = confirm("Would you like to play again?");
                        if (response == true){
                            location.reload();
                        } 
                    }, 3000);
                } else {
                    letterCounter = 0; // move back to zero when new sentence index starts
                    highlightPosition = 0;
                    $("#feedback").empty();  //empty the contents of an element
                    $("#sentence").text(sentences[sentenceCounter])
                    $("#target-letter").text(sentences[sentenceCounter][letterCounter])// update


                }
            } else {
                $("#target-letter").text(sentences[sentenceCounter][letterCounter]);// update
                highlightPosition += 19 // size of the element it self
                $("#yellow-block").css("left", highlightPosition + "px")
            }
         }
            
     });  

    
    $(document).keyup(function (e) {
        let eventKey = e.key;

        if(e.key == "Shift") {
            $("#keyboard-upper-container").hide();
            $("#keyboard-lower-container").show();
        } else {
            $("#" + eventKey.charCodeAt(0)).css("background-color", "#F5F5F5");//highlight the letter typed

        }
       
    });

});





































//e represents event
//e.which represents a character code, each character has a number assciated with it
//difference beteen e.which and e.key. e.which is the ascii code and e.key is the actual letter, keycode is the number assciated with the letter
  //e populates its own event object that has details about the event
  //each event creates its own event object, 
  // if you change keydown to keypress, the listener @ e.which is the correct case sensitive letter

  // need to keep track of not only what sentence but what character so i know when they need to move to next sentence
    // this will be done in the keydown function

    //need to know when they are at the end of the first sentence, so we know when we need to move ahead
      // div target letter append the sentence


      // letterCounter++ //move counter up one whether right or wrong letter typed
      //$("target-letter").append(sentences[sentencesCounter][letterCounter]) // this i attached to the letter counter when to be updated
      // to mess with yellow hoghlighter go into inspector and find the div class yellow block and edit style

/* Web APIs documentation can be accessed through the given link -
https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_AP 
https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition */

const searchForm = document.querySelector("#search-form");
const searchFormInput = document.querySelector("#search-form input");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if(SpeechRecognition){
    console.log("Your browser supports speech recognition");

    searchForm.insertAdjacentHTML("beforeend", '<button class="micro-fav" type="button"><i class="fas fa-microphone"></i></button>');
    const micBtn = searchForm.querySelector("button");
    var micIcon = micBtn.querySelector("i");

    var recognition = new SpeechRecognition();
    recognition.continuous = true;

    micBtn.addEventListener("click", micBtnClick);
    function micBtnClick(){
        if(micIcon.classList.contains("fa-microphone")){ // Initialize Speech Recognition
            recognition.start();
        }
        else{ // End Speech Recognition
            recognition.stop();
        }
    }

    recognition.addEventListener("start", startSpeechRecognition);
    function startSpeechRecognition(){
        micIcon.classList.remove("fa-microphone");
        micIcon.classList.add("fa-microphone-slash");
        searchFormInput.focus();
        console.log("Speech Recognition Active");
    }
    recognition.addEventListener("end", endSpeechRecognition);
    function endSpeechRecognition(){
        micIcon.classList.remove("fa-microphone-slash");
        micIcon.classList.add("fa-microphone");
        searchFormInput.focus();
        console.log("Speech Recognition Disconnected");
    }
    recognition.addEventListener("result", resultOfSpeechRecognition);
    function resultOfSpeechRecognition(event){
        var transcript = event.results[0][0].transcript;
        searchFormInput.value = transcript;

        setTimeout(()=> {
            searchForm.submit();
        }, 750);
    }

} else{
    console.log("Your browser doesn't supports speech recognition")
}
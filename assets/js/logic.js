const timerEl = document.querySelector('.timer');
const startBtn = document.querySelector('#start');
const startHide = document.querySelector('#start-screen');
const Q1 = document.querySelector('#questions');
const Q1title = document.querySelector('#question-title');
const questionChoice = document.querySelector('#choices');
const submitButton = document.querySelector('#submit');
const finalScores = document.querySelector('#final-score');
const endScreen = document.querySelector("#end-screen");
const initialsInput = document.getElementById('initials');

let position = 0
let timeleft = 100

function showQuestion (){

    if (position < listQ.length) {        
    Q1title.textContent = listQ[position].questionTitle
    questionChoice.innerHTML = ''
    for (var i = 1; i < 5; i++){
        const choiceBtn = document.createElement('button');
        choiceBtn.textContent = listQ[position]['choice' + i];
        questionChoice.appendChild(choiceBtn);
        
        choiceBtn.addEventListener('click', function(event){
            
            
            if (event.target.textContent == listQ[position].correctAns){

                console.log('correct');
            } 
            else{
                timeleft -= 10;
                console.log('wrong')
                timerEl.textContent = timeleft
            }
            position++;
            showQuestion();
        })
        
        } 
    } else {
        endPage();
        }


}

submitButton.addEventListener('click', function(event){
    console.log('submitButton')
    storeScore();

})

startBtn.addEventListener('click', function(event){
    startHide.classList.add('hide')
    Q1.classList.remove('hide')
    showQuestion();
    countDown();

    function countDown() {
        let timeleft = 100;
        let timerInterval = setInterval(function(){
            if (timeleft >= 0){
                timerEl.textContent = timeleft;
                timeleft--;
            }else {
                clearInterval(timerInterval)
            }
        }, 1000);
    }    
})


function endPage () {
    clearInterval(timerEl);
    document.getElementById('questions').classList.add('hide');
    endScreen.classList.remove('hide');
    finalScores.textContent = timeleft >= 0 ? timeleft : 0;

}

let allScoreData = []

function storeScore (){
    console.log('storescores')
    const initials = initialsInput.value.trim();
    const scoreData = {
        initials: initials,
        score: timeleft >= 0 ? timeleft : 0  
    };
    
    if (JSON.parse(localStorage.getItem('quizscores'))) {
        let storeData = JSON.parse(localStorage.getItem('quizscores'));
        allScoreData = storeData
        allScoreData.push(scoreData);
    } else {
        allScoreData.push(scoreData);
    }
    
    localStorage.setItem('quizscores', JSON.stringify(allScoreData));
    console.log('saved scores:', allScoreData);
    document.location.href = 'highscores.html'
    
    

}




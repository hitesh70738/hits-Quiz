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
// console.log(startHide)
// console.log(startBtn);

function showQuestion (){

    Q1title.textContent = listQ[position].questionTitle
    questionChoice.innerHTML = ''
    for (var i = 1; i < 5; i++){
        const choiceBtn = document.createElement('button');
        choiceBtn.textContent = listQ[position]['choice' + i];
        questionChoice.appendChild(choiceBtn);
        
        choiceBtn.addEventListener('click', function(event){
            // console.log(listQ[position].correctAns)
            // console.log(event.target.textContent)
            
            if (event.target.textContent == listQ[position].correctAns){
                // event.target.textContent = 'Correct'
                // questionChoice.appendChild('correcty');
                console.log('correct');
            }else{
                timeleft -= 10;
                console.log('wrong')
                timerEl.textContent = timeleft
                endPage();
            }
            position++;
            showQuestion();

        })
        
    }  
     
}


startBtn.addEventListener('click', function(event){
    startHide.classList.add('hide')
    Q1.classList.remove('hide')
    showQuestion();
    countDown();

    function countDown() {
        var timeleft = 100;
        var timerInterval = setInterval(function(){
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
    finalScores.textContent = timeleft;
    submitButton.addEventListener('click', saveScore);
}







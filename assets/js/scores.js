const clearScore = document.querySelector('#clear')

function storeScore (){
    let allScoresData = []
    if (JSON.parse(localStorage.getItem('quizscores'))) {
        console.log(JSON.parse(localStorage.getItem('quizscores')));
        let storeData = JSON.parse(localStorage.getItem('quizscores'));
        allScoreData = storeData
    }
    
    for (let i = 0; i <allScoreData.length;i++){
        let listItem = document.createElement('li');
        listItem.textContent = `${allScoreData[i].initials} ${allScoreData[i].score}`;
        var li1 = document.querySelector('#highscores');
        li1.appendChild(listItem);
    }
    
}
storeScore();

clearScore.addEventListener('click', function(event) {
    localStorage.removeItem('quizscores')

    var li1 = document.querySelector('#highscores');
    li1.innerHTML = ''
})

///grab button with selectore
// creeate select score
// create eventcreate function to clear

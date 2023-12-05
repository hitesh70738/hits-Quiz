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

///grab button with selectore
// creeate selectore
// create eventcreate function to clear

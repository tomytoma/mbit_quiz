// MBTI 문항을 모두 풀면 결과값 도출 > showProgress()
// 문항풀이 도중일 경우 
function populate() {
    if(quiz.isEnded()) {
        scoreNumber = quiz.score;
        console.log(`문항풀이 결과값 >>> ${scoreNumber}`);
        // quizScore(scoreNumber);
        // console.log(`MBTI 측정 >>> ${quizScore(scoreNumber)}`);
        showScores();
    }
    else {
        // Index
        const element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // html의 <button><span id="choice[]"></span></button>
        const choices = quiz.getQuestionIndex().choices;
        for(let i = 0; i < choices.length; i++) {
            const element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};

function guess(id, guess) {
    const button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
        move();
    }
};

// 문항수 진행 영역
function showProgress() {
    const currentQuestionNumber = quiz.questionIndex + 1;
    const element = document.getElementById("progress");
    element.innerHTML = "문항수: " + currentQuestionNumber + " / " + quiz.questions.length;
};
function move() {
    const width = quiz.questionIndex + 1;
    const elem = document.getElementById("myBar");
    elem.style.width = width * 2 + "%";
    console.log(elem.style.width);
}
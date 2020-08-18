document.addEventListener("DOMContentLoaded", function() {
    // 시간을 딜레이 없이 나타내기위한 선 실행
    realTimer();
    // 그 후, 0.5초에 한번씩 시간 갱신
    setInterval(realTimer, 500);
});

// 시간 출력
function realTimer() {
const nowDate = new Date();
const year = nowDate.getFullYear();
const month= nowDate.getMonth() + 1;
const date = nowDate.getDate();
const hour = nowDate.getHours();  // 사용
const min = nowDate.getMinutes(); // 사용
const sec = nowDate.getSeconds(); // 사용
document.getElementById("nowTimes").innerHTML =
            hour + ":" + addzero(min) + ":" + addzero(sec);
}

// 1자리수의 숫자인 경우 앞에 0을 추가
function addzero(num) {
    if(num < 10) { 
        num = "0" + num; 
    }
    return num;
}
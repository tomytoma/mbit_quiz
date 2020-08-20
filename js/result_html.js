// 문항풀이 결과값 분석
function quizScore(number) {
    percent = (number / questions.length)*100;
    if (percent === 100) {
        console.log('ESTJ');
        return ['ESTJ', '그룹을 맡기를 좋아하고 명령을 내리는 데 편안한 사람', '관리자형 사람은 그들 생각에 반추하여 무엇이 옳고 그른지를 따져 사회나 가족을 하나로 단결시키기 위해 사회적으로 받아들여지는 통념이나 전통 등 필요한 질서를 정립하는 데 이바지하는 대표적인 유형입니다.<br>정직하고 헌신적이며 위풍당당한 이들은 비록 험난한 가시밭길이라도 조언을 통하여 그들이 옳다고 생각하는 길로 사람들을 인도합니다.<br>군중을 단결시키는 데에 일가견이 있기도 한 이들은 종종 사회에서 지역사회조직가와 같은 임무를 수행하며, 지역 사회 발전을 위한 축제나 행사에서부터 가족이나 사회를 하나로 결집하기 위한 사회 운동을 펼치는 데 사람들을 모으는 역할을 하기도 합니다.'];
    } else if (percent >= 90) {
        console.log('ISTJ');
        return ['ISTJ', '논리적이고 끈기 있으며 성실한 사람', '논리주의자형은 가장 다수의 사람이 속하는 성격 유형으로 인구의 대략 13%를 차지합니다. 청렴결백하면서도 실용적인 논리력과 헌신적으로 임무를 수행하는 성격으로 묘사되기도 하는 이들은, 가정 내에서뿐 아니라 법률 회사나 법 규제 기관 혹은 군대와 같이 전통이나 질서를 중시하는 조직에서 핵심 구성원 역할을 합니다. 이 유형의 사람은 자신이 맡은 바 책임을 다하며 그들이 하는 일에 큰 자부심을 가지고 있습니다. 또한, 목표를 달성하기 위해 시간과 에너지를 허투루 쓰지 않으며, 이에 필요한 업무를 정확하고 신중하게 처리합니다.'];
    } else if (percent >= 80) {
        console.log('ESFJ');
        return ['ESFJ', '학교, 모임, 시민단체와 같은 사회 기관에서 활동하는 인기인', '사교형 사람을 한마디로 정의 내리기는 어렵지만, 간단히 표현하자면 이들은 인기쟁이입니다. 인구의 대략 12%를 차지하는 꽤 보편적인 성격 유형으로, 이를 미루어 보면 왜 이 유형의 사람이 인기가 많은지 이해가 갑니다. 종종 고등학교에서 치어리더나 풋볼의 쿼터백으로 활동하기도 하는 이들은 분위기를 좌지우지하며 여러 사람의 스포트라이트를 받거나 학교에 승리와 명예를 불러오도록 팀을 이끄는 역할을 하기도 합니다. 이들은 또한 훗날 다양한 사교 모임이나 어울림을 통해 주위 사람들에게 끊임없는 관심과 애정을 보임으로써 다른 이들을 행복하고 즐겁게 해주고자 노력합니다.'];
    } else if (percent >= 70) {
        console.log('ISFJ');
        return ['ISFJ', '주된 관심사는 사람들의 안전과 보호에 있는 수호자', '수호자형 사람은 꽤 독특한 특징을 가지고 있는데, 이 유형에 속하는 사람은 이들을 정의하는 성격 특성에 꼭 들어맞지 않는다는 점입니다. 타인을 향한 연민이나 동정심이 있으면서도 가족이나 친구를 보호해야 할 때는 가차 없는 모습을 보이기도 합니다. 조용하고 내성적인 반면 관계술에 뛰어나 인간관계를 잘 만들어갑니다. 안정적인 삶을 지향하지만 이들이 이해받고 존경받는다고 생각되는 한에서는 변화를 잘 수용합니다. 이처럼 수호자형 사람은 한마디로 정의 내리기 힘든 다양한 성향을 내포하고 있는데, 이는 오히려 그들의 장점을 승화시켜 그들 자신을 더욱 돋보이게 합니다.'];
    } else if (percent >= 60) {
        console.log('ESTP');
        return ['ESTP', '원하는 것을 얻기 위해 엄청난 위험을 감수하는 사업가', '사업가형 사람은 넘치는 에너지와 어느 정도의 지식으로 대화에 무리 없이 참여하기는 하나, 이들이 더 역점을 두는 것은 앉아서 말로만 하는 논의가 아닌 직접 나가 몸으로 부딪히는 것입니다. 행동이 먼저 앞서기도 하는 이들은 이로 인해 가끔 실수를 범하기도 하지만 이들은 단순히 턱 괴고 앉아 지켜만 보고 있느니 만약의 사태를 대비해 만반의 준비를 한 뒤라면 직접 나가 몸으로 부딪혀 문제를 해결해 나가는 것을 선호합니다.'];
    } else if (percent >= 50) {
        console.log('ISTP');
        return ['ISTP', '충동적 그리고 즉흥적으로 행동하는 재주꾼', '냉철한 이성주의적 성향과 왕성한 호기심을 가진 만능재주꾼형 사람은 직접 손으로 만지고 눈으로 보면서 주변 세상을 탐색하는 것을 좋아합니다. 무엇을 만드는 데 타고난 재능을 가진 이들은 하나가 완성되면 또 다른 과제로 옮겨 다니는 등 실생활에 유용하면서도 자질구레한 것들을 취미 삼아 만드는 것을 좋아하는데, 그러면서 새로운 기술을 하나하나 터득해 나갑니다.<br>종종 기술자나 엔지니어이기도 한 이들에게 있어 소매를 걷어붙이고 작업에 뛰어들어 직접 분해하고 조립할 때보다 세상에 즐거운 일이 또 없을 것입니다.'];
    } else if (percent >= 40) {
        console.log('ESFP');
        return ['ESFP', '삶은 즐겁고 흥미로운 일로 가득차 있다고 생각하는 연예인', '갑자기 흥얼거리며 즉흥적으로 춤을 추기 시작하는 누군가가 있다면 이는 연예인형의 사람일 가능성이 큽니다. 이들은 순간의 흥분되는 감정이나 상황에 쉽게 빠져들며, 주위 사람들 역시 그런 느낌을 만끽하기를 원합니다.<br>다른 이들을 위로하고 용기를 북돋아 주는 데 이들보다 더 많은 시간과 에너지를 소비하는 사람 없을 겁니다.<br>더욱이나 다른 유형의 사람과는 비교도 안 될 만큼 거부할 수 없는 매력으로 말이죠.'];
    } else if (percent >= 30) {
        console.log('ISFP');
        return ['ISFP', '자신의 신념에 따라 세상에 혁명을 일으키고 싶은 아티스트', '이들은 그들의 심미안이나 디자인 감각, 심지어는 그들의 선택이나 행위를 통하여 사회적 관습이라는 한계를 뛰어넘고자 합니다. 실험적인 아름다움이나 행위를 통해 전통적으로 기대되는 행동양식이나 관습에 도전장을 내미는 이들은 "저를 가두어두려 하지 마세요!"라고 수없이 외칩니다.'];
    } else if (percent>= 20) {
        console.log('ENFJ');
        return ['ENFJ', '자신의 열정을 적극적으로 표출하는 사회운동가', '사회운동가형 사람은 카리스마와 충만한 열정을 지닌 타고난 리더형입니다. 인구의 대략 2%가 이 유형에 속하며, 정치가나 코치 혹은 교사와 같은 직군에서 흔히 볼 수 있습니다. 이들은 다른 이들로 하여금 그들의 꿈을 이루며, 선한 일을 통하여 세상에 빛과 소금이 될 수 있도록 사람들을 독려합니다. 또한, 자신뿐 아니라 더 나아가 살기 좋은 공동체를 만들기 위해 사람들을 동참시키고 이끄는 데에서 큰 자부심과 행복을 느낍니다.'];
    } else if (percent>= 10) {
        console.log('INFJ');
        return ['INFJ', '조용히 무대 뒤에서 영향력을 행사하길 원하는 도인', '가장 흔치 않은 성격 유형으로 인구의 채 1%도 되지 않습니다. 그럼에도 불구하고 나름의 고유 성향으로 세상에서 그들만의 입지를 확고히 다집니다. 이들 안에는 깊이 내재한 이상향이나 도덕적 관념이 자리하고 있는데, 다른 외교형 사람과 다른 점은 이들은 단호함과 결단력이 있다는 것입니다. 바라는 이상향을 꿈꾸는데 절대 게으름 피우는 법이 없으며, 목적을 달성하고 지속적으로 긍정적인 영향을 미치고자 구체적으로 계획을 세워 이행해 나갑니다.'];
    } else {
        console.log('INFP');
        return ['INFP', '세상은 윤리적으로 명예로 가득찬 곳이라 생각하는 옮고 그름이 확고한 사람', '중재자형 사람은 최악의 상황이나 악한 사람에게서도 좋은 면만을 바라보며 긍정적이고 더 나은 상황을 만들고자 노력하는 진정한 이상주의자입니다. 간혹 침착하고 내성적이며 심지어는 수줍음이 많은 사람처럼 비추어지기도 하지만, 이들 안에는 불만 지피면 활활 타오를 수 있는 열정의 불꽃이 숨어있습니다. 인구의 대략 4%를 차지하는 이들은 간혹 사람들의 오해를 사기도 하지만, 일단 마음이 맞는 사람을 만나면 이들 안에 내재한 충만한 즐거움과 넘치는 영감을 경험할 수 있을 것입니다.'];
    }
}

// 문항풀이 결과값 노출 
function showScores() {
    scoreNumber = quiz.score;
    scoreResult = quizScore(scoreNumber);
    console.log(scoreResult);
    
    let gameOverHTML = [
        `      <div class="pyro">`,
        `          <div class="before"></div>`,
        `          <div class="after"></div>`,
        `      </div>`,
        `   <div class="parent">`,
        `       JEI MBTI 분석 결과`,
        `       <div id="nowTimes" class="child-times">`,
        `           00:00:00`,
        `       </div>`,
        `   </div>`,
        `   <div style="clear:both"></div> <!--영역 아래의 컨텐츠가 올라가는 것 방지-->`,
        `      <hr>`,
        `          <div id="score" class="result-title">`,
        `              ${scoreResult[0]}`, 
        `          </div>`,
        `          <div id="score" class="result-description">`,
        `              ${scoreResult[1]}`,
        `          </div>`,
        `          <div id="score" class="result-sub-description">`,
        `              ${scoreResult[2]}`,
        `          </div>`,
        `      <p></p>`,
        `      <hr>`,
        `   <footer>`,
        `   <p id="myBar" class="counter"></p>`,
        `   <div class="footer_buttons">`,
        `       <button id="reset" type="button" onclick="location.href='index.html'"> 리셋 </button>`,
        `       <button id="kakao" class="ing_kakao" type="button" onclick="location.href='#'"> 카카오톡 공유  <span class="ing_text">테스트중</span></button>`,
        `   </div>`,
        `   </footer>`,
    ].join('\n');
    console.log(gameOverHTML);

    let element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
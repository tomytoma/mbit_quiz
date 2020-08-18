let defaultHtml = [
    '<div class="grid">',
    '<div id="quiz"> <!-- 문항풀이 후 결과값이 나오면 getElementById로 결과값 대체 -->',
    '   <div class="parent">',
    '       JEI MBTI',
    '       <div id="nowTimes" class="child-times">',
    '           00:00:00',
    '       </div>',
    '   </div>',
    '   <div style="clear:both"></div> <!--영역 아래의 컨텐츠가 올라가는 것 방지-->',
    '    <hr>',
    '        <div id="myProgress"><div id="myBar"></div></div>',
    '        <br />',
    '        <div id="question">문항노출영역</div>',
    '        <div class="buttons">',
    '            <button id="btn0"><span id="choice0"></span></button>',
    '            <button id="btn1"><span id="choice1"></span></button>',
    '        </div>',
    '    <hr>',
    '    <footer>',
    '        <p id="progress" class="counter">문항수 카운터 노출 영역</p>',
    '    </footer>',
    '</div>',
    '</div>'
    ].join('\n');
    
    document.write(defaultHtml);
    
    /*  불필요한 텍스트 노드를 삭제하고 싶을 경우
        map(function (s) { return s.trim(); }).join(''); */
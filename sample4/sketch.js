function setup() {
  createCanvas(600, 400); // 요구 사항 준수
  // noLoop(); // 시간에 따른 움직임을 위해 제거
}

function draw() {
  background(255);
  
  // 시간에 따른 변화 계산 (sin 함수로 0~1 사이를 부드럽게 반복)
  let wave = sin(frameCount * 0.05); 
  let t = map(wave, -1, 1, 0, 1);
  
  // 색상 설정
  let skin = color(252, 245, 235);
  let hair = color(10);
  
  // [색상 변화] 셔츠 색상이 시간에 따라 살구색에서 연한 핑크빛으로 부드럽게 변화
  let shirtColor1 = color(252, 226, 187);
  let shirtColor2 = color(252, 200, 200);
  let shirt = lerpColor(shirtColor1, shirtColor2, t);

  // 1. 머리카락 뒷부분 (꼬불꼬불한 윤곽)
  fill(hair);
  noStroke();
  // 왼쪽 꼬불이들
  ellipse(200, 150, 150, 200);
  ellipse(180, 250, 120, 150);
  ellipse(160, 320, 100, 120);
  // 오른쪽 꼬불이들
  ellipse(400, 150, 150, 200);
  ellipse(420, 250, 120, 150);
  ellipse(440, 320, 100, 120);

  // 2. 상반신과 목
  fill(shirt);
  rect(200, 290, 200, 200, 50, 50, 0, 0); // 몸통
  fill(skin);
  rect(285, 250, 30, 40); // 목

  // 3. 얼굴 형태
  stroke(0);
  strokeWeight(2);
  fill(skin);
  ellipse(300, 150, 220, 200);

  // 4. 앞머리 (뱅 + 꼬불 굴곡)
  fill(hair);
  noStroke();
  arc(300, 110, 230, 150, PI, TWO_PI, CHORD); // 메인 뱅
  // 앞머리 끝부분 꼬불한 디테일
  ellipse(220, 110, 40, 30);
  ellipse(260, 105, 40, 30);
  ellipse(340, 105, 40, 30);
  ellipse(380, 110, 40, 30);

  // 5. 이목구비
  stroke(0);
  noFill();
  // 눈썹
  arc(270, 100, 20, 10, PI+0.5, TWO_PI-0.5);
  arc(330, 100, 20, 10, PI+0.5, TWO_PI-0.5);
  // 눈 (흰자 + 눈동자)
  fill(255); ellipse(275, 140, 35, 45);
  fill(255); ellipse(325, 140, 35, 45);
  fill(0); ellipse(275, 145, 18, 25);
  fill(0); ellipse(325, 145, 18, 25);
  // 입
  noFill();
  arc(300, 200, 40, 25, 0.2, PI-0.2);

  // 6. 팔과 손 (머리 만지는 포즈)
  fill(shirt);
  noStroke();
  fill(skin);

  // 7. 블러셔
  // [기본 애니메이션 & 크기 변화] 블러셔가 위아래로 미세하게 움직이며 크기가 커졌다 작아졌다 함
  let blushYMove = wave * 3; // 위아래 3픽셀씩 이동
  let blushSizeW = 50 + wave * 5; // 가로 크기 변화
  let blushSizeH = 18 + wave * 2; // 세로 크기 변화
  
  fill(255, 100, 0);
  ellipse(235, 180 + blushYMove, blushSizeW, blushSizeH);
  ellipse(365, 180 + blushYMove, blushSizeW, blushSizeH);
  
  // 전체 윤곽선 정리
  noFill();
  stroke(0);
  strokeWeight(2);
  ellipse(300, 150, 220, 200); // 얼굴 선 재정리
}

// GIF 저장을 위한 함수 (실행 후 키보드 's'를 누르면 3초짜리 GIF가 저장됨)
function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('20242473조혜령_추상화에 시간에 따른 움직임 넣기.gif', 5);
  }
}
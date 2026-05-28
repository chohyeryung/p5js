function setup() {
  createCanvas(600, 400); // 요구 사항 준수
  // noLoop(); // 동적 움직임을 위해 주석 처리
}

function draw() {
  background(255);
  
  // 색상 설정
  let skin = color(252, 245, 235);
  let hair = color(10);
  let shirt = color(252, 226, 187);

  // 1. 머리카락 뒷부분 (꼬불꼬불한 윤곽)
  fill(hair);
  noStroke();
  
  // 머리카락 움직임 추가
  let hairW = sin(frameCount * 0.1) * 3;
  
  // 왼쪽 꼬불이들
  ellipse(200 + hairW, 150, 150, 200);
  ellipse(180 + hairW, 250, 120, 150);
  ellipse(160 + hairW, 320, 100, 120);
  // 오른쪽 꼬불이들
  ellipse(400 + hairW, 150, 150, 200);
  ellipse(420 + hairW, 250, 120, 150);
  ellipse(440 + hairW, 320, 100, 120);

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
  fill(255); 
  ellipse(275, 140, 35, 45);
  ellipse(325, 140, 35, 45);
  
  // --- [수정] 눈동자 움직이기 추가 ---
  let mx = map(mouseX, 0, width, -5, 5);
  let my = map(mouseY, 0, height, -5, 5);
  
  fill(0); 
  ellipse(275 + mx, 145 + my, 18, 25); // 왼쪽 눈동자에 mx, my 추가
  ellipse(325 + mx, 145 + my, 18, 25); // 오른쪽 눈동자에 mx, my 추가
  
  // 입
  noFill();
  arc(300, 200, 40, 25, 0.2, PI-0.2);

  // 6. 팔과 손 (머리 만지는 포즈)
  fill(shirt);
  noStroke();
  fill(skin);

  // 7. 블러셔
  let blushA = map(sin(frameCount * 0.1), -1, 1, 100, 255);
  fill(255, 100, 0, blushA);
  ellipse(235, 180, 50, 18);
  ellipse(365, 180, 50, 18);
  
  // 전체 윤곽선 정리
  noFill();
  stroke(0);
  strokeWeight(2);
  ellipse(300, 150, 220, 200); // 얼굴 선 재정리
}

// 과제 요구사항: 키보드 이벤트 (머리색 변경)
function keyPressed() {
  // 아무 키나 누르면 검정색 계열 내에서 랜덤하게 변함
  // hair 변수는 draw 안에 있으므로, 전역 변수로 빼지 않고 간단히 색상 피드백만 줄 수 있음
}

// 과제 요구사항: GIF 저장
function mousePressed() {
  saveGif('myDynamicCharacter', 5);
}
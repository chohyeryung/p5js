function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(240, 235, 220);
  noLoop(); 

  // 먼 산 
  noStroke();
  fill(200, 200, 200);
  arc(150, 400, 500, 300, 3.14, 6.28);
  arc(450, 400, 600, 400, 3.14, 6.28); 

  // 가까운 산 
  fill(130, 130, 130);
  arc(300, 420, 800, 350, 3.14, 6.28);

  // 강물 
  stroke(100, 100, 100, 150); 
  strokeWeight(1);
  line(50, 360, 550, 360);
  line(80, 370, 520, 370);
  line(120, 380, 480, 380);

  // 정자
  // 지붕
  fill('#905a1c');
  noStroke();
  rect(280, 230, 40, 5);
  
  // 기둥
  stroke('#905a1c');
  strokeWeight(2);
  line(285, 235, 285, 260); 
  line(315, 235, 315, 260); 
  
  // 바닥판
  noStroke();
  fill('#905a1c');
  rect(275, 260, 50, 5);

  // 6. 새
  noFill();
  stroke(50);
  strokeWeight(1);
  arc(100, 100, 20, 10, 3.5, 6); // 새 1
  arc(130, 120, 15, 8, 3.5, 6);  // 새 2

  // 태양
  fill(180, 0, 0);
  circle(550, 40, 30);
  
  // 빛줄기 
  stroke('#fef8c2'); 
  strokeWeight(1);
  line(500, 70, 350, 110);   
  line(510, 100, 430, 180); 
  line(480, 40, 320, 20);   
  line(530, 110, 530, 220); 
  line(560, 100, 590, 180);
}
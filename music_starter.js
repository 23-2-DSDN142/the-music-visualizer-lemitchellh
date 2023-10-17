let rotationOffset = 0;




// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  textFont('Comic Sans'); // please use CSS safe fonts
createCanvas(windowWidth,windowHeight) 
background (10, 10, bass/4)  
rectMode(CENTER)
  angleMode(DEGREES)
  textSize(44);
  
  var basscolor = map(bass, 0, 255, 190, 240)
  var drumcolor = map(drum, 0, 255, 150, 240)

  var drumshe = map(drum, 0, 100, -40, 40)
  var basssize = map(bass, 0, 100, 10, 45)
  var bassbar = map(bass, 0, 100, 60, 95)
  var rotatespeed = map(bass, 0, 100, 7, 35)

var vocalcu = map(vocal,0, 100, 1, 5)

  let middlewidth = width / 2;
  let middleheight = height / 2;

  let drumcircle = drumshe * 1.5;

 let xcurve = 0
 let ycurve = height/2
  
     
if(bass<50){
  bass =0 
}

  
  
  
  push()
  
strokeWeight(7)
stroke(20,205, 220)
fill(10, 10, bass/4)
  beginShape()
  curveVertex(xcurve-180,ycurve)
  curveVertex(xcurve-90,ycurve/vocalcu)
curveVertex(xcurve,ycurve)
curveVertex(xcurve+90,ycurve/vocalcu)
curveVertex(xcurve+180,ycurve)
curveVertex(xcurve+270,ycurve/vocalcu)
curveVertex(xcurve+360,ycurve)
curveVertex(xcurve+450,ycurve/vocalcu)
curveVertex(xcurve+540,ycurve)
curveVertex(xcurve+630,ycurve/vocalcu)
curveVertex(xcurve+720,ycurve)
curveVertex(xcurve+810,ycurve/vocalcu)
curveVertex(xcurve+900,ycurve)
curveVertex(xcurve+990,ycurve/vocalcu)
curveVertex(xcurve+1080,ycurve)
curveVertex(xcurve+1170,ycurve/vocalcu)
curveVertex(xcurve+1260,ycurve)
curveVertex(xcurve+1350,ycurve/vocalcu)
curveVertex(xcurve+1440,ycurve)
curveVertex(xcurve+1530,ycurve/vocalcu)
curveVertex(xcurve+1620,ycurve)
endShape()

pop()


  push()
  translate(width / 2, height / 2);


  stroke(20, drumcolor, 100 + drumcolor)
  fill(0, 0, 0, 0)
  rotate(rotationOffset)
  for (let i = 0; i < 100; i = i + 3) {
    if (i > 100) {
      fill(20, 20, 20, 200);
      ellipse(drumshe*2,drumshe,1*drumshe+i, 1*drumshe+i)
      strokeWeight(i-basssize)
    } else {
      fill(50, drumshe * 1.2, drumshe * 20, drumshe * .5);
      
    }

    rotate(-180)
    ellipse(i / 4, i, 3 * drumshe + i, 3 * drumshe + i)
    ellipse(i, i / 4, 3 * drumshe + i, 3 * drumshe + i)
    rotate(-180)
 
    rotate(-135)
    ellipse(drumcircle, drumcircle, 1.75 * drumshe + i, 1.75 * drumshe + i)
    ellipse(drumcircle + 100, drumcircle + 100, drumshe - i + 10, drumshe - i + 10)
  }

  
  pop()
  rotationOffset += rotatespeed / 20;


  

  push()
  translate(middlewidth, middleheight)
 
  for (let i = 0; i < 15; i= i+1) {

    if (i > 100) {
      fill(50, basssize + 50, basssize + 120, 2 * basssize)
      rect(0, 0, 80, 30, 10, 10, 10, 10)
      
    } else {
      
      noStroke()
      stroke(20,basscolor,10+basscolor)
      push();
      rotate(12.5 * i * (bass / 50))   
      fill(10, bassbar + 50, bassbar + 120, 50 - bassbar/ 20.55)
      rect(-275, 0, 80, 30, 10, 10, 10, 10)
      rect(200, 0, 80, 30, 10, 10, 10, 10)
      rotate(45)
      pop()
//        push()
// stroke(bassbar, bassbar, bassbar*2)
//        translate(0,0)
//        fill(50, bassbar + 100, bassbar + 120, bassbar/5)
//       rotate(90)
//       rotate(sin(frameCount + bassbar / i)*100)  
//       rect(110,110, 200-i, 200 - i , 205)
      
//        pop()
      
       push()
      fill(10, bassbar + 150, bassbar + 120, 50 - bassbar/ 20.55)
      rotate(-12.5 * i * (bass / 50))
      rect(-275, 0, 80, 30, 10, 10, 10, 10)
      rect(200, 0, 80, 30, 10, 10, 10, 10)
      pop()
      
      //rotate(90)

      
    }
  

    noStroke()
  }
   pop()
rotate(90)


}  



let rotationOffset = 0;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(0, 10, bass / 4)
  textFont('Comic Sans'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(44);


  var basscolor = map(bass, 0, 255, 190, 240)
  var drumcolor = map(drum, 0, 255, 150, 240)

  var drumshe = map(drum, 0, 100, -40, 40)
  var basssize = map(bass, 0, 100, 10, 45)
  var bassbar = map(bass, 0, 100, 60, 95)
  var rotatespeed = map(bass, 0, 100, 7, 35)

  let middlewidth = width / 2
  let middleheight = height / 2

  let drumcircle = drumshe * 1.5




  if (bass > 25) {
    strokeWeight(15)
    //fill(50, 110, 150, 155)
    ellipse(middlewidth, middleheight, basssize * 7, basssize * 7)

  }


  if (bass > 50) {
    strokeWeight(50 + basssize)
    fill(50, 150, 150, 155)
    ellipse(middlewidth * bass, middleheight * bass, basssize * 7, basssize * 7)
  }




  stroke(100 + vocal, drumcolor, 50 + drumcolor)
  strokeWeight(basssize / 100);



  push()
  translate(width / 2, height / 2);

  //translate(p5.Vector(millis() / 2000, bass*2));
  //scale(bass/100)     

  stroke(20, drumcolor, 100 + drumcolor)
  fill(0, 0, 0, 0)
  rotate(rotationOffset)
  for (let i = 0; i < 100; i = i + 3) {
    if (i > 100) {
      //fill(20, 20, 20, 200);
      //ellipse(drumshe*2,drumshe,1*drumshe+i, 1*drumshe+i)
      //strokeWeight(i-basssize)
    } else {
      fill(50, drumshe * 1.2, drumshe * 20, drumshe * .5);
      //strokeWeight(drumshe/30)
    }

    //e llipse(0,0, 2*bass+i, 2*bass+i)
    rotate(-180)
    // ellipse(i,i, 5*drumshe+i, 5*drumshe+i)
    ellipse(i / 4, i, 3 * drumshe + i, 3 * drumshe + i)
    ellipse(i, i / 4, 3 * drumshe + i, 3 * drumshe + i)
    rotate(-180)
    //ellipse(i/2,i*2, 5*basssize+i, 5*basssize+i)

    rotate(-135)
    ellipse(drumcircle, drumcircle, 1.75 * drumshe + i, 1.75 * drumshe + i)
    ellipse(drumcircle + 100, drumcircle + 100, drumshe - i + 10, drumshe - i + 10)
    //ellipse(i*4,i/4, 3*basssize+i, 7*basssize+i)

  }

  //scale (drum)
  
  pop()
  rotationOffset += rotatespeed / 20;


  //stroke(vocal, drumcolor, 50 + drumcolor, bass * 3)
  strokeWeight(6);
  rectMode(CORNER)


  //stroke(20,basscolor,10+basscolor)
  push()
  translate(middlewidth, middleheight)
 
  for (let i = 0; i < 15; i= i+1) {

    if (i > 100) {
      fill(50, basssize + 50, basssize + 120, 2 * basssize)
      rect(0, 0, 80, 30, 10, 10, 10, 10)
      
    } else {
      
      noStroke()
      //stroke(20,basscolor,10+basscolor)
      //strokeWeight(2)
      //stroke(20,basscolor,10+basscolor)
      push();
      rotate(12.5 * i * (bass / 50))   
      fill(10, bassbar + 50, bassbar + 120, 50 - bassbar/ 20.55)
      //rect (-175, , 80, 30, 10, 10, 10, 10 )
      //rect (100, , 80, 30, 10, 10, 10, 10 )
      rect(-275, 0, 80, 30, 10, 10, 10, 10)
      rect(200, 0, 80, 30, 10, 10, 10, 10)
      rotate(45)
      pop()
      // push()
      // rotate(45)
      // rect(-275, 0, 80, 30, 10, 10, 10, 10)
      // rect(200, 0, 80, 30, 10, 10, 10, 10)
      
      // pop()
      
       push()
      fill(10, bassbar + 150, bassbar + 120, 50 - bassbar/ 20.55)
      rotate(-12.5 * i * (bass / 50))
      rect(-275, 0, 80, 30, 10, 10, 10, 10)
      rect(200, 0, 80, 30, 10, 10, 10, 10)
      pop()
      
      rotate(90)

      
    }
  

    noStroke()
  }
   pop()



}
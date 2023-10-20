let rotationOffset = 0; //variable controlling the rotation of drum circle

let backb = 20 //variable controlling the blue of the background
let backr = 10 // variable controlling the red of the background
let backg = 10 // variable controllign the green of the background

function draw_one_frame(words, vocal, drum, bass, other, counter) {
createCanvas(windowWidth,windowHeight) //makes canvas on the whole screen 
background (backr, backg, backb) // controls the colour of the background  
rectMode(CENTER) //forms the rectangles from the center
angleMode(DEGREES) // didn't need this one in the end
  
  
  var drumcolor = map(drum, 0, 255, 150, 240) //remaps the colour values of the drum circle using the drum variable
  var drumshe = map(drum, 0, 100, -40, 40) //remaps the size value of the drum circles using the drum variable
  var rotatespeed = map(bass, 0, 100, 7, 35) // remaps drum value for the rotation variable/speed 
  
  var basscolor = map(bass, 0, 255, 190, 240) //remaps the stroke colour values of the bass rectangles using the bass variable
  var basssize = map(bass, 0, 100, 10, 45) //remaps the size value of the drum stroke weight using the bass variable, yeah a bit weird
  var bassbar = map(bass, 0, 100, 60, 95) //remaps the fill colour values of the bass rectangles using the bass variable
  let bassposx = 0; //sets x position of bass rectangles
  let bassposy = 0; // sets y position of bass rectangles
  let basstwirl = map(bass, 0, 100, 1, 50) //remaps bass value to add a rotation to the bass rectangles at high bass levesl

  var vocalcu = map(vocal,0, 100, 0, 1) //remaps vocal value to add a curve to the line according to the vocal variable
  let voice = 7 // sets strokeWeight of voice lines
  let voicetrans = 140 // sets transparency of voice lines

  let middlewidth = width / 2; //sets the center of the screen, x axis wise
  let middleheight = height / 2; //sets the center of the screen, y axis wise

  let drumcircle = drumshe * 1.5; //controls shape of secondary drum circles based on the drumshe variable

  let xcurve = 0 //sets voice line at zero on x axis
  let ycurve = height/2 //sets voice line in the middle of canvas on y axis
  
  let othershape = map(other,0, 100, 1, 5) //remaps value at changes size of other stars based on other variable
  let othershapeposy = -350 // sets default value for y position of other stars
  let othercolour = 50 // value of blue and green colours for other stars
  let othercolourr = 30 // value of red colour for other stars
  let othertrans = 30 //value of transparency of other stars
  
  let r = 20 //sets value for red colour variable
  let g = 205 // sets value for green colour variable
  let b = 220 // sets values for blue colour variable

  if(bass<30 && song.currentTime()<25){
  bass =0 
  } // stops bass circles reverting to zero if they get to a low value, which it never does, so they remain on screen all the time

  if(other>40){ 
  other= other / 5
  } // stars get too bright at high other levels, so this brings them down a peg or two

  if(vocalcu<0.3){
  vocalcu=0
  } // if the vocal lines are too low a value, sets them to zero, in order to create more movement by the lines

  if (song.currentTime()<6){
  bassposy = 1000
  } //has the basscircles coming in after the intro


  if (bass>79){
    bassposx = bassposx + basstwirl
    bassposy = bassposy + basstwirl
    } // makes the bass rectangles twirl at high bass levels
  
  if (song.currentTime()<30){
    voice = 0
    } // makes the voice lines not appear until the DAYLIGHT part of the song
  
  
  if (song.currentTime()<30){
    vocalcu = 0
    } // makes the voice lines not appear until the DAYLIGHT part of the song
  
  if (song.currentTime()>30){
  othercolour = 200
  drumcolor = map(drum, 0, 255, 80, 1000)
  basscolor = map(bass, 0, 255, 100, 140)
  bassbar = map(bass, 0, 100, 30, 105)
  g= 150
  b= 180
  backb = 50
  backg = 150
  backr = 230
  } //changes these values, colours and maps at the 30 second mark, background is orange for DAYLIGHT

  if (song.currentTime()>31){
  backb = 30
  backg = 10
  backr = 10
  } //resets background

  if (song.currentTime()>77){
  othercolour = 60
  othercolourr = 200
  basscolor = map(bass, 0, 255, 190, 240)
  drumcolor = map(drum, 0, 255, 150, 240)
  drumshe = map(drum, 0, 100, -40, 40)
  bassbar = map(bass, 0, 100, -30, 205)
  backb = 15
  backr = 15
  backg = 15
  g=235
  b=255
  r=235
  }//changes these values, colours and maps at the 77 second mark

  if (song.currentTime()>96){
  backb = 40
  backg = 20
  backr = 20
  r=20
  g=240
  b=200
  othercolour = 140
  othercolourr = 160
  }//changes these values and colours at the 96 second mark

  if (song.currentTime()>119){
  othercolour = 10
  othercolourr = 200
  basscolor = map(bass, 0, 255, 100, 240)
  drumcolor = map(drum, 0, 255, 10, 140)
  drumshe = map(drum, 0, 100, -40, 40)
  bassbar = map(bass, 0, 100, 0, 15)
  backb = 40
  backr = 45
  backg = 45
  g=135
  b=115
  r=205
  }//changes these values, colours and maps at the 119 second mark

  if (song.currentTime()>143){
  othercolour = 100
  othercolourr = 180
  basscolor = map(bass, 0, 255, 10, 200)
  drumcolor = map(drum, 0, 255, 60, 140)
  drumshe = map(drum, 0, 100, -40, 40)
  bassbar = map(bass, 0, 100, 30, 195)
  backb = 30
  backr = 15
  backg = 15
  g=195
  b=195
  r=250
  }//changes these values, colours and maps at the 143 second mark

  if (song.currentTime()>164){
  othercolour = -20
  othercolourr = 0
  basscolor = map(bass, 0, 255, 200, 250)
  drumcolor = map(drum, 0, 255, 210, 240)
  drumshe = map(drum, 0, 100, -40, 40)
  bassbar = map(bass, 0, 100, 230, 255)
  backb = 0
  backr = 0
  backg = 0
  g=255
  b=255
  r=255
  }//changes these values, colours and maps at the 164 second mark

  if (song.currentTime()>214){
  othercolour = 200
  othercolourr = 70
  basscolor = map(bass, 0, 255, 10, 40)
  drumcolor = map(drum, 0, 255, 10, 40)
  drumshe = map(drum, 0, 100, -40, 40)
  bassbar = map(bass, 0, 100, 30, 105)
  backb = 7
  backr = 15
  backg = 15
  g=235
  b=255
  r=105
  voice = 0
  vocalcu = 0
  }//changes these values, colours and maps at the 214 second mark

  if (song.currentTime()>232){
  othercolour = 160 
  othercolourr = 120 
  basscolor = map(bass, 0, 255, 100, 240)
  drumcolor = map(drum, 0, 255, 10, 140)
  drumshe = map(drum, 0, 100, -40, 40)
  backb = 120 
  backr = 115 
  backg = 115 
  g=135 
  b=205  
  r=205 
  }//changes these values, colours and maps at the 232 second mark

  //voice line code
  push() // isolates this bit of code
  translate(80,50) //moves it away from the 0,0
  strokeWeight(voice) //allows control over strokeWeight through variable
  stroke(r,g, b, voicetrans) //allows control over stroke colour and transparency 
  fill(backr, backg, backb, 0)//fills in background between curves to match the background 
  beginShape() //starts shape
  curveVertex(xcurve-180,ycurve)
  curveVertex(xcurve-90,ycurve-vocalcu*80) //has line go across the screen, with the y-value being affected by the vocal value
  curveVertex(xcurve,ycurve)
  curveVertex(xcurve+90,ycurve-vocalcu*110)
  curveVertex(xcurve+180,ycurve)
  curveVertex(xcurve+270,ycurve-vocalcu*140)
  curveVertex(xcurve+360,ycurve)
  curveVertex(xcurve+450,ycurve-vocalcu*170)
  curveVertex(xcurve+540,ycurve)
  curveVertex(xcurve+630,ycurve-vocalcu*200)
  curveVertex(xcurve+720,ycurve)
  curveVertex(xcurve+810,ycurve-vocalcu*170)
  curveVertex(xcurve+900,ycurve)
  curveVertex(xcurve+990,ycurve-vocalcu*140)
  curveVertex(xcurve+1080,ycurve)
  curveVertex(xcurve+1170,ycurve-vocalcu*110)
  curveVertex(xcurve+1260,ycurve)
  curveVertex(xcurve+1350,ycurve-vocalcu*80)
  curveVertex(xcurve+1440,ycurve)
  curveVertex(xcurve+1530,ycurve-vocalcu*50)
  curveVertex(xcurve+1620,ycurve)
  endShape()//closes shape

  stroke(r,g, b-100, voicetrans) //next line, slightly out of position, different colour
  fill(backr, backg, backb, 0)
  beginShape()
  curveVertex(xcurve-240,ycurve-vocalcu*40)
  curveVertex(xcurve-150,ycurve)
  curveVertex(xcurve-60,ycurve-vocalcu*70)
  curveVertex(xcurve+30,ycurve)
  curveVertex(xcurve+120,ycurve-vocalcu*100)
  curveVertex(xcurve+210,ycurve)
  curveVertex(xcurve+300,ycurve-vocalcu*130)
  curveVertex(xcurve+390,ycurve)
  curveVertex(xcurve+480,ycurve-vocalcu*160)
  curveVertex(xcurve+570,ycurve)
  curveVertex(xcurve+660,ycurve-vocalcu*190)
  curveVertex(xcurve+750,ycurve)
  curveVertex(xcurve+840,ycurve-vocalcu*160)
  curveVertex(xcurve+930,ycurve)
  curveVertex(xcurve+1020,ycurve-vocalcu*130)
  curveVertex(xcurve+1110,ycurve)
  curveVertex(xcurve+1200,ycurve-vocalcu*100)
  curveVertex(xcurve+1290,ycurve)
  curveVertex(xcurve+1380,ycurve-vocalcu*70)
  curveVertex(xcurve+1470,ycurve)
  curveVertex(xcurve+1560,ycurve-vocalcu*40)
  curveVertex(xcurve+1650,ycurve)
  endShape()    

  stroke(r,g-100, b-40, voicetrans) //next line, out of position, different colour
  beginShape()
  curveVertex(xcurve-270,ycurve)
  curveVertex(xcurve-180,ycurve-vocalcu*110)
  curveVertex(xcurve-90,ycurve)
  curveVertex(xcurve,ycurve-vocalcu*140)
  curveVertex(xcurve+90,ycurve)
  curveVertex(xcurve+180,ycurve-vocalcu*150)
  curveVertex(xcurve+270,ycurve)
  curveVertex(xcurve+360,ycurve-vocalcu*180)
  curveVertex(xcurve+450,ycurve)
  curveVertex(xcurve+540,ycurve-vocalcu*210)
  curveVertex(xcurve+630,ycurve)
  curveVertex(xcurve+720,ycurve-vocalcu*180)
  curveVertex(xcurve+810,ycurve)
  curveVertex(xcurve+900,ycurve-vocalcu*150)
  curveVertex(xcurve+990,ycurve)
  curveVertex(xcurve+1080,ycurve-vocalcu*120)
  curveVertex(xcurve+1170,ycurve)
  curveVertex(xcurve+1260,ycurve-vocalcu*90)
  curveVertex(xcurve+1350,ycurve)
  curveVertex(xcurve+1440,ycurve-vocalcu*60)
  curveVertex(xcurve+1530,ycurve)
  curveVertex(xcurve+1620,ycurve-vocalcu*30)
  endShape()  

  pop() //closes off the line code

  push() //isolates drum code
  translate(width / 2, height / 2); //puts the shape in the middle of the screen
  stroke(r, g, b+20) //controls the colour of the circle outline
  rotate(rotationOffset) //rotates drum circle around the center
  for (let i = 0; i < 100; i = i + 3) {
    if (i > 100) {
      fill(20, 20, 20, 200);
      ellipse(drumshe*2,drumshe,1*drumshe+i, 1*drumshe+i)
      strokeWeight(i-basssize)
    } else {
      fill(50, g, b, drumshe * .5);
      }//for loop creating numerous circles

    rotate(-180)
    ellipse(i / 4, i, 3 * drumshe + i, 3 * drumshe + i)
    ellipse(i, i / 4, 3 * drumshe + i, 3 * drumshe + i)
    rotate(-180) //creating decorative circles at different angles, using i and drum value to control size
 
    rotate(-135)
    ellipse(drumcircle, drumcircle, 1.75 * drumshe + i, 1.75 * drumshe + i)
    ellipse(drumcircle + 100, drumcircle + 100, drumshe - i + 10, drumshe - i + 10)
    //creating decorate circles at different angles, using i and drum value to control size
  }
  pop() //closes drum code
  rotationOffset += rotatespeed / 20;//controls speed of drum circle rotation

  push() //isolates bass circle code
  translate(middlewidth, middleheight)
  for (let i = 0; i < 15; i= i+1) {
    if (i > 100) {
      fill(50, basssize + 50, basssize + 120, 2 * basssize)
      rect(0, 0, 80, 30, 10, 10, 10, 10)
      } 
    else {
      noStroke() 
      stroke(r-40,basscolor,100+basscolor) //controls colour of bass rectangle stroke
      push(); //isolates the following bit of rotation from rest of code
      rotate(12.5 * i * (bass / 50))   //rotates the bass rectangles around in a circle according to the bass levels
      fill(r-100, bassbar + 50, bassbar + 120, 50 - bassbar/ 20.55) //controls colour of bass rectangle fill
      rect(-275, bassposy, 80, 30, 10, 10, 10, 10) //makes the bass rectangle, bassposy allows shake at higher bass levels
      rect(200, bassposy, 80, 30, 10, 10, 10, 10)
      rotate(45) //rotates more
      pop() //closes bass circle code
      
      push() // isolates other star 3 code
      stroke(other, other, other*2) //controls colour of star stroke, according to other variables
      strokeWeight(othershape/3.5) //controls strokeWeight of the stars, according to the othershape variable linked to other values       
      translate(-450,othershapeposy + 25 + counter/25) //moves star down the screen over the course of the song
      fill(othercolourr , othercolour + 100, othercolour + 150, othertrans*1.1) //controls the colour and transparency of the star, in accordance to the variables
      rotate(othershape*10) //controls the rotation, based on the variable
      rect(10,10, othershape + i*2, othershape + i*2 , othershape) //makes the shape, in accordance to the variables
      pop() //closes star 3 code

      push() //isolates other star 4 code
      translate(-300,othershapeposy+ 50 + counter/25)      
      stroke(other, other, other*2)
      strokeWeight(othershape/3.5)
      fill(othercolourr , othercolour + 100, othercolour + 150, othertrans*1.1)
      rotate(othershape*-10)     
      rect(10,10, othershape + i*2, othershape + i*2 , othershape)
      pop() //close other star 4 code
       
      push() //isolates other star 2 code
      translate(-600,othershapeposy+ 75 + counter/25)      
      stroke(other, other, other*2)
      strokeWeight(othershape/3.5)
      fill(othercolourr , othercolour + 100, othercolour + 150, othertrans*1.1)
      rotate(othershape*-10)     
      rect(10,10, othershape + i*2, othershape + i*2 , othershape)
      pop() //close other star 2 code
      
      push() //isolates other star 1 code
      translate(-750,othershapeposy+ 100 + counter/25)      
      stroke(other, other, other*2)
      strokeWeight(othershape/3.5)
      fill(othercolourr , othercolour + 100, othercolour + 150, othertrans*1.1)
      rotate(othershape*-10)     
      rect(10,10, othershape + i*2, othershape + i*2 , othershape)
      pop() //closes other star 1 code

      push() //isolates other star 7 code
      stroke(other, other, other*2)
      strokeWeight(othershape/3.5)       
      translate(-450,othershapeposy + 660 - counter/25) //star goes upwards throughout the song
      fill(othercolourr , othercolour + 100, othercolour + 150, othertrans*1.1)
      rotate(othershape*10)
      rect(10,10, othershape + i*2, othershape + i*2 , othershape)
      pop() //closes other star 7 code

      push() //isolates other star 8 code
      translate(-300,othershapeposy+ 630 - counter/25)      
      stroke(other, other, other*2)
      strokeWeight(othershape/3.5)
      fill(othercolourr , othercolour + 100, othercolour + 150, othertrans*1.1)
      rotate(othershape*-10)     
      rect(10,10, othershape + i*2, othershape + i*2 , othershape)
      pop()// closes other star 8 code

      push() //isolates other star 6 code
      translate(-600,othershapeposy+ 615 - counter/25)      
      stroke(other, other, other*2)
      strokeWeight(othershape/3.5)
      fill(othercolourr , othercolour + 100, othercolour + 150, othertrans*1.1)
      rotate(othershape*-10)     
      rect(10,10, othershape + i*2, othershape + i*2 , othershape)
      pop() //closes other star 6 code
      
      push() //isolates other star 5 code
      translate(-750,othershapeposy+ 590 - counter/25)      
      stroke(other, other, other*2)
      strokeWeight(othershape/3.5)
      fill(othercolourr , othercolour + 100, othercolour + 150, othertrans*1.1)
      rotate(othershape*-10)     
      rect(10,10, othershape + i*2, othershape + i*2 , othershape)
      pop() //closes other star 5 code
       
      push() // isolates other star 9 code
      stroke(other, other, other*2) 
      strokeWeight(othershape/3.5)      
      translate(210,othershapeposy + 25 + counter/25) 
      fill(othercolourr , othercolour + 100, othercolour + 150, othertrans*1.1) 
      rotate(othershape*10) 
      rect(10,10, othershape + i*2, othershape + i*2 , othershape) 
      pop() //closes star 9 code

      push() //isolates other star 10 code
      translate(360,othershapeposy+ 50 + counter/25)      
      stroke(other, other, other*2)
      strokeWeight(othershape/3.5)
      fill(othercolourr , othercolour + 100, othercolour + 150, othertrans*1.1)
      rotate(othershape*-10)     
      rect(10,10, othershape + i*2, othershape + i*2 , othershape)
      pop() //close other star 10 code
       
      push() //isolates other star 11 code
      translate(510,othershapeposy+ 75 + counter/25)      
      stroke(other, other, other*2)
      strokeWeight(othershape/3.5)
      fill(othercolourr , othercolour + 100, othercolour + 150, othertrans*1.1)
      rotate(othershape*-10)     
      rect(10,10, othershape + i*2, othershape + i*2 , othershape)
      pop() //close other star 11 code
      
      push() //isolates other star 12 code
      translate(660,othershapeposy+ 100 + counter/25)      
      stroke(other, other, other*2)
      strokeWeight(othershape/3.5)
      fill(othercolourr , othercolour + 100, othercolour + 150, othertrans*1.1)
      rotate(othershape*-10)     
      rect(10,10, othershape + i*2, othershape + i*2 , othershape)
      pop() //closes other star 12 code

      push() //isolates other star 13 code
      stroke(other, other, other*2)
      strokeWeight(othershape/3.5)       
      translate(210,othershapeposy + 660 - counter/25) //star goes upwards throughout the song
      fill(othercolourr , othercolour + 100, othercolour + 150, othertrans*1.1)
      rotate(othershape*10)
      rect(10,10, othershape + i*2, othershape + i*2 , othershape)
      pop() //closes other star 13 code

      push() //isolates other star 14 code
      translate(360,othershapeposy+ 630 - counter/25)      
      stroke(other, other, other*2)
      strokeWeight(othershape/3.5)
      fill(othercolourr , othercolour + 100, othercolour + 150, othertrans*1.1)
      rotate(othershape*-10)     
      rect(10,10, othershape + i*2, othershape + i*2 , othershape)
      pop()// closes other star 14 code

      push() //isolates other star 15 code
      translate(510,othershapeposy+ 615 - counter/25)      
      stroke(other, other, other*2)
      strokeWeight(othershape/3.5)
      fill(othercolourr , othercolour + 100, othercolour + 150, othertrans*1.1)
      rotate(othershape*-10)     
      rect(10,10, othershape + i*2, othershape + i*2 , othershape)
      pop() //closes other star 15 code
      
      push() //isolates other star 16 code
      translate(660,othershapeposy+ 590 - counter/25)      
      stroke(other, other, other*2)
      strokeWeight(othershape/3.5)
      fill(othercolourr , othercolour + 100, othercolour + 150, othertrans*1.1)
      rotate(othershape*-10)     
      rect(10,10, othershape + i*2, othershape + i*2 , othershape)
      pop() //closes other star 16 code

      push() //isolates second bass rectangles code
      fill(10, bassbar + 150, bassbar + 120, 50 - bassbar/ 20.55) //controls colour of fill, makes them more green than other rectangles
      rotate(-12.5 * i * (bass / 50)) // rotates the rectangles in a circle around the center
      rect(-275, bassposy, 80, 30, 10, 10, 10, 10) //forms the rectangles, bassposy allows flutter at high bass levels
      rect(200, bassposy, 80, 30, 10, 10, 10, 10)
      pop() //closes second bass rectangle code
      }
  }
   pop() //isolates bass circle code
}  



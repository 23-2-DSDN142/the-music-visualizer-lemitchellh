let rotationOffset = 0;

let backb = 20
let backr = 10
let backg =10



// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  textFont('Comic Sans'); // please use CSS safe fonts
createCanvas(windowWidth,windowHeight) 
background (backr, backg, backb)  
rectMode(CENTER)
  angleMode(DEGREES)
  textSize(44);
  
  var basscolor = map(bass, 0, 255, 190, 240)
  var drumcolor = map(drum, 0, 255, 150, 240)

  var drumshe = map(drum, 0, 100, -40, 40)
  var basssize = map(bass, 0, 100, 10, 45)
  var bassbar = map(bass, 0, 100, 60, 95)
  var rotatespeed = map(bass, 0, 100, 7, 35)

var vocalcu = map(vocal,0, 100, 0, 1)

  let middlewidth = width / 2;
  let middleheight = height / 2;

  let drumcircle = drumshe * 1.5;

 let xcurve = 0
 let ycurve = height/2
  
let voice = 7
let voicetrans = 140



let bassposx = 0;
let bassposy = 0;
let basstwirl = map(bass, 0, 100, 1, 50)

let othershape = map(other,0, 100, 1, 5)
let othershapeposy = -350
let othersize = map(song.currentTime(),0, song.duration(), 0, 100)
let othercolour = 50
let othercolourr = 30
let othertrans = 30
let r = 20
let g = 205
let b = 220


 console.log(song.currentTime())    
 //console.log(song.duration())

if(bass<40 && song.currentTime()<25){
  bass =0 
}

if(other>40){
  other= other / 5
}

if(vocalcu<0.3){
  vocalcu=0
}

if (song.currentTime()>30){
  othercolour = 200
  drumcolor = map(drum, 0, 255, 80, 100)
  basscolor = map(bass, 0, 255, 100, 140)
  bassbar = map(bass, 0, 100, 30, 105)
  g= 150
  b= 180
  backb = 50
  backg = 150
  backr = 230
}

if (song.currentTime()>31){
  backb = 30
  backg = 10
  backr = 10

}

if (song.currentTime()>76){
  othercolour = 200
  othercolourr = 200
  basscolor = map(bass, 0, 255, 190, 240)
  drumcolor = map(drum, 0, 255, 150, 240)
  drumshe = map(drum, 0, 100, -40, 40)
  backb = 5
  backr = 5
  backg = 5
  g=235
  b=255
  r=235
}


if (song.currentTime()>76){
}

if (song.currentTime()>94){
  backb = 30
  backg = 10
  backr = 10
  r=20
  g=210
  b=230
  othercolour = 140
  othercolourr = 200
}

if (song.currentTime()>119){
}
if (song.currentTime()>143){
}

if (song.currentTime()>163){
}

if (song.currentTime()>211){
}

if (song.currentTime()>230){
}


if (bass>79){
  bassposx = bassposx + basstwirl
  bassposy = bassposy + basstwirl
}

// if (song.currentTime()<30){
//   voice = 0
// }

// if (song.currentTime()<30){
//   vocalcu = 0
// } 

//if (song.currentTime()<130){
//   
// } 

  push()

  translate(80,50)
strokeWeight(voice)
stroke(r,g, b, voicetrans)
fill(backr, backg, backb, 0)
  beginShape()
  curveVertex(xcurve-180,ycurve)
  curveVertex(xcurve-90,ycurve-vocalcu*80)
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
endShape()
stroke(r,g, b-100, voicetrans)
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

stroke(r,g-100, b-40, voicetrans)
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

pop()

  push()
  translate(width / 2, height / 2);


  stroke(r, g, b+20)
  fill(0, 0, 0, 0)
  rotate(rotationOffset)
  for (let i = 0; i < 100; i = i + 3) {
    if (i > 100) {
      fill(20, 20, 20, 200);
      ellipse(drumshe*2,drumshe,1*drumshe+i, 1*drumshe+i)
      strokeWeight(i-basssize)
    } else {
      fill(50, g, b, drumshe * .5);
      
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
      rect(-275, bassposy, 80, 30, 10, 10, 10, 10)
      rect(200, bassposy, 80, 30, 10, 10, 10, 10)
      rotate(45)
      pop()
       push()

       stroke(other, other, other*2)
strokeWeight(othershape/3.5)       
translate(-450,othershapeposy + 25 + counter/25)
       fill(othercolourr , othercolour + 100, othercolour + 150, othertrans*1.1)
      rotate(othershape*10)
      rect(10,10, othershape + i*2, othershape + i*2 , othershape)
       pop()
       push()
       translate(-300,othershapeposy+ 50 + counter/25)      
    stroke(other, other, other*2)
    strokeWeight(othershape/3.5)
    fill(othercolourr , othercolour + 100, othercolour + 150, othertrans*1.1)
    rotate(othershape*-10)     
    rect(10,10, othershape + i*2, othershape + i*2 , othershape)
    pop()
    push()
    translate(-600,othershapeposy+ 75 + counter/25)      
 stroke(other, other, other*2)
 strokeWeight(othershape/3.5)
 fill(othercolourr , othercolour + 100, othercolour + 150, othertrans*1.1)
 rotate(othershape*-10)     
 rect(10,10, othershape + i*2, othershape + i*2 , othershape)
 pop()
 push()
 translate(-750,othershapeposy+ 100 + counter/25)      
stroke(other, other, other*2)
strokeWeight(othershape/3.5)
fill(othercolourr , othercolour + 100, othercolour + 150, othertrans*1.1)
rotate(othershape*-10)     
rect(10,10, othershape + i*2, othershape + i*2 , othershape)
pop()
push()

       stroke(other, other, other*2)
strokeWeight(othershape/3.5)       
translate(-450,othershapeposy + 660 - counter/25)
       fill(othercolourr , othercolour + 100, othercolour + 150, othertrans*1.1)
      rotate(othershape*10)
      rect(10,10, othershape + i*2, othershape + i*2 , othershape)
       pop()
       push()
       translate(-300,othershapeposy+ 630 - counter/25)      
    stroke(other, other, other*2)
    strokeWeight(othershape/3.5)
    fill(othercolourr , othercolour + 100, othercolour + 150, othertrans*1.1)
    rotate(othershape*-10)     
    rect(10,10, othershape + i*2, othershape + i*2 , othershape)
    pop()
    push()
    translate(-600,othershapeposy+ 615 - counter/25)      
 stroke(other, other, other*2)
 strokeWeight(othershape/3.5)
 fill(othercolourr , othercolour + 100, othercolour + 150, othertrans*1.1)
 rotate(othershape*-10)     
 rect(10,10, othershape + i*2, othershape + i*2 , othershape)
 pop()
 push()
 translate(-750,othershapeposy+ 590 - counter/25)      
stroke(other, other, other*2)
strokeWeight(othershape/3.5)
fill(othercolourr , othercolour + 100, othercolour + 150, othertrans*1.1)
rotate(othershape*-10)     
rect(10,10, othershape + i*2, othershape + i*2 , othershape)
pop()
       

       push()
      fill(10, bassbar + 150, bassbar + 120, 50 - bassbar/ 20.55)
      rotate(-12.5 * i * (bass / 50))
      rect(-275, bassposy, 80, 30, 10, 10, 10, 10)
      rect(200, bassposy, 80, 30, 10, 10, 10, 10)
      pop()
      
      //rotate(90)

      
    }
  

    noStroke()
  }
   pop()
rotate(90)

}  



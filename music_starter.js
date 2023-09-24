
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(2, bass/1, bass/1.2)
  textFont('Comic Sans'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(44);

  var basscolor = map(bass, 0, 255, 190, 240)


  let middlewidth = 690
  let middleheight = 360

  

stroke(vocal, basscolor, 50+basscolor)
 strokeWeight(6);
 fill(50, 5+basscolor, 15+basscolor)
//  line(middlewidth, middleheight, middlewidth, middleheight-drum*2)
//  line(middlewidth-20, middleheight, middlewidth - 20, middleheight-drum*1.8)
//  line(middlewidth+20, middleheight, middlewidth + 20, middleheight-drum*1.8)
//  line(middlewidth+40, middleheight, middlewidth + 40, middleheight-drum*1.6)
//  line(middlewidth-40, middleheight, middlewidth - 40, middleheight-drum*1.6)
rectMode(CORNER)
 rect(middlewidth, middleheight, 18, -2.6*drum)
 rect(middlewidth-35, middleheight, 18, -2.4*drum)
 rect(middlewidth-70, middleheight, 18, -2.2*drum)
 rect(middlewidth-105, middleheight, 18, -2.0*drum)
 rect(middlewidth-140, middleheight, 18, -1.8*drum)
 rect(middlewidth-175, middleheight, 18, -1.6*drum)
 rect(middlewidth-210, middleheight, 18, -1.4*drum)
 rect(middlewidth-245, middleheight, 18, -1.2*drum)
 rect(middlewidth-280, middleheight, 18, -1.0*drum)
 rect(middlewidth-315, middleheight, 18, -.8*drum)
 rect(middlewidth-350, middleheight, 18, -.6*drum)
 rect(middlewidth-385, middleheight, 18, -.4*drum)
 rect(middlewidth-420, middleheight, 18, -.2*drum)
 rect(middlewidth-455, middleheight, 18, -.1*drum)
 rect(middlewidth+35, middleheight, 18, -2.4*drum)
 rect(middlewidth+70, middleheight, 18, -2.2*drum)
 rect(middlewidth+105, middleheight, 18, -2.0*drum)

 rect(middlewidth+140, middleheight, 18, -1.8*drum)
 rect(middlewidth+175, middleheight, 18, -1.6*drum)
 rect(middlewidth+210, middleheight, 18, -1.4*drum)
 rect(middlewidth+245, middleheight, 18, -1.2*drum)
 rect(middlewidth+280, middleheight, 18, -1.0*drum)
 rect(middlewidth+315, middleheight, 18, -.8*drum)
 rect(middlewidth+350, middleheight, 18, -.6*drum)
 rect(middlewidth+385, middleheight, 18, -.4*drum)
 rect(middlewidth+420, middleheight, 18, -.2*drum)
 rect(middlewidth+455, middleheight, 18, -0.1*drum)
//rect(vocal*.2, height/2.5, drum*10, 60)


//  let bar_spacing = height / 10;
  //  let bar_height = width / 12;
  //  let bar_pos_x = width / 2;
 

  //  // vocal bar is red
  //  fill(200, 0, 0);
  //  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  //  fill(0);
  //  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
  //  // drum bar is green
  //  fill(0, 200, 0);
  //  rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  //  fill(0);
  //  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
  //  // bass bar is blue
  //  fill(50, 50, 240);
  //  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  //  fill(0);
  //  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
  //  // other bar is white
  //  fill(200, 200, 200);
  //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  //  fill(0);
  //  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  //  fill(255, 255, 0);
 
  //  // display "words"
  //  textAlign(CENTER);
  //  textSize(vocal);
  //  text(words, width/2, height/3);
}
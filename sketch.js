var myRec;

var time1 = 0;
var time2 = 4500;
var time3 = 15000;
var time3H = 15500;
var time4 = 24500;
var time5 = 31000;
var time6 = 36000;
var time7 = 41000;
var time8 = 46000;
var time9 = 50000;
var time10 = 54000;
var time11 = 59000;




var phrases = ["happy as a _____ in mud","busy as a ___(sound?)","meek as a ___","quiet as a ___","sick as a ___","sly as a ___","night ___","jump the ___","Who's the king of the jungle?","boo! (who says that?)"];
//var index = 0; 

var phraseHelp = ["think of their sound!", "who?"];

function preload(){
   can = loadFont("can.ttf");
}



function setup() {
   createCanvas(1000,800);
   background(125,130,100,80);
   myRec = new p5.SpeechRec('en-US',parseResults);
     myRec.continuous = true;
   myRec.interimResults = true;
myRec.start();
  angleMode(DEGREES);

  textAlign(CENTER);
     
  var phrase = random(phrases);
textSize(70);
fill(111,81,65);
textFont(can);
text(phrase,width/2,height/2);

//if(phrase == phrases[(2)]) {
//     textSize(60); text(phraseHelp[(0)],width/2,height/4);
// }
// if(phrase == phrases[(7)]) {
//     textSize(60); text(phraseHelp[(1)],width/2,height/4);
// }

}
      
function parseResults() {
 
        
        var mostrecentword = myRec.resultString.split(' ').pop();

   
        console.log(mostrecentword);
 
     
		
   
       
       
     if(mostrecentword.indexOf("pig")!==-1) {pig(150,-50);}

       
     
      if(mostrecentword.indexOf("buzz")!==-1) {bee(250,-50);}
            
      
      if(mostrecentword.indexOf("lamb")!==-1) {scale(.6); lamb(1150,550);  }
      
      if(mostrecentword.indexOf("fox")!==-1) {fox(220,-50);}

      if(mostrecentword.indexOf("lion")!==-1) {scale(.6); lion(-350,60); }

      if(mostrecentword.indexOf("dog")!==-1) { scale(.7); dog(1040,560); }

      if(mostrecentword.indexOf("owl")!==-1) {owl(640,370); }
      
      if(mostrecentword.indexOf("shark")!==-1) {scale(.5); shark(1460,560);  }

      if(mostrecentword.indexOf("mouse")!==-1) { mouse(460,60); }


           //if(mostrecentword.indexOf("cat")!==-1) {cat(10,10); }
        if(mostrecentword.indexOf("ghost")!==-1) { scale(random(.8,4))
            ghost(random(660),random(600));
            ghost(random(160),random(400));
            ghost(random(1060),random(200));}
  
  
  
  
  
   }
   
 
   function draw() {
    //print(millis());
    
    
     
//       var currentTime = millis();
      
     
//       if (currentTime >= time1){
//        fill(0);
//           textSize(70);
//          textFont(can);
//           textAlign(CENTER);
//           text(phrases[(0)],width/2, height/8);
         
//       }
       
      
             
//       //pig
//           push();
//       if (currentTime >= time2) {
//            fill(127,90,53);
//           textSize(70);
//            text(phrases[(1)],width/2,height/2);
//           }  
//       if (currentTime >= time2+10000) {
//          clear();
//          }
//          pop();
      
  
//        push();
//   //bee
//           if (currentTime >= time3) {
//       background(125,130,100,80);
//          textSize(70);
//          text(phrases[(2)],width/2,height/2);
//          textSize(60);
//          text(phraseHelp[(0)],width/2,550);
//       }   if (currentTime >= time3+5000) {
//           clear();
//           }
//      pop();
  
//      push();
//   //lamb
//       if (currentTime >= time4) {
//       background(125,130,100,80);
//           textSize(70);
//           text(phrases[(3)],width/2,height/2);}
//           if (currentTime >= time4+6000) {
//               clear();
//               }
//   pop();
  
//   push();
//   //mouse
//   if (currentTime >= time5) {
//       background(125,130,100,80);
//       textSize(70);
//       text(phrases[(4)],width/2,height/2);
//   }  
//   if (currentTime >= time5+5000) {
//       clear();
//       }
//   pop();
//   push();
//   //dog
//   if (currentTime >= time6) {
//       background(125,130,100,80);
//       textSize(70);
//       text(phrases[(5)],width/2,height/2);
//   } 
//   if (currentTime >= time6+4000) {
//       clear();
//       }
//   pop();
//   push();
//   //fox
//   if (currentTime >= time7) {
//       background(125,130,100,80);
//       textSize(70);
//       text(phrases[(6)],width/2,height/2);
//   } 
//   if (currentTime >= time7+4000) {
//       clear();
//       }
//       pop();
  
//       push();
//   //owl
  
//   if (currentTime >= time8) {
//       background(125,130,100,80);
//       textSize(70);
//       text(phrases[(7)],width/2,height/2);
//       textSize(60);
//       text(phraseHelp[(1)],width/2,550);}
//   if (currentTime >= time8+4000) {
//       clear();
//       }
//       pop();
//       push();
//   //shark
//   if (currentTime >= time9) {
//       background(125,130,100,80);
//       textSize(70);
//       text(phrases[(8)],width/2,height/2);
//   } 
//   if (currentTime >= time9+3000) {
//       clear();
//       }
//   pop();
  
//   push();
//   //lion
//   if (currentTime >= time10) {
//       background(125,130,100,80);
//       textSize(70);
//       text(phrases[(9)],width/2,height/2);
//   } 
//   if (currentTime >= time10+3000) {
//       clear();
//       }
//       pop();
  
//       push();
//   if (currentTime >= time10+5000) {
//       background(125,130,100,80);
//       text("did you name them all?",width/2,height/2);
//           }
//   pop();
  
  
  
  }
   

   function lamb(x,y){
       push();
       translate(x,y);
//white fluff
noStroke();
push();
fill(255);
ellipse(0,0,180,400);
pop();

push();
fill(255);
ellipse(0,0,400,180);
pop();

push();
fill(255);
rotate(45);
translate(5,5)
ellipse(0,0,180,400);
pop();

push();
fill(255);
rotate(-45);
translate(2,3)
ellipse(0,0,180,400);
pop();

//lefte ear
fill(152,107,67);
beginShape();
curveVertex(60,0);
curveVertex(130,14);
curveVertex(135,10);
curveVertex(125,-13);
curveVertex(60,-50);
endShape(CLOSE);
//left iinner ea
fill(252,204,153);
beginShape();
curveVertex(60,-10);
curveVertex(110,4);
curveVertex(110,2);
curveVertex(60,-20);
endShape(CLOSE);
//right ear
fill(152,107,67);
beginShape();
curveVertex(-60,0);
curveVertex(-130,14);
curveVertex(-135,10);
curveVertex(-125,-13);
curveVertex(-60,-50);
endShape(CLOSE);
//right iinner ea
fill(252,204,153);
beginShape();
curveVertex(-60,-10);
curveVertex(-110,4);
curveVertex(-110,2);
curveVertex(-60,-20);
endShape(CLOSE);



//face
fill(152,107,67);
ellipse(0,0,175,250)
//forehead
fill(255);
ellipse(0,-100,110,70);

fill(255);
ellipse(0,-90,60,70);

fill(255);
ellipse(55,-70,70,70);

fill(255);
ellipse(-55,-70,70,70);
//nose
fill(0);
ellipse(10,100,5,18);
fill(0);
ellipse(-10,100,5,18);

//eyes
push();
translate(-3,-7);
push();
fill("lightblue");
rotate(-56);
ellipse(15,40,40,66);
pop();

push();
fill("lightblue");
rotate(-129);
ellipse(12,-35,40,66);
pop();


fill(0);
ellipse(26,10,20,12);
ellipse(-46,10,20,12);

pop();
   }


   function cat(x,y){
 
       push();
         //cat
       translate(x,y);
       noStroke();
       fill(255);
       circle(400,300,200);
       noStroke();
       //right ear
       fill(255);
       triangle(300,290,350,102,380,260)
       //left ear
       noStroke();
       fill(255);
       triangle(500,290,450,102,420,260)
       //nose
       fill(68,55,82);
       triangle(385,330,400,347,415,330);
       //left eyes 
       fill(255,255,55);
       beginShape();
       curveVertex(410,320);
       curveVertex(425,285);
       curveVertex(440,270);
       curveVertex(480,245);
       curveVertex(470,310);
       endShape(CLOSE);
        //right eye  
       fill(255,255,55);
       beginShape();
       curveVertex(390,320);
       curveVertex(375,285);
       curveVertex(360,270);
       curveVertex(320,245);
       curveVertex(330,310);
       endShape(CLOSE);   
        //pupils
       fill(68,55,82);
       ellipse(445,290,4,40)  
       fill(68,55,82);
       ellipse(355,290,4,40) 
       pop();
       }
       function ghost(x,y) {
           //ghost
           push();
           translate(x,y);
           noStroke();
           fill(255,86);
           ellipse(55,40,60,70);
           ellipse(40,55,30,50);
           ellipse(55,55,30,50);
           ellipse(70,55,30,50);
           //face
           push();
           fill(0);
           rotate(15);
           ellipse(45,20,20,30);
           fill(0);
           rotate(-25);
           ellipse(60,45,20,30);
           pop();
           fill(0);
           ellipse(50,55,15,20)
           pop();
        
        
        
        }

        function lion(x,y){
            push();
            translate(x,y);
            noStroke();
            fill(188,105,42);
            strokeWeight(.25);
            ellipse(1200, 300, 550, 550);
        
            fill(229,182,88);
            strokeWeight(.25);
            ellipse(1040, 160, 100, 100);
        
            fill(229,182,88);
            strokeWeight(.25);
            ellipse(1360, 160, 100, 100);
        
            fill(255,218,144);
            strokeWeight(.25);
            ellipse(1055, 170, 40, 40);
        
            fill(255,218,144);
            strokeWeight(.25);
            ellipse(1345, 170, 40, 40);
        
            fill(188,105,42);
            strokeWeight(.25);
            ellipse(1200, 300, 400, 400);
        
            fill(229,182,88);
            //strokeWeight(12);
            //stroke(255);
            ellipse(1200, 320, 400, 400);
        
            fill(255,218,144);
            strokeWeight(.25);
            ellipse(1200, 500, 170, 90);
        
            fill(255,218,144);
            strokeWeight(.25);
            ellipse(1200, 460, 90, 160);
        
            fill(50);
            strokeWeight(.25);
            ellipse(1200, 455, 60, 36);
        
                fill(50);
                strokeWeight(.25);
                ellipse(1180, 460, 20, 32);
        
                fill(50);
                strokeWeight(.25);
                ellipse(1220, 460, 20, 32);
        
                fill(50);
                strokeWeight(.25);
                ellipse(1200, 460, 17, 32);
        
       
        
            fill(255,218,144);
            strokeWeight(.25);
            ellipse(1290, 321, 130, 150);
        
            fill(255,218,144);
            strokeWeight(.25);
            ellipse(1110, 321, 130, 150);
        
            fill(255, 175, 68);
            strokeWeight(.5);
            ellipse(1290, 321, 90, 120);
            
            fill(255, 175, 68);
            strokeWeight(.5);
            ellipse(1110, 321, 90, 120);
        
            fill(25, 25, 0);
            strokeWeight(.25);
            ellipse(1290, 321, 20, 60);
        
            fill(25, 25, 0);
            strokeWeight(.25);
            ellipse(1110, 321, 20, 60);
       
            pop();
        }


function pig(x,y) {
            push();
            translate(x,y);
            noStroke();
fill(230,160,184);
ellipse(400,400,190,170);
beginShape(); //left ear
curveVertex(310,400);
curveVertex(301,360);
curveVertex(290,280);
curveVertex(380,350);
endShape(CLOSE);
beginShape(); // inner left ear
fill(250,190,213);
curveVertex(320,370);
curveVertex(305,303);
curveVertex(350,334);
endShape(CLOSE);
beginShape(); //right ear
fill(230,160,184);
curveVertex(420,350);
curveVertex(470,360);
curveVertex(495,390);
curveVertex(510,280);
endShape(CLOSE);
beginShape(); // inner right ear
fill(250,190,213);
curveVertex(490,370);
curveVertex(500,303);
curveVertex(460,334);
endShape(CLOSE);
fill(250,190,213);
ellipse(400,460,80,60);
fill(50,30,30);
ellipse(380,460,10,25)
fill(50,30,30);
ellipse(420,460,10,25)
push();
rotate(4);
fill(50,120,30);
ellipse(400,370,15,35);
pop();
push();
rotate(-4);
fill(50,120,30);
ellipse(400,425,15,35);
pop();
            pop();
        }

function fox(x,y) {

push();
translate(x,y);
push();
         //cat
         noStroke();
         //right ear
         fill(20);
         triangle(320,230,350,102,380,260)
         fill(255);
         triangle(326,230,350,152,380,260)
         //left ear
         noStroke();
         fill(20);
         triangle(480,230,450,102,420,260)
         fill(255);
         triangle(476,230,450,152,420,260)



beginShape();
fill(235,116,35);
curveVertex(400,450);
curveVertex(390,450);
curveVertex(320,230);
curveVertex(482,230);
endShape(CLOSE);
beginShape(); //muzzle
fill(255);
curveVertex(399,450);
curveVertex(392,450);
curveVertex(370,400);
curveVertex(423,400);
endShape(CLOSE);
       
       //nose
       fill(68,55,82);
       triangle(378,430,395,455,413,430);
       //right eyes 
       fill(88,238,103);
       beginShape();
       curveVertex(415,320);
       curveVertex(425,285);
       curveVertex(440,270);
       curveVertex(470,245);
       curveVertex(460,310);
       endShape(CLOSE);
        //left eye  
       
       fill(88,238,103);
       beginShape();
       curveVertex(385,320);
       curveVertex(375,285);
       curveVertex(365,270);
       curveVertex(330,245);
       curveVertex(340,310);
       endShape(CLOSE);   
        //pupils
       fill(68,55,82);
       ellipse(445,290,4,30)  
       fill(68,55,82);
       ellipse(355,290,4,30) 
       pop();

pop();

}


function bee(x,y) {
   push();
   translate(x,y);
   noStroke();
   //bee wings
   push();
   fill(255,255,250,70);
   rotate(19);
   ellipse(520,202,80,110);
   pop();
   push();
   fill(255,255,250,70);
   rotate(-9);
   ellipse(320,420,80,110);
   pop();
   //bee
   fill(242,219,74);
   ellipse(410,420,150,100)
   beginShape();
   fill(0);
   curveVertex(380,372);
   curveVertex(410,370);
   curveVertex(420,372);
   curveVertex(400,420);
   curveVertex(420,465);
   curveVertex(410,470);
   curveVertex(380,465);
   curveVertex(365,420);
   endShape(CLOSE);
   
   fill(0);
   ellipse(430,415,8,20);
   ellipse(460,415,8,20);
   noFill();
   stroke(0);
       arc(445, 430, 8, 6, 0, 180 );
   pop();
}

function mouse(x,y) {
    push();
    translate(x,y);

    noStroke();
    //leftear
    fill(160,160,200);
    ellipse(100,220,140,170);
    fill("lightpink");
    ellipse(100,220,100,130);
    //righttear
    fill(160,160,200);
    ellipse(300,220,140,170);
    fill("lightpink");
    ellipse(300,220,100,130);
    
    
    
    
    //head
    beginShape();
    fill(160,160,200);
    curveVertex(200,400);
    curveVertex(190,400);
    curveVertex(120,230);
    curveVertex(282,230);
    endShape(CLOSE);
    
    //nose eyes
    fill(0);
    ellipse(195,400,30,30);
    ellipse(225,300,15,35);
    ellipse(175,300,15,35);
    fill(255);
    ellipse(175,290,5,8)
    ellipse(225,290,5,8)
    ellipse(203,393,5,8)
    
    
    pop();}

    function dog(x,y) {
        push();
        translate(x,y);
    noStroke();
//left ear
push();
rotate(24);
fill(174,155,104);
ellipse(-120,60,120,260);
pop();
//inner
push();
rotate(16);
fill(229,213,168);
ellipse(-120,60,80,160);
pop();
//lright ear
push();
rotate(150);
fill(174,155,104);
ellipse(-120,-69,120,260);
pop();
//inner
push();
rotate(158);
fill(229,213,168);
ellipse(-120,-69,80,160);
pop();
//head
fill(205,191,98);
ellipse(0,0,260,250);
//mouth
fill(174,155,104);
ellipse(10,110,110,90);
//nose
fill(0);
ellipse(10,100,50,40);
//eye dot
fill(229,213,168);
ellipse(-50,-5,100,120);
//eyes

push();
fill(120,146,104);
rotate(-166);
ellipse(42,-15,50,76);
pop();
push();
fill(120,146,104);
rotate(-16);
ellipse(62,20,50,76);
pop();
fill(0);
ellipse(57,-15,30,40);
ellipse(-42,-13,30,40);


pop();
}

function owl(x,y) {
    push();
    translate(x,y);
noStroke();

fill(178,126,108);
beginShape();
curveVertex(-80,-20);
curveVertex(-120,-13);
curveVertex(-80,20);
endShape(CLOSE);beginShape();
curveVertex(80,-20);
curveVertex(120,-13);
curveVertex(80,20);
endShape(CLOSE);

//head
fill(178,126,108);
ellipse(0,0,200,150);

//eye mask
fill(226,183,167);
ellipse(43,-5,85,105);
ellipse(-43,-5,85,105);

//eyes
fill(249,249,57);
ellipse(43,-5,75,95);
ellipse(-43,-5,75,95);
fill(0);
ellipse(30,-30,10,20)
ellipse(-30,-30,10,20)

//beak
fill(229,229,87);
triangle(0,70,10,40,-10,40);
fill(0);
ellipse(3,50,1,10);
ellipse(-3,50,1,10);

pop();
}

function shark(x,y) {
    push();
    translate(x,y);
noStroke();


fill(82,113,238);
ellipse(10,300,600,250);



//shark body
fill(174,175,222);
beginShape();
curveVertex(0,-20);
curveVertex(60,30);
curveVertex(115,120);
curveVertex(100,300);
curveVertex(-100,300);
curveVertex(-115,120);
curveVertex(-60,30);
curveVertex(-1,-20);
endShape(CLOSE);
//mouth
fill(127,49,40);
ellipse(0,130,180,160);
//bottom jaw
fill(174,175,222);
ellipse(0,220,200,190);



fill(255);
beginShape();
vertex(30,55);
vertex(0,100);
vertex(-30,55);
endShape(CLOSE);

beginShape();
vertex(-30,53);
vertex(-30,110);
vertex(-75,90);
endShape(CLOSE);

beginShape();
vertex(30,53);
vertex(30,100);
vertex(75,90);
endShape(CLOSE);
 

push();
noFill();
strokeWeight(6);
stroke(127,49,40);
arc(0, 125, 170, 150, 180, 360);


pop();

noFill();
stroke(74,75,122);
beginShape()
curveVertex(40,230);
curveVertex(90,190);
endShape(CLOSE);

beginShape()
curveVertex(43,270);
curveVertex(90,230);
endShape(CLOSE);

beginShape()
curveVertex(-40,230);
curveVertex(-90,190);
endShape(CLOSE);

beginShape()
curveVertex(-43,270);
curveVertex(-90,230);
endShape(CLOSE);

pop(); }
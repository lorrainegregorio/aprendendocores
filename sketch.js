var img;
var img2;
var bolha1;
var modelo;
var regra;
var comandos;
var sad;
var happy;
var angry;

var xMenu1=140; 
var xMenu2=240;
var xMenu3=340;

var yMenu1=100;
var yMenu2=180;
var yMenu3=260;

var l=150;
var h=60;

var font;


// Variáveis fases do jogo

var atirador;
 // x e y do atirador
var a1x=200;
var a1y=400;
var a2x=200;
var a2y=360;
var balde;

// Variáveis  das bolinhas do menu
var pretax=55;
var pretay=520;

var amarx=135;
var amary=520;
var azulx=215;
var azuly=520;
var vermx=295;
var vermy=520;
var verdx=375;
var verdy=520;

var laranx=175
var larany=475
var roxax=335
var roxay=475


var vida=3;
var rmenu=15;

var d=46; 
// Posição bolinhas 1ª fase

// bolinhas azuis
var xbazul=[25,70,115,160,205,250,295,340]
var yl1azul=25

// bolinhas vermelhas
var xbvermelha=[385,430,475]
var yl1vermelha=25

// bolinhas verdes
var xbverde=[70,115,160,205,250,295,340,385,430]
var yl2verde=71

// bolinhas amarelas

var xbamarela=[115,160,205,250,295,340,385]
var yl3amarela=117

//Posição bolinhas 2ª fase

// bolinhas amarelas
var xamar2=[25,70,115,160]
var yl1amar=25

//bolinhas laranjas
var larx=[205,250,295,340,385,430,475]
var yl1lar=25

//bolinhas azuis

var xazul2=[295,340,385,430]
var yl2azul=71

// bolinhas verdes
var xverde2=[70,115,160,205,250]
var yl2verde2=71

// bolinhas roxas
var rx=[115,160,205,250,295,340,385,430,475]
var yl3roxa=117

//bolinhas vermelhas
var xvermelha=[205,250,295]
var yl4vermelha=163

var tela=0;

var disparoAmar = false;
var disparoAzul = false;
var disparoVerde = false;
var disparoVerm = false;
var disparoLar=false;
var disparoRox=false;

var songbeg
var song1
var songend

function preload(){
  img=loadImage('pintor.png');
  
  img2=loadImage('creditos.png');
  
  atirador=loadImage('atirador.png');
  
  balde=loadImage('balde.png');
  
  bolha1=loadImage('bolha1.png');
  
  modelo=loadImage('modelo.png');
  
  regra=loadImage('regra.png');
  
  comandos=loadImage('comandos.png');
  
  sad=loadImage('sad.png');
  
  angry=loadImage('angry.png')
  
  happy=loadImage('happy.png')

  font=loadFont('BabySchoolItalic.ttf');
  songbeg=loadSound('beggining.mp3')
}

function setup() {
  createCanvas(500, 580);
  textFont(font);
    songbeg.play()
}


function draw() {
  //Tela inicial
  if(tela==0){
    background(50);
  
    image(img,0,0);
  
    fill('#FEC5EC');
    stroke('#FC46AA');
    strokeWeight(4);
    rect(xMenu1,yMenu1,l, h, 20);
    rect(xMenu2,yMenu2,l, h, 20);
    rect(xMenu3,yMenu3,l, h, 20);
    
    textAlign(CENTER);
    fill(50)
    textSize(40);
    text('Aprendendo as cores',10,40,width)
    
    noStroke();
    fill(50);
    textSize(32);
    text("Jogar", 180, 115, 70,width);
    text("Tutorial",280,195,70,width);
    text("Créditos",380,275,70,width);
    
  
    if((pmouseX>=xMenu1 && pmouseX<=xMenu1+l)&&(pmouseY>=yMenu1&& pmouseY<=yMenu1+h)){
      
      stroke('#FC46AA');
      strokeWeight(4);
      text("Jogar", 180, 115, 70,width);
      
      noStroke();
      text("Tutorial",280,195,70,width);
      text("Créditos",380,275,70,width);
      
      if(mouseIsPressed){
        tela=1;
        }
      }
     
    
    else if((pmouseX>=xMenu2 && pmouseX<=xMenu2+l)&&(pmouseY>=yMenu2 && pmouseY<=yMenu2+h)){
      
      stroke('#FC46AA');
      strokeWeight(4);
      text("Tutorial",280,195,70,width);
      
      noStroke();
      text("Jogar", 180, 115, 70,width);
      text("Créditos",380,275,70,width);
      
      if(mouseIsPressed){
        tela=2;
        }
      }
    
    else if((pmouseX>=xMenu3 && pmouseX<=xMenu3+l)&&(pmouseY>=yMenu3 && pmouseY<=yMenu3+h)){
      //Parte contornada do menu
      stroke('#FC46AA');
      strokeWeight(4);
      text("Créditos",380,275,70,width);
      
      //Parte sem contorno do menu
      noStroke();
      text("Jogar", 180, 115, 70,width);
      text("Tutorial",280,195,70,width);
    
      
      if(mouseIsPressed){
        tela=5;
      }
    }   
  }
  
  //Tela do jogo em ação
  
   // 1ª Fase
  else if(tela==1){
    background("#87CEFA");
    strokeWeight(1)
    textAlign(CENTER);
    
    noStroke()
    
    // Bolinhas azuis e condição para sumirem
    
    for(a=0;a<8;a++){
      fill('#0000FF')
      circle(xbazul[a],yl1azul,d)
      
      if(dist(xbazul[a],yl1azul,azulx,azuly)<35.5){
        azulx=215
        azuly=520
        disparoAzul=false;
        for(a=0;a<8;a++){
          fill('#0000FF')
          circle(xbazul[a],yl1azul,d)
          yl1azul=700
        }
      }
      else if(dist(xbazul[a],yl1azul,amarx,amary)<35.5){
        amarx=135
        amary=520
        vida = vida-1
        disparoAmar=false;
      }
      else if(dist(xbazul[a],yl1azul,vermx,vermy)<35.5){
        vermx=295
        vermy=520
        vida = vida-1
        disparoVerm=false;
      }
      else if(dist(xbazul[a],yl1azul,verdx,verdy)<35.5){
        verdx=375
        verdy=520
        vida = vida-1
        disparoVerde=false;
      }
    }
        
    // Bolinhas vermelhas e condições para sumirem
    
    for(verm=0; verm<3; verm++){
      fill('#FF0000')
      circle(xbvermelha[verm],yl1vermelha,d)
      
      if(dist(xbvermelha[verm],yl1vermelha,vermx,vermy)<35.5){
        vermx=295
        vermy=520
        disparoVerm=false;
        
        for(verm=0; verm<3; verm++){
          fill('#FF0000')
          circle(xbvermelha[verm],yl1vermelha,d)
          yl1vermelha=700
        }
      }
      else if(dist(xbvermelha[verm],yl1vermelha,amarx,amary)<35.5){
        amarx=135
        amary=520
        vida = vida-1
        disparoAmar=false;
      }
      else if(dist(xbvermelha[verm],yl1vermelha,azulx,azuly)<35.5){
        azulx=215
        azuly=520
        vida = vida-1
        disparoAzul=false;
      }
      else if(dist(xbvermelha[verm],yl1vermelha,verdx,verdy)<35.5){
        verdx=375
        verdy=520
        vida = vida-1
        disparoVerde=false;
      }
    }
    
    // Bolinhas verde e condições para sumirem
    
    for(verde=0; verde<9; verde++){
      fill('#008000')
      circle(xbverde[verde],yl2verde,d)
      
      if(dist(verdx,verdy,xbverde[verde],yl2verde)<35.5){
        verdx= 375
        verdy= 520
        tela=8 // verde não é uma cor primária é secundária
        disparoVerde=false;
        
        for(verde=0; verde<9; verde++){
          fill('#008000')
          circle(xbverde[verde],yl2verde,d)
          yl2verde=700
        }
      }
      else if(dist(xbverde[verde],yl2verde,amarx,amary)<35.5){
        amarx=135
        amary=520
        vida = vida-1
        disparoAmar=false;
      }
      else if(dist(xbverde[verde],yl2verde,azulx,azuly)<35.5){
        azulx=215
        azuly=520
        vida = vida-1
        disparoAzul=false;
      }
      else if(dist(xbverde[verde],yl2verde,vermx,vermy)<35.5){
        vermx=295
        vermy=520
        vida = vida-1
        disparoVerm=false;
      }
    }
 
    // Bolinhas amarelas e condições para sumirem
    
    for(amar=0; amar<7;amar++){
      fill('#FFFF00')
      circle(xbamarela[amar],yl3amarela,d)
      
      if(dist(amarx,amary,xbamarela[amar],yl3amarela)<35.5){
        amarx=135
        amary=520
        disparoAmar=false;
        
        for(amar=0; amar<7;amar++){
          fill('#FFFF00')
          circle(xbamarela[amar],yl3amarela,d)
          yl3amarela=700
        }
      }
      else if(dist(xbamarela[amar],yl3amarela,verdx,verdy)<35.5){
        verdx=375
        verdy=520
        vida = vida-1
        disparoVerde=false;
    
      }
      else if(dist(xbamarela[amar],yl3amarela,azulx,azuly)<35.5){
        azulx=215
        azuly=520
        vida = vida-1
        disparoAzul=false;
      }
      else if(dist(xbamarela[amar],yl3amarela,vermx,vermy)<35.5){
        vermx=295
        vermy=520
        vida = vida-1
        disparoVerm=false;
        
      }
    }
    
    if(yl1azul==700 && yl1vermelha==700 && yl3amarela==700){
      a1x=200;
      a2x=200;
      tela=7
      
    }
    
    if(vida==0){
      tela=6
    }
    
    image(atirador,a1x,a1y);
    
    // Menu de escolha da cor
    noFill()
    stroke(50)
    strokeWeight(3)
    circle(420,561,25)

    stroke('#FC46AA')
    fill(50)
    text(vida,419,569)
  
    text("Amarela",130,550 )
    text("Azul",210,550 )
    text("Vermelha",290,550)
    text("Verde",370,550)
       
    noStroke()
    fill('#4169E1')
    text("Fase 1",0,200,width)
    text("Estoure as cores primárias",0,220,width)
    
    textSize(20);
    fill(50)
    noStroke()
    text("Escolha a cor",0,568, width)

    image(balde,405,485)
    
    // amarelo
    fill("#FFFF00")
    circle(amarx,amary,25)
        
    //verde
    fill("#008000")
    circle(verdx,verdy,25)
  
    //azul
    fill("#0000FF")
    circle(azulx,azuly,25)
    
    
    //vermelho
    fill ("#FF0000")
    circle(vermx,vermy,25)

    if(mouseIsPressed && dist(amarx, amary, mouseX, mouseY)<rmenu &&!disparoAmar){
      amarx=mouseX
      amary=mouseY
      
      if(amarx<0 || amarx>500){
        amarx=135
        amary=520
      }
      else if(dist(amarx,amary,azulx,azuly)<25){
        amarx=135
        amary=520
      }
      else if(dist(amarx, amary, vermx,vermy)<25){
        amarx=135
        amary=520
      }
      else if(dist(amarx, amary, verdx,verdy)<25){
        amarx=135
        amary=520
      }
    }

    if(mouseIsPressed && dist(azulx, azuly, mouseX, mouseY)<rmenu){
      azulx=mouseX
      azuly=mouseY
      
      if(azulx<0 || azulx>500){
        azulx=215
        azuly=520
      }
      else if(dist(azulx,azuly,amarx,amary)<25){
        azulx=215
        azuly=520
      }
      else if(dist(azulx,azuly, vermx,vermy)<25){
        azulx=215
        azuly=520
      }
      else if(dist(azulx,azuly, verdx,verdy)<25){
        azulx=215
        azuly=520
      }
    }

    if(mouseIsPressed && dist(vermx, vermy, mouseX, mouseY)<rmenu){
      vermx=mouseX
      vermy=mouseY
      
      if(vermx<0 || vermx>500){
        vermx=295
        vermy=520
      }
      else if(dist(vermx,vermy,azulx,azuly)<25){
        vermx=295
        vermy=520
      }
      else if(dist(vermx,vermy,amarx,amary)<25){
        vermx=295
        vermy=520
        
      }
      else if(dist(vermx,vermy, verdx,verdy)<25){
        vermx=295
        vermy=520
      }
    }
    
    if(mouseIsPressed && dist(verdx, verdy, mouseX, mouseY)<rmenu){
      verdx=mouseX
      verdy=mouseY
      
      if(verdx<0 || verdx>500){
        verdx= 375
        verdy= 520
      }
      
      else if(dist(verdx,verdy,azulx,azuly)<25){
        verdx= 375
        verdy= 520
      }
      else if(dist(verdx,verdy,amarx,amary)<25){
        verdx= 375
        verdy= 520
      }
      else if(dist(verdx,verdy,vermx,vermy)<25){
        verdx= 375
        verdy= 520
      }
    }
    
    if(keyIsDown(UP_ARROW) && disparoAmar==false && amary<420){ 
      disparoAmar=true;
    }
    
    if(disparoAmar==true){
      amary=amary-3
    }

    if(keyIsDown(UP_ARROW) && disparoAzul==false && azuly<420){
       disparoAzul=true;
    }
    if(disparoAzul==true){
      azuly=azuly-3 
    }

    if(keyIsDown(UP_ARROW) && disparoVerm==false && vermy<420){
      disparoVerm=true;
    }
    if(disparoVerm==true){
     vermy=vermy-3 
    }

    if(keyIsDown(UP_ARROW)  && disparoVerde==false && verdy<420)
      disparoVerde=true;    
    
    if(disparoVerde==true){
      verdy=verdy-3
    }
  }
   // 2ª Fase
  else if(tela==7){
    background("#87CEFA");
    strokeWeight(1)
    textAlign(CENTER);
    
    image(atirador,a2x,a2y);
    
    // condição para bolinhas amarelas sumirem

    for(cont=0;cont<4;cont++){
      fill("#FFFF00")
      circle(xamar2[cont],yl1amar,d)
      
      if(dist(xamar2[cont],yl1amar,amarx,amary)<35.5){
        amarx=135
        amary=520
        disparoAmar=false
        for(cont=0;cont<4;cont++){
          fill("#FFFF00")
          circle(xamar2[cont],yl1amar,d)
          yl1amar=700
        }
        tela=9
      }
      else if(dist(xamar2[cont],yl1amar,laranx,larany)<35.5){
        laranx=175
        larany=475
        vida=vida-1
        disparoLar=false
      }
      else if(dist(xamar2[cont],yl1amar,roxax,roxay)<35.5){
        roxax=335
        roxay=475
        vida = vida-1
        disparoRox=false
      }
      else if(dist(xamar2[cont],yl1amar,azulx,azuly)<35.5){
        azulx=215
        azuly=520
        vida = vida-1
        disparoAzul=false
      }
      else if(dist(xamar2[cont],yl1amar,vermx,vermy)<35.5){
        vermx=295
        vermy=520
        vida = vida-1
        disparoVerm=false
      }
      else if(dist(xamar2[cont],yl1amar,verdx,verdy)<35.5){
        verdx=375
        verdy=520
        vida = vida-1
        disparoVerde=false
      }
    }
    
    //condição para laranja sumirem
    for(cont=0;cont<7;cont++){
      fill("#FFA500")
      circle(larx[cont],yl1lar,d)
      
      if(dist(larx[cont],yl1lar,laranx,larany)<35.5){
        laranx=175
        larany=475
        disparoLar=false
        
        for(cont=0;cont<7;cont++){
          fill("#FFA500")
          circle(larx[cont],yl1lar,d)
          yl1lar=700
        }
      }
      else if(dist(larx[cont],yl1lar,roxax,roxay)<35.5){
        roxax=335
        roxay=475
        vida=vida-1
        disparoRox=false
      }
      else if(dist(larx[cont],yl1lar,amarx,amary)<35.5){
        amarx=135
        amary=520
        vida = vida-1
        disparoAmar=false
      }
      else if(dist(larx[cont],yl1lar,azulx,azuly)<35.5){
        azulx=215
        azuly=520
        vida = vida-1
        disparoAzul=false
      }
      else if(dist(larx[cont],yl1lar,vermx,vermy)<35.5){
        vermx=295
        vermy=520
        vida = vida-1
        disparoVerm=false
      }
      else if(dist(larx[cont],yl1lar,verdx,verdy)<35.5){
        verdx=375
        verdy=520
        vida = vida-1
        disparoVerde=false
      }
    }
    
    // condição para verde sumirem
    for(cont=0;cont<5;cont++){
      fill("#008000")
      circle(xverde2[cont],yl2verde2,d)
      
      if(dist(xverde2[cont],yl2verde2,verdx,verdy)<35.5){
        verdx= 375
        verdy= 520
        disparoVerde=false
        
        for(cont=0;cont<5;cont++){
          fill("#008000")
          circle(xverde2[cont],yl2verde2,d)
          yl2verde2=700
        }
      }
      else if(dist(xverde2[cont],yl2verde2,roxax,roxay)<35.5){
        roxax=335
        roxay=475
        vida=vida-1
        disparoRox=false
      }
      else if(dist(xverde2[cont],yl2verde2,amarx,amary)<35.5){
        amarx=135
        amary=520
        vida = vida-1
        disparoAmar=false
      }
      else if(dist(xverde2[cont],yl2verde2,azulx,azuly)<35.5){
        azulx=215
        azuly=520
        vida = vida-1
        disparoAzul=false
      }
      else if(dist(xverde2[cont],yl2verde2,vermx,vermy)<35.5){
        vermx=295
        vermy=520
        vida = vida-1
        disparoVerm=false
      }
      else if(dist(xverde2[cont],yl2verde2,laranx,larany)<35.5){
        laranx=175
        larany=475
        vida = vida-1
        disparoLar=false
      }
    }
    
    //condição para azuis sumirem
    for(cont=0;cont<4;cont++){
      fill("#0000FF")
      circle(xazul2[cont],yl2azul,d)
      
      if(dist(xazul2[cont],yl2azul,azulx,azuly)<35.5){
        azulx=215
        azuly=520
        disparoAzul=false
        
        for(cont=0;cont<5;cont++){
          fill("#0000FF")
          circle(xazul2[cont],yl2azul,d)
          yl2azul=700
        }
        tela=9
      }
      
      else if(dist(xazul2[cont],yl2azul,roxax,roxay)<35.5){
        roxax=335
        roxay=475
        vida=vida-1
        disparoRox=false
      }
      else if(dist(xazul2[cont],yl2azul,amarx,amary)<35.5){
        amarx=135
        amary=520
        vida = vida-1
        disparoAmar=false
      }
      else if(dist(xazul2[cont],yl2azul,verdx,verdy)<35.5){
        verdx= 375
        verdy= 520
        vida = vida-1
        disparoVerde=false
      }
      else if(dist(xazul2[cont],yl2azul,vermx,vermy)<35.5){
        vermx=295
        vermy=520
        vida = vida-1
        disparoVerm=false
      }
      else if(dist(xazul2[cont],yl2azul,laranx,larany)<35.5){
        laranx=175
        larany=475
        vida = vida-1
        disparoLar=false
      }
    }
    //condição para bolinhas roxas sumirem
    
    for(cont=0;cont<7;cont++){
      fill("#8B008B")
      circle(rx[cont],yl3roxa,d)
      
      if(dist(rx[cont],yl3roxa,roxax,roxay)<35.5){
        roxax=335
        roxay=475
        disparoRox=false
        
        for(cont=0;cont<7;cont++){
          fill("#8B008B")
          circle(rx[cont],yl3roxa,d)
          yl3roxa=700
        }
      }
      else if(dist(rx[cont],yl3roxa,azulx,azuly)<35.5){
        azulx=215
        azuly=520
        vida=vida-1
        disparoAzul=false
      }
      else if(dist(rx[cont],yl3roxa,amarx,amary)<35.5){
        amarx=135
        amary=520
        vida = vida-1
        disparoAmar=false
      }
      else if(dist(rx[cont],yl3roxa,verdx,verdy)<35.5){
        verdx= 375
        verdy= 520
        vida = vida-1
        disparoVerde=false
      }
      else if(dist(rx[cont],yl3roxa,vermx,vermy)<35.5){
        vermx=295
        vermy=520
        vida = vida-1
        disparoVerm=false
      }
      else if(dist(rx[cont],yl3roxa,laranx,larany)<35.5){
        laranx=175
        larany=475
        vida = vida-1
        disparoLar=false
      } 
    }
    // condição para bolinhas vermelhas sumirem
    
    for(cont=0;cont<3;cont++){
      fill("#FF0000")
      circle(xvermelha[cont],yl4vermelha,d)
      
      if(dist(xvermelha[cont],yl4vermelha,vermx,vermy)<35.5){
        vermx=295
        vermy=520
        disparoVerm=false
        
        for(cont=0;cont<3;cont++){
          fill("#FF0000")
          circle(xvermelha[cont],yl4vermelha,d)
          yl4vermelha=700
        }
        tela=9
      }
      else if(dist(xvermelha[cont],yl4vermelha,azulx,azuly)<35.5){
        azulx=215
        azuly=520
        vida=vida-1
        disparoAzul=false
      }
      else if(dist(xvermelha[cont],yl4vermelha,amarx,amary)<35.5){
        amarx=135
        amary=520
        vida = vida-1
        disparoAmar=false
      }
      else if(dist(xvermelha[cont],yl4vermelha,verdx,verdy)<35.5){
        verdx= 375
        verdy= 520
        vida = vida-1
        disparoVerde=false
      }
      else if(dist(xvermelha[cont],yl4vermelha,roxax,roxay)<35.5){
        roxax=335
        roxay=475
        vida = vida-1
        disparoRox=false
      }
      else if(dist(xvermelha[cont],yl4vermelha,laranx,larany)<35.5){
        laranx=175
        larany=475
        vida = vida-1
        disparoLar=false
      } 
    }
    
    if(yl3roxa==700 && yl1lar==700 && yl2verde2==700){
      tela=10
      
      a1x=200;
      a2x=200;
    }
    
    if(vida==0){
      tela=6
    }
  
    // Menu de escolha da cor
    
    textSize(20);
    fill(50)
    noStroke()
    text("Escolha a cor",0,568, width)

    image(balde,405,485)

    noFill()
    stroke(50)
    strokeWeight(3)
    circle(420,561,25)

    stroke('#FC46AA')
    fill(50)
    text(vida,419,569)
    
    
    text("Laranja",173,502)
    text("Roxa",333,502)
    text("Amarela",130,550 )
    text("Azul",210,550 )
    text("Vermelha",290,550)
    text("Verde",370,550)
       
    noStroke()
    fill('#4169E1')
    text("Fase 2",0,230,width)
    text("Estoure as cores secundárias",0,250,width)
    
    // laranja
    fill("#FFA500")
    circle(laranx,larany,25)  
    
    // roxa
    fill("#8B008B")
    circle(roxax,roxay,25)  
    
    // amarela
    fill("#FFFF00")
    circle(amarx,amary,25)
        
    //verde
    fill("#008000")
    circle(verdx,verdy,25)
  
    //azul
    fill("#0000FF")
    circle(azulx,azuly,25)
    
    
    //vermelho
    fill ("#FF0000")
    circle(vermx,vermy,25)
        
    // Condições para puxar bolinha e atirar
    if(mouseIsPressed && dist(laranx, larany, mouseX, mouseY)<rmenu){
      laranx=mouseX
      larany=mouseY
      
      if(laranx<0 || laranx>500){
        laranx=175
        larany=475
      }
      else if(dist(laranx,larany,amarx,amary)<25){
        laranx=175
        larany=475
      }
      else if(dist(laranx,larany,roxax,roxay)<25){
        laranx=175
        larany=475
      }
      else if(dist(laranx,larany,azulx,azuly)<25){
        laranx=175
        larany=475
      }
      else if(dist(laranx, larany, vermx,vermy)<25){
        laranx=175
        larany=475
      }
      else if(dist(laranx, larany, verdx,verdy)<25){
        laranx=175
        larany=475
      }
    }
    if(mouseIsPressed && dist(roxax, roxay, mouseX, mouseY)<rmenu){
      roxax=mouseX
      roxay=mouseY
       
      if(roxax<0 || roxax>500){
        roxax=335
        roxay=475
      }
      else if(dist(roxax, roxay, laranx, larany)<25){
       roxax=335
       roxay=475

      }
      else if(dist(roxax,roxay,amarx, amary)<25){
        roxax=335
        roxay=475
      }
      else if(dist(roxax,roxay,azulx,azuly)<25){
        roxax=335
        roxay=475
      }
      else if(dist(roxax,roxay, vermx,vermy)<25){
        roxax=335
        roxay=475
      }
      else if(dist(roxax,roxay, verdx,verdy)<25){
        roxax=335
        roxay=475
      }
    }
    if(mouseIsPressed && dist(amarx, amary, mouseX, mouseY)<rmenu){
      amarx=mouseX
      amary=mouseY
       
      if(amarx<0 || amarx>500){
        amarx=135
        amary=520
      }
      else if(dist(amarx, amary, laranx, larany)<25){
        amarx=135
        amary=520
      }
      else if(dist(amarx, amary, roxax,roxay)<25){
        amarx=135
        amary=520
      }
      else if(dist(amarx,amary,azulx,azuly)<25){
        amarx=135
        amary=520
      }
      else if(dist(amarx, amary, vermx,vermy)<25){
        amarx=135
        amary=520
      }
      else if(dist(amarx, amary, verdx,verdy)<25){
        amarx=135
        amary=520
      }
    }
    if(mouseIsPressed && dist(azulx, azuly, mouseX, mouseY)<rmenu){
      azulx=mouseX
      azuly=mouseY
      
      if(azulx<0 || azulx>500){
        azulx=215
        azuly=520
      }
      else if(dist(azulx,azuly, laranx, larany)<25){
        azulx=215
        azuly=520
      }
      else if(dist(azulx,azuly, roxax,roxay)<25){
        azulx=215
        azuly=520
      }
      if(dist(azulx,azuly,amarx,amary)<25){
        azulx=215
        azuly=520
      }
      else if(dist(azulx,azuly, vermx,vermy)<25){
        azulx=215
        azuly=520
      }
      else if(dist(azulx,azuly, verdx,verdy)<25){
        azulx=215
        azuly=520
      }
    }
    if(mouseIsPressed && dist(vermx, vermy, mouseX, mouseY)<rmenu){
      vermx=mouseX
      vermy=mouseY
      
      if(vermx<0 || vermx>500){
        vermx=295
        vermy=520
      }
      else if(dist(vermx,vermy, laranx, larany)<25){
        vermx=295
        vermy=520
      }
      else if(dist(vermx,vermy, roxax,roxay)<25){
        vermx=295
        vermy=520
      }
      else if(dist(vermx,vermy,azulx,azuly)<25){
        vermx=295
        vermy=520
      }
      else if(dist(vermx,vermy,amarx,amary)<25){
        vermx=295
        vermy=520
      }
      else if(dist(vermx,vermy, verdx,verdy)<25){
        vermx=295
        vermy=520
      }
    }
    if(mouseIsPressed && dist(verdx, verdy, mouseX, mouseY)<rmenu){
      verdx=mouseX
      verdy=mouseY
      
      if(verdx<0 || verdx>500){
        verdx= 375
        verdy= 520
      }
      else if(dist(verdx,verdy, laranx, larany)<25){
        verdx= 375
        verdy= 520
      }
      else if(dist(verdx,verdy, roxax,roxay)<25){
        verdx= 375
        verdy= 520
      }
      else if(dist(verdx,verdy,azulx,azuly)<25){
        verdx= 375
        verdy= 520
      }
      else if(dist(verdx,verdy,amarx,amary)<25){
        verdx= 375
        verdy= 520
      }
      else if(dist(verdx,verdy,vermx,vermy)<25){
        verdx= 375
        verdy= 520
      }
    }
  
    if(keyIsDown(UP_ARROW) && disparoLar==false && larany<420){
      disparoLar=true
    }
    if(disparoLar==true){
      larany=larany-3
    }
    
    if(keyIsDown(UP_ARROW) && disparoRox==false && roxay<420){
      disparoRox=true
    }
    if(disparoRox==true){
      roxay=roxay-3
    }
      
    
    if(keyIsDown(UP_ARROW) && disparoAmar==false && amary<420){
      disparoAmar=true
    }
    if(disparoAmar==true){
      amary=amary-3
    }

    if(keyIsDown(UP_ARROW) && disparoAzul==false && azuly<420){
      disparoAzul=true
    }
    if(disparoAzul==true){
      azuly=azuly-3
    }
      

    if(keyIsDown(UP_ARROW) && disparoVerm==false && vermy<420){
      disparoVerm=true
    }
    if(disparoVerm==true){
      vermy=vermy-3
    }
      
    if(keyIsDown(UP_ARROW) && disparoVerde==false && verdy<420){
      disparoVerde=true
    }
    if(disparoVerde==true){
      verdy=verdy-3
    }   
  }

  //1ª Tela do tutorial
  if(tela==2){
    background('#87CEFA'); 
    
    image(bolha1,20,59);
    
    fill('#FEC5EC');
    stroke('#FC46AA');
    strokeWeight(4);    
    rect(435,542,60,30,20);
    rect(390,505,90,35,20);
    
    textAlign(CENTER);
    noStroke();
    fill(50);
    textSize(32);
    text('Tutorial',0,40,width);
    textSize(25);
    text('Próximo',190,530,width)
    text('Sair',219,565,width);
    
    if((pmouseX>=435 && mouseX<=495) && (pmouseY>=542 && pmouseY<=572)){
      stroke('#FC46AA');
      strokeWeight(4);
      textSize(25);
      text('Sair',219,565,width)
      
      if(mouseIsPressed){
        tela=0;
        
      }
    }
    else if((pmouseX>=390 && mouseX<=480) && (pmouseY>=505 && pmouseY<=540)){
      stroke('#FC46AA');
      strokeWeight(4);
      text('Próximo',190,530,width)
      
      noStroke();
      text('Sair',219,565,width)
      
      if(mouseIsPressed){
        tela=3;
      }  
    }
  } 
  
  // 2ª Tela do tutorial
  else if(tela==3){
    background('#87CEFA');
    image(regra,0,80)
       
    fill('#FEC5EC');
    stroke('#FC46AA');
    strokeWeight(4);    
    
    rect(205,500,80,40,20)// ret do sair
    rect(185,460,120,40,20) // ret do próximo
    textAlign(CENTER)

    textSize(32);
    noStroke();
    fill(50);
    text("Tutorial",0,50,width);
    text('Sair',0,530,width); 
    text("Próximo",0,490,width);
    
    if(mouseX>=185 && pmouseX<=305 &&pmouseY>=460 && pmouseY<=500) {
      stroke('#FC46AA');
      strokeWeight(4)
      fill(50);
      text("Próximo",0,490,width);
      
      
      if(mouseIsPressed){
        tela=4;
      }
    }
    if(mouseX>=205 && pmouseX<=285 &&pmouseY>=500 && pmouseY<=540) {
      stroke('#FC46AA');
      strokeWeight(4)
      fill(50);
      text('Sair',0,530,width);
      if(mouseIsPressed){
        tela=0;
      }
    
    }
  } 

  // 3ª Tela do tutorial - comandos
  else if(tela==4){
    
    background('#87CEFA')
    textAlign(CENTER)

    textSize(32);
    noStroke();
    fill(50);
    text("Tutorial",0,50,width)
    
    textSize(30)
    image(comandos,5,80)
    text("Comandos:",30,130,width)
    
    fill('#FEC5EC');
    stroke('#FC46AA');
    strokeWeight(4); 
    rect(205,500,80,40,20)// ret do sair
    
    fill(50)
    noStroke()
    text('Sair',0,530,width); 
    
    if(mouseX>=205 && pmouseX<=285 &&pmouseY>=500 && pmouseY<=540) {
      stroke('#FC46AA');
      strokeWeight(4)
      fill(50);
      text('Sair',0,530,width);
      if(mouseIsPressed){
        tela=0;
      }
    
    }
    
  }
  
  //Tela dos créditos
  else if(tela==5){
    background('#87CEFA');
    image(img2,50,40)
    
    
    fill('#FEC5EC');
    stroke('#FC46AA');
    strokeWeight(4);    
    rect(360,500,100,40,20);
    
    textAlign(CENTER);
    noStroke();
    fill(50);
    textSize(32);
    text('Créditos',0,35, width);
    text('Sair',163,530,width);
    textSize(18);
    text('Lorraine Gregório L. de Oliveira\nBela em Ecologia',90,60,width)
    text('Igor Rafael R. de Oliveira\nProf. de Química',90,155,width)
    text('Izaque Gregório R. de Oliveira\nProf. de Artes',90,250,width)
    text('Idalmis Milian S. Martins\nProf.ª de Lógica de Programação\nECT',90,330,width)
    text('Orivaldo Vieira De S. Junior\nProf. de Lógica de Programação\nECT',90,410,width)
    text('Música disponibilizada por Ietsu',90,490,width)
    
    if((pmouseX>=360 && mouseX<=460) && (pmouseY>=500 && pmouseY<=540)){
      stroke('#FC46AA');
      strokeWeight(4);
      textSize(32);
      text('Sair',163,530,width);
      if(mouseIsPressed){
        tela=0;
        }
      }
   }
  
  //Tela de game over
  
  // por zerar vidas
  else if(tela==6){
    
    background('#000000') 
    
    image(sad,10,250)
    
    fill('#000000') 
    stroke("#FF1493") 
    rect(130,270,250,40, 20,width)
    rect(200,310,100,40, 20,width) // ret sair
    
    fill('#F8F8FF')
    stroke("#FF1493")
    strokeWeight(4) 
    textAlign(CENTER)
    textSize(60)
    text("GAME OVER",0,250,width)
    textSize(30) 
    noStroke()
    text("Tentar novamente",5,300,width)
    text("Sair", 0,340, width)
    
    if((pmouseX>=130 && mouseX<=380) && (pmouseY>=270 && pmouseY<=310)){
      stroke('#FC46AA');
      strokeWeight(4);
      text("Tentar novamente",5,300,width)
      a1x=200;
      a2x=200;
      
     //para as bolinhas voltarem às posições iniciais
      yl1azul=25
      yl1vermelha=25
      yl2verde=71
      yl3amarela=117
      
      yl1amar=25
      yl1lar=25
      yl2azul=71
      yl2verde2=71
      yl3roxa=117
      yl4vermelha=163

      vida=3
      if(mouseIsPressed){
        tela=1;
        
      }
   }
   if((pmouseX>=200 && mouseX<=300) && (pmouseY>=310 && pmouseY<=350)){
      stroke('#FC46AA');
      strokeWeight(4);
      text("Sair", 0,340, width)
      a1x=200;
      a2x=200;
     
      //para as bolinhas voltarem às posições iniciais 
      yl1azul=25
      yl1vermelha=25
      yl2verde=71
      yl3amarela=117
      
      yl1amar=25
      yl1lar=25
      yl2azul=71
      yl2verde2=71
      yl3roxa=117
      yl4vermelha=163
      
      vida=3
      if(mouseIsPressed){
        tela=0;
        
      }
    } 
  }
  
  // Por errar cor primária
  else if(tela==8){
     background('#000000') 
     
     
     image(sad,10,250)

     fill('#000000') 
     stroke("#FF1493") 
     rect(130,270,250,40, 20,width)
     rect(200,310,100,40, 20,width) // ret sair

     fill('#F8F8FF')
     stroke("#FF1493")
     strokeWeight(4) 
     textAlign(CENTER)
     textSize(60)
     text("GAME OVER",0,250,width)
     textSize(30) 
     noStroke()
     text("Não é cor primária",5,200,width)
     text("Tentar novamente",5,300,width)
     text("Sair", 0,340, width)
    
   if((pmouseX>=130 && mouseX<=380) && (pmouseY>=270 && pmouseY<=310)){
      stroke('#FC46AA');
      strokeWeight(4);
      text("Tentar novamente",5,300,width)
      
      a1x=200;
      a2x=200;
     //para as bolinhas voltarem às posições iniciais
      yl1azul=25
      yl1vermelha=25
      yl2verde=71
      yl3amarela=117
      
      yl1amar=25
      yl1lar=25
      yl2azul=71
      yl2verde2=71
      yl3roxa=117
      yl4vermelha=163

      vida=3
      if(mouseIsPressed){
        tela=1;
        
      }
   }
   if((pmouseX>=200 && mouseX<=300) && (pmouseY>=310 && pmouseY<=350)){
      stroke('#FC46AA');
      strokeWeight(4);
      text("Sair", 0,340, width)
     
      a1x=200;
      a2x=200;
     
      //para as bolinhas voltarem às posições iniciais 
      yl1azul=25
      yl1vermelha=25
      yl2verde=71
      yl3amarela=117
      
      yl1amar=25
      yl1lar=25
      yl2azul=71
      yl2verde2=71
      yl3roxa=117
      yl4vermelha=163
      
     vida=3
     if(mouseIsPressed){
        tela=0;
        
      }
    }
  }
  
  //Por errar cor secundária
  else if(tela==9){
   background('#000000') 
   
   image(angry,170,20)
   fill('#000000') 
   stroke("#FF1493") 
   rect(130,270,250,40, 20,width)
   rect(200,310,100,40, 20,width) // ret sair
   
   
   fill('#F8F8FF')
   stroke("#FF1493")
   strokeWeight(4) 
   textAlign(CENTER)
   textSize(60)
   text("GAME OVER",0,250,width)
   textSize(30) 
   noStroke()
   text("Não é cor secundária",0,200,width)
   text("Tentar novamente",5,300,width)
   text("Sair", 0,340, width)
    
   if((pmouseX>=130 && mouseX<=380) && (pmouseY>=270 && pmouseY<=310)){
      stroke('#FC46AA');
      strokeWeight(4);
      text("Tentar novamente",5,300,width)
      
      a1x=200;
      a2x=200;
      
      yl1azul=25
      yl1vermelha=25
      yl2verde=71
      yl3amarela=117
      
      yl1amar=25
      yl1lar=25
      yl2azul=71
      yl2verde2=71
      yl3roxa=117
      yl4vermelha=163
     
      vida=3

      if(mouseIsPressed){
        tela=1;
        
      }
   }
   if((pmouseX>=200 && mouseX<=300) && (pmouseY>=310 && pmouseY<=350)){
      stroke('#FC46AA');
      strokeWeight(4);
      text("Sair", 0,340, width)
      
      a1x=200;
      a2x=200;
     
      yl1azul=25
      yl1vermelha=25
      yl2verde=71
      yl3amarela=117
      
      yl1amar=25
      yl1lar=25
      yl2azul=71
      yl2verde2=71
      yl3roxa=117
      yl4vermelha=163
      
      vida=3
     
      if(mouseIsPressed){
        tela=0;
        
      }
    }
  }
  
  //Tela de vitória
  else if(tela==10){
    background('#000000') 
    fill('#000000') 
    stroke("#FF1493") 
    rect(200,310,100,40, 20,width) // ret sair
    
    image(happy,30,255)
    fill('#F8F8FF')
    stroke("#FF1493")
    strokeWeight(4) 
    textAlign(CENTER)
    textSize(60)
    text("Parabéns!",0,200,width)
    textSize(30)
    text("Você é um mestre das cores!",0,250,width)
    noStroke()
    text("Sair", 0,340, width)
    
    if((pmouseX>=200 && mouseX<=300) && (pmouseY>=310 && pmouseY<=350)){
      stroke('#FC46AA');
      strokeWeight(4);
      text("Sair", 0,340, width)
      
      a1x=200;
      a2x=200;
      
      yl1azul=25
      yl1vermelha=25
      yl2verde=71
      yl3amarela=117
      
      yl1amar=25
      yl1lar=25
      yl2azul=71
      yl2verde2=71
      yl3roxa=117
      yl4vermelha=163
      
      vida=3
     
      if(mouseIsPressed){
        tela=0;
        
      }
    }
    
    
  }
}
function keyPressed(){
  // movimento do atirador - Fase 1
    if(key=="ArrowLeft"&& a1x>0)
    a1x=a1x-25
   if(key=="ArrowRight" && a1x<450)
    a1x=a1x+25
  
   if(key=="ArrowLeft"&& a2x>0)
    a2x=a2x-25
   if(key=="ArrowRight" && a2x<450)
    a2x=a2x+25
  
  // movimento da bola laranja
  if(key=="ArrowLeft"&&laranx>30 && larany<450)
    laranx=laranx-25
  if(key=="ArrowRight"&&laranx<450 && larany<450)
    laranx=laranx+25
  
  // movimento da bola roxa
  if(key=="ArrowLeft"&&roxax>30 && roxay<450)
    roxax=roxax-25
  if(key=="ArrowRight"&&roxax<450 && roxay<450)
    roxax=roxax+25
    
  // movimento da bola amarela
  if(key=="ArrowLeft"&&amarx>30 && amary<450)
    amarx=amarx-25
  if(key=="ArrowRight"&&amarx<450 && amary<450)
    amarx=amarx+25
    
 //movimento da bola azul
  if(key=="ArrowLeft"&&azulx>30 && azuly<450)
   
   azulx=azulx-25
  if(key=="ArrowRight"&&azulx<450 && azuly<450)
    azulx=azulx+25
  
  //movimento da bola vermelha
   if(key=="ArrowLeft"&&vermx>30 && vermy<450)
    vermx=vermx-25
  if(key=="ArrowRight"&&vermx<450 && vermy<450)
    vermx=vermx+25
  
  //movimento da bola verde
  if(key=="ArrowLeft"&&verdx>30 && verdy<450)
    verdx=verdx-25
  if(key=="ArrowRight"&&verdx<450 && verdy<450)
    verdx=verdx+25
}






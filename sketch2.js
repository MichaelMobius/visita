var _0x3b36=["\x20\x41\x75\x6D\x65\x6E\x74\x61\x72\x20\x6B\x65\x69\x6B\x6F\x20\x70\x61\x72\x61\x20\x35\x30\x30\x20\x65\x20\x65\x75\x20\x66\x61\x7A\x65\x72\x20\x76\x69\x73\x69\x74\x61\x2E","\x69\x6D\x61\x67\x65\x6E\x2F\x69\x6D\x61\x67\x65\x6E\x2E\x6A\x70\x67","\x77\x69\x64\x74\x68","\x68\x65\x69\x67\x68\x74","\x47\x65\x6F\x72\x67\x69\x61","\x63\x68\x61\x72\x41\x74","\x6C\x65\x6E\x67\x74\x68","\x73","\x53","\x50\x5F\x32\x5F\x33\x5F\x33\x5F\x30\x31\x2E\x70\x6E\x67","\x72","\x52","\x6E","\x4E","\x61","\x41","\x76","\x56","\x6D","\x4D","\x74","\x54"];var x=0,y=0;var stepSize=5.0;var letters=_0x3b36[0];var fontSizeMin=3;var angleDistortion=0.0;var counter=0;var bg;function preload(){bg= loadImage(_0x3b36[1])}function setup(){createCanvas(windowWidth,windowHeight);background(255);image(bg,(windowWidth- (bg[_0x3b36[2]]* windowHeight)/ bg[_0x3b36[3]])/ 2,0,(bg[_0x3b36[2]]* windowHeight)/ bg[_0x3b36[3]],windowHeight);smooth();cursor(CROSS);x= mouseX;y= mouseY;textAlign(LEFT);fill(0)}function draw(){if(mouseOver){var _0x91ecxc=dist(x,y,mouseX,mouseY);textFont(_0x3b36[4]);textSize(fontSizeMin+ _0x91ecxc/ 2);var _0x91ecxd=letters[_0x3b36[5]](counter);;;stepSize= textWidth(_0x91ecxd);if(_0x91ecxc> stepSize){var _0x91ecxe=atan2(mouseY- y,mouseX- x);push();translate(x,y);rotate(_0x91ecxe+ random(angleDistortion));text(_0x91ecxd,0,0);pop();counter++;if(counter> letters[_0x3b36[6]]- 1){counter= 0};x= x+ cos(_0x91ecxe)* stepSize;y= y+ sin(_0x91ecxe)* stepSize}}}function mouseOver(){x= mouseX;y= mouseY}function keyTyped(){if(key== _0x3b36[7]|| key== _0x3b36[8]){save(_0x3b36[9])};if(key== _0x3b36[10]|| key== _0x3b36[11]){fill(255,0,0)};if(key== _0x3b36[12]|| key== _0x3b36[13]){fill(0,0,0)};if(key== _0x3b36[14]|| key== _0x3b36[15]){fill(0,0,255)};if(key== _0x3b36[16]|| key== _0x3b36[17]){fill(0,255,0)};if(key== _0x3b36[18]|| key== _0x3b36[19]){fill(236,110,0)};if(key== _0x3b36[20]|| key== _0x3b36[21]){fill(255,255,255,0)}}function keyPressed(){if(keyCode== DELETE|| keyCode== BACKSPACE){background(255);image(bg,(windowWidth- (bg[_0x3b36[2]]* windowHeight)/ bg[_0x3b36[3]])/ 2,0,(bg[_0x3b36[2]]* windowHeight)/ bg[_0x3b36[3]],windowHeight)};if(keyCode== UP_ARROW){angleDistortion+= 0.1};if(keyCode== DOWN_ARROW){angleDistortion-= 0.1}}
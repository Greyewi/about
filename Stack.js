class Stack {
  constructor(){
    this.items = []
    this.size = 0
  }

  push(item){
    this.items[this.size] = item
    this.size++
    return this.size - 1
  }

  pop(){
    if(!this.size) {
      return null
    }

    this.size--
    return this.items[this.size]

  }

  print(){
    for(let i = this.size -1; i >= 0; i--){
      console.log(i, this.items[i])
    }
  }
}

const myStack = new Stack()
myStack.push(100)
myStack.push(200)
myStack.push(300)
myStack.push(400)
myStack.push(500)

myStack.print()
console.log('------')
console.log(myStack.pop())
console.log('------')
myStack.print()



сlass AnimationCanvas {

  constructor (idName,urlSequence,frameCount,screenPart) {
    this.idName = idName;
    this.urlSequence = urlSequence;
    this.frameCount = frameCount;
    this.screenPart = screenPart;
    this.canvas = document.getElementById(this.idName);
    this.context = this.canvas.getContext("2d");


    for (let i = 0; i < (frameCount+1); i++) {
      this.img = new Image();
      this.img.src = this.currentFrame(i);
    }


    if (window.innerHeight>window.innerWidth) {
      this.canvas.width=1000;
      this.canvas.height=1000;
    } else {
      this.canvas.width=900;
      this.canvas.height=900;}

    this.drawStart();

  }//end constructor


  get centr_tochka() {return Math.floor(window.innerHeight/this.screenPart);}
  get centr_canvas() {return this.canvas.getBoundingClientRect().top+Math.floor(this.canvas.offsetHeight/2);}



  currentFrame(index) {return (`${this.urlSequence}${index.toString().padStart(4, '0')}.jpg`);}


  updateImage(index) {
    this.img.src = this.currentFrame(index);
    requestAnimationFrame(() => this.context.drawImage(this.img, 0, 0,this.canvas.width, this.canvas.height));
// this.context.drawImage(this.img, 0, 0,this.canvas.width, this.canvas.height);
  }



  drawStart() {
    if ((this.centr_canvas>0)&&(this.centr_canvas<this.centr_tochka)) {
      this.mnojitel = this.centr_canvas/this.centr_tochka;
    }
    else {
      if (this.centr_canvas<0) this.mnojitel = 0;
      if (this.centr_canvas>this.centr_tochka) this.mnojitel = 1;
    }
    this.img.src=this.currentFrame(Math.floor(this.mnojitel*this.frameCount));
    this.img.onload = () => {
      this.context.drawImage(this.img, 0, 0,this.canvas.width, this.canvas.height);}
    this.flag=this.mnojitel;

  }//end drawStart


  drawScroll() {

    if ((this.centr_canvas>0)&&(this.centr_canvas<this.centr_tochka)) {
      this.mnojitel = this.centr_canvas/this.centr_tochka;
    }
    else {
      if (this.centr_canvas<0) this.mnojitel = 0;
      if (this.centr_canvas>this.centr_tochka) this.mnojitel = 1;
    }

    if (this.flag!=this.mnojitel) {
      this.updateImage(Math.floor(this.mnojitel*this.frameCount));
      this.flag=this.mnojitel;
    }

  }//end drawScroll




}//end class





const background = new AnimationCanvas("background","https://3dlab.site/files/apple3/SequenceApple",59,2);
const robot = new AnimationCanvas("robot","https://3dlab.site/files/robot/RobotSequence",60,1);




window.addEventListener('scroll', () => {
  background.drawScroll();
  robot.drawScroll(); });



window.onload = function() {
  background.drawStart();
  robot.drawStart();}.
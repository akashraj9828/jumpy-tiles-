function tile() {

    this.xvel=50
    this.yvel=50
    this.x = 0
    this.prevx=0;
    this.y = 0
    this.prevy=0;
    this.g=0.2
    this.gravity=this.g
    this.accx=0
    this.accy=0
    this.t=0
    this.dir=0
    this.count=0
    this.mframe=30

    // this.accelerate=function(){
    //     xvel=accx*t

    // }

    this.reset=function(){
        this.dir=0
        this.count=0
        this.gravity=this.g
        
    }
    this.draw = function () {
        // del=this.prevy-this.y
        // console.log(del)
        fill(0)
        // push()
        // rotate(PI / 4);
        rectMode(CENTER);
        // pop()
        // push()
        // rotate(0.3)
       
     // rect(this.x, this.y, 40, 40)
     imageMode(CENTER);
     image(gif,this.x,this.y, 80, 80);
       
     // pop()
        // this.prevx=this.x
        // this.prevy=this.y
        // this.y+=this.gravity;
        this.gravity*=1.01
        if(this.y>height/2)
            {
                this.y=0
            }

        if(this.dir==-1&&this.count<this.mframe){
            this.xvel=3
            // this.yvel=11
            this.gravity=10
            this.x+=-this.xvel;
            this.y+=-this.gravity
          this.xvel*=1.01
           this.yvel*=5
           this.count++
           console.log("left")
        }
        else if(this.dir==1&&this.count<this.mframe){
            this.xvel=3
            // this.yvel=11
            this.gravity=10
            this.x+=this.xvel;
            this.y+=-this.gravity
           this.xvel*=1.01
          this.yvel*=1.2
          this.count++
           console.log("right")
        }
        else{
           this.reset()
           this.y+=this.gravity;
        }
    }

    // this.update = function (key) {
    //     // this.y = mouseY
    //     if(key==-1){
            
    //     }
    // }

    // this.moveL=function(){
    //     del=this.prevx-this.x
    //     if(abs(del)==0){
    //         // console.log("xvel=0:::"+del);
    //     }
    //     else{
    //         this.x+=-1
    //     }
    //     }
    

    // this.setvel=function(key){
    //     if(key==-1){
    //         this.dir=-1
    //         // this.x+=-this.xvel;
    //         // this.y-=100
    //         // this.moveL();
    //         // draw(-1);
            
    //     }
    //     else if(key==1){
    //        this.dir=1
    //         // this.x+=this.xvel;
    //         // this.y-=100
    //     }
    // }
}

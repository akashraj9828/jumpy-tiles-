function tile() {

    this.xvel=50
    this.x = 0
    this.prevx=0;
    this.y = 0
    this.prevy=0;
    this.gravity=5


    this.draw = function (dir) {
        del=this.prevy-this.y
        console.log(del)
        fill(0)
        push()
        rotate(PI / 4);
        rectMode(CENTER);
        pop()
        rect(this.x, this.y, 100, 100)
        this.prevx=this.x
        this.prevy=this.y
        this.y+=this.gravity;

        if(dir==-1){
            this.xvel=1
            this.x+=-this.xvel;
            this.y-=100
            if(this.xvel<50){
            this.xvel++
            }
            else do{
                this.xvel--
            }while (this.xvel>0)
            this.moveL();
        }
    }

    // this.update = function (key) {
    //     // this.y = mouseY
    //     if(key==-1){
            
    //     }
    // }

    this.moveL=function(){
        del=this.prevx-this.x
        if(abs(del)==0){
            console.log("xvel=0:::"+del);
        }
        else{
            this.x+=-1
        }
        }
    

    this.setvel=function(key){
        if(key==-1){
            // this.x+=-this.xvel;
            // this.y-=100
            // this.moveL();
            draw(-1);
            
        }
        else if(key==1){
            this.x+=this.xvel;
            this.y-=100
        }
    }
}

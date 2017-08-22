function tile() {

    this.xvel=50
    this.x = 0
    this.y = 0
    this.gravity=5


    this.draw = function () {
        fill(0)
        push()
        rotate(PI / 4);
        rectMode(CENTER);
        pop()
        rect(this.x, this.y, 100, 100)
        this.y+=this.gravity;
    }

    // this.update = function (key) {
    //     // this.y = mouseY
    //     if(key==-1){
            
    //     }
    // }

    this.setvel=function(key){
        if(key==-1){
            this.x+=-this.xvel;
            this.y-=100
            
        }
        else if(key==1){
            this.x+=this.xvel;
            this.y-=100
        }
    }







}
function tile(posx,posy){
    
    
        if(posx){
            this.y=posy
            this.x=posx
        }else{
    
        this.x=0
        this.y=0;
        }
    
    
    
        this.draw=function(){
            fill(255)
            rectMode(CENTER); 
    
    
            rect(this.x,this.y,100,100)
        }
    
        this.update=function(x){
            this.y=mouseY
        }
        
    
    
    
    
        
    
    }
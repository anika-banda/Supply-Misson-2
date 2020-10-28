class Container {
    constructor(x,y,width,height){
        var options = {
            isStatic:true  
           }   
           this.body = Bodies.rectangle(x,y,200,20,options)
           this.width = width
           this.height = height
           World.add(world,this.body)
           this.color = red
          }
         display(){
             var pos = this.body.position
             rect(pos.x,pos.y,this.width,this.height)
             fill("red");
             fill("red");
         }
          }
    

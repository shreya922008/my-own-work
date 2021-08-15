class Button{
    constructor(){
        //this.image1=createImg("code.jpg","bgStyle")
        this.button1=createButton("YES")
        this.button1.position(250,300)
        this.button2=createButton("NO")
        this.button2.position(160,300)
        this.button3=createButton("NEXT")
        this.button3.position(550,350)
    }
    display(){
        this.button1.mousePressed(()=>{
            this.button1.hide()
            this.button2.hide()
        })
    }
    
}
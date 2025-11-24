const canvas = document.getElementById('canvasInicial');

const canvasWidth = window.innerWidth
const canvasheight = window.innerHeight
canvas.width = canvasWidth
canvas.height = canvasheight
var ctx = canvas.getContext('2d')

var mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove', (event)=>{
    mouse.x = event.x
    mouse.y = event.y
})
// to colocando aq em comentário pra eu não me esquecer. mas troca o window por uma div que ocupe todo o espaço do canvas, que daí o mouse vai entender a área que é pra estar.

let colorArr = [
    '#5dd0de',
    '#f7f3cf',
    '#27b1bf',
    '#018fa6',
    '#176585'
]

function Circle(x,y,dx,dy,radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = colorArr[Math.floor(Math.random() * colorArr.length)]

    this.draw = () => {
        ctx.beginPath();
        ctx.arc( this.x , this.y , this.radius, 0 , Math.PI * 2 , false)
        ctx.strokeStyle = this.color
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.stroke()
    }

    this.update = ()=>{
        if(this.x + this.radius > canvasWidth  || this.x - this.radius < 0 ){
            this.dx = -this.dx;
        }
        if(this.y + this.radius > canvasheight  || this.y - this.radius < 0 ){
            this.dy = -this.dy;
        }
        
        this.x += this.dx
        this.y += this.dy

        // interactivity
        if(mouse.x - this.x < 70 && mouse.x - this.x > -70 && mouse.y - this.y < 70 && mouse.y - this.y > -70 && this.radius < 30){
            this.radius += 2;
        }else if(this.radius > 5){
            this.radius -= 2;
        }

        this.draw();
    }
}

let circleArr = [];
for(let i = 0; i < 700; i++){
    const radius =  Math.random() * 10
    var x = Math.random() * canvasWidth;
    var y = Math.random() * canvasheight;
    const dx = (Math.random() - 0.5) * 2
    const dy = (Math.random() - 0.5) * 2
    circleArr.push(new Circle(x,y,dx,dy,radius))
}

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0, canvasWidth, canvasheight)
    for(let i = 0; i < circleArr.length; i++){
        circleArr[i].update();
    }
}

animate()
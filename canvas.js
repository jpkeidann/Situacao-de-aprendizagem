const canvas = document.querySelector('canvas')

const local = window.location.pathname

const canvasWidth = window.innerWidth
const canvasheight = window.innerHeight
canvas.width = canvasWidth
canvas.height = canvasheight

console.log(window)
var ctx = canvas.getContext('2d')

var mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = event.clientX - rect.left;
    mouse.y = event.clientY - rect.top;
})

let colorArrIndex = [
    '#5dd0de',
    '#f7f3cf',
    '#27b1bf',
    '#018fa6',
    '#176585'
]

let colorArr = [
    '#ffffff',
    '#f1f1f1ff',
    '#c0c0c0ff',
    '#acababff',
    '#6d6d6dff',
]

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    if (local === '/' || local === '/index.html') {
        this.color = colorArrIndex[Math.floor(Math.random() * colorArrIndex.length)]
    } else {
        this.color = colorArr[Math.floor(Math.random() * colorArr.length)]
    }

    this.draw = () => {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.strokeStyle = this.color
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.stroke()
    }

    this.update = () => {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx
        this.y += this.dy

        // interactivity
        if (mouse.x - this.x < 70 && mouse.x - this.x > -70 && mouse.y - this.y < 70 && mouse.y - this.y > -70 && this.radius < 20) {
            this.radius += 2;
        } else if (this.radius > 5) {
            this.radius -= 2;
        }

        this.draw();
    }
}

let circleArr = [];
for (let i = 0; i < 200; i++) {
    const radius = Math.random() * 10
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    const dx = (Math.random() - 0.5) * 2
    const dy = (Math.random() - 0.5) * 2
    circleArr.push(new Circle(x, y, dx, dy, radius))
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < circleArr.length; i++) {
        circleArr[i].update();
    }
}

animate()
const c = document.getElementById("myCanvas");
const canvaW = c.width;
const canvaH = c.height;

class tree{
    constructor(rows = 1, length = 40){
        this.rows = rows;
        this.length = length;
        this.start()
    }
    async start(){
        new branch(this.rows+1,[canvaW/2,canvaH/2], this.length)
    }
}
class branch{
    constructor(rows = 0, startPoint = [0,0], length = 90){
        this.rows = rows;
        this.startPoint = startPoint;
        this.length = length;
        this.build();
        
    }
    async build(){
        console.log("building")
        let radius = this.length;
        let x = this.startPoint[0];
        let y = this.startPoint[1];
        var ctx = c.getContext("2d");
        ctx.lineWidth = -1;
        ctx.strokeStyle = 'salmon';
        ctx.moveTo(x, y);
        var angle = Math.random()*Math.PI*2; // Generate angle to build to
        var newx = Math.cos(angle)*radius;
        var newy = Math.sin(angle)*radius;
        ctx.lineTo(newx+x,newy+y);
        ctx.stroke();
        if (this.rows){
            for(let i = 0; i<=5; i++){
                let newBranch = new branch(this.rows-1,[newx+x,newy+y])
            }
        }else{
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(newx+x, newy+y, 5, 0, 2 * Math.PI);
            ctx.stroke();
        };
    }
}

async function genTree(){
    return new tree(3,100)
}
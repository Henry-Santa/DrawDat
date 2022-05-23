const c = document.getElementById("myCanvas");
const canvaW = c.width;
const canvaH = c.height;
const coloIp = document.getElementById("col")
class tree{
    constructor(rows = 1, length = 40, point = [0,0]){
        this.rows = rows;
        this.length = length;
        this.point = point;
        this.start()

    }
    async start(){
        new branch(this.rows+1,this.point, this.length)
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
        let radius = this.length;
        let x = this.startPoint[0];
        let y = this.startPoint[1];
        var ctx = c.getContext("2d");
        ctx.lineWidth = -1;
        ctx.strokeStyle = coloIp.value;
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

async function genTree(point = [0,0]){
    console.log(coloIp.value)
    return new tree(3,100,point=point)
}

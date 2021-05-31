import React from "react";
import {compareArray} from "../../../../../util/common-util";
import "./reactcanvas.scss"
class ReactCanvas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            canvas: null,
            ctx: null,

            canvas2: null,
            ctx2: null,

            data: [
                {
                    type: 'line',
                    value:  [
                        [0, 0],
                        [0, 200],
                        [40, 190],
                        [40, 20],
                        [0, 0],
                    ],
                    speed: 10
                },
                {
                    type: 'line',
                    value:  [
                        [500, 200], //下
                        [460, 190], //左
                        [460, 20], //上
                        [500, 0], //右
                    ],
                    speed: 10
                },
                {
                    type: 'line',
                    value:  [
                        [500, 0],
                        [0, 0],
                    ],
                    speed: 10
                },
                {
                    type: 'line',
                    value: [
                        [500, 0],
                        [500, 200],
                    ],
                    speed: 10
                },
                {
                    type: 'line',
                    value:  [
                        [500, 200],
                        [0, 200],
                    ],
                    speed: 10
                },
                {
                    type: 'line',
                    value: [
                        [460, 190],
                        [40, 190],
                    ],
                    speed: 10
                },
                {
                    type: 'line',
                    value: [
                        [460, 20],
                        [40, 20],
                    ],
                    speed: 10
                },
                {
                    type: 'rotate-react',
                    value: {
                        target: [
                            [200, 350],
                            [150, 380],
                            [550, 380],
                            [500, 350],
                        ],
                        current: [
                            [180, 370],
                            [180, 370],
                            [520, 370],
                            [520, 370],
                        ],
                        clearRange: [150,350,400,150]
                    },
                    speed: 0.5
                },
                {
                    type: 'rotate-react',
                    value: {
                        target: [
                            [150, 0],
                            [200, 30],
                            [500, 30],
                            [550, 0],
                        ],
                        current: [
                            [170, 20],
                            [170, 20],
                            [530, 20],
                            [530, 20],
                        ],
                        clearRange: [150,0,400,150]
                    },
                    speed: 0.5
                },
            ]
        };
    }


    animate(ctx,data,speed) {
        data.forEach( item=> {
            if (item.type === 'line') {
                this.lineMove(item.value,speed);
            } else if (item.type === 'rotate-react') {
                console.log(item);
                // this.reactRotate(item.value.target,item.value.current,item.speed,item.value.clearRange)
            }
        })
    }
    lineMove(points,speed) {
        if (points.length < 2) {
            return;
        }
        const [[x1, y1], [x2, y2]] = points;
        let dx = x2 - x1;
        let dy = y2 - y1;
        if (Math.abs(dx) < 1 && Math.abs(dy) < 1) {
            points = points.slice(1);
            this.lineMove(points,speed);
            return;
        }
        let x = x1,
            y = y1; //线条绘制过程中的终点
        if (dx === 0) {
            x = x2;
            y = y + (speed * dy) / Math.abs(dy);
        } else if (dy === 0) {
            x += (speed * dx) / Math.abs(dx);
            y = y2;
        } else if (Math.abs(dx) >= 1) {
            let rate = dy / dx;
            x += (speed * dx) / Math.abs(dx);
            y += (speed * rate * dx) / Math.abs(dx);
        }
        this.drawLine(x1, y1, x, y);
        points[0] = [x, y];
        window.requestAnimationFrame(()=> {
            this.lineMove(points,speed);
        });
    }

    reactRotate(target,current,speed,clearRange) {

        if (compareArray(target,current)) {
            return;
        }

        let [d1, d2, d3, d4] = target;

        d1 = this.getNextPoint(target[0],target[1],target[0],current[0],speed);
        console.log(d1);
        d2 = this.getNextPoint(target[0],target[1],target[1],current[1],speed);
        console.log(d2);
        d3 = this.getNextPoint(target[2],target[3],target[2],current[2],speed);
        console.log(d3);
        d4 = this.getNextPoint(target[2],target[3],target[3],current[3],speed);
        console.log(d4);

        this.drawReact(d1, d2, d3, d4, clearRange);
        // this.reactRotate(target,[d1, d2, d3, d4],speed);
        window.requestAnimationFrame(()=> {
            this.reactRotate(target,[d1, d2, d3, d4],speed);
        });
    }

    getNextPoint(start,end,target,current,speed) {
        console.log(start);
        console.log(end);
        console.log(target);
        console.log(current);
        let dx = target[0] - current[0],
            x = current[0],
            y = current[1];

        console.log(dx);
        if (dx < 0) {
            console.log("1111");
            x -= speed;
            console.log(x);
            if (x < target[0]) {
                x = target[0]
            }
        } else if (dx >= 0) {
            console.log("2222");
            x += speed;
            console.log(x);
            if (x > target[0]) {
                x = target[0]
            }
        }
        console.log(x);
        y = (start[0] * end[1] - end[0] * start[1] - (end[1] - start[1]) * x) / (start[0] - end[0]);
        console.log(y);

        return [x, y]
    }


    drawLine(x1, y1, x2, y2) {
        this.state.ctx.save();
        this.state.ctx.beginPath(); //不写每次都会重绘上次的线
        this.state.ctx.lineCap = "round";
        this.state.ctx.lineJoin = "round";
        let grd = this.state.ctx.createLinearGradient(100,100,500, 500);

        grd.addColorStop(0,"#32bced"); //0表示起点..0.1 0.2 ...1表示终点，配置颜色
        grd.addColorStop(0.2,"#113483");
        grd.addColorStop(0.5,"#042a6f");
        grd.addColorStop(0.6,"#32bced");
        grd.addColorStop(0.8,"#113483");
        grd.addColorStop(1,"#32bced");


        this.state.ctx.moveTo(x1, y1);
        this.state.ctx.lineTo(x2, y2);
        this.state.ctx.closePath();
        this.state.ctx.strokeStyle = grd; //生成的颜色块赋值给样式
        // ctx.strokeStyle = "rgba(255,255,255,1)";
        this.state.ctx.stroke();
        this.state.ctx.restore();
    }

    drawCircle(x,y){

        /*  this.drawCircle(50,200);
          this.drawCircle(650,200);*/

        let tempX = 0;

        if (x < 350) {
            tempX = 0;
        } else {
            tempX = this.state.canvas.width;
        }

        let ss = setInterval(()=> {
            this.state.ctx.clearRect(0,0,1000,1000);
            this.state.ctx.beginPath();

            this.state.ctx.arc(tempX,200,25,0,Math.PI*2,true);

            this.state.ctx.stroke();
            if (tempX === x) {
                clearInterval(ss);
            }


            if (x < 350) {
                tempX += 10;
            } else {
                tempX -= 10;
            }
        },100);


        // 开始绘制路径
        this.state.ctx.beginPath();
        this.state.ctx.lineWidth = 2;
        // this.state.ctx.strokeStyle = 'white';

        /* //绘制一个以坐标点(100,100)为圆心、半径为50px的圆形
         this.state.ctx.arc(100, 100, 50, 0, Math.PI * 2, false);

     //创建一个表示放射性颜色渐变的CanvasGradient对象
     //该对象的作用域是以(100,100)为圆心、半径为10px的内圆和以(100,100)为圆心、半径为50px的外圆之间的环状区域
         var canvasGradient = this.state.ctx.createRadialGradient(100, 100, 10, 100, 100, 50);
     //在offset为0的位置(即内圆的圆圈处)添加一个蓝色的渐变
         canvasGradient.addColorStop(0, "blue");
     //在offset为0.5的位置(环状区域从内到外放射50%的中间位置)添加一个绿色的渐变
         canvasGradient.addColorStop(0.5, "green");
     //在offset为0的位置(即外圆的圆圈处)添加一个红色的渐变
         canvasGradient.addColorStop(1, "red");
     //将fillStyle的属性值设为该CanvasGradient对象
         this.state.ctx.fillStyle = canvasGradient;*/

        let canvasGradient = this.state.ctx.createRadialGradient(0,200, 25, 750,200, 25);
        canvasGradient.addColorStop(0, "blue");
        canvasGradient.addColorStop(0.5, "red");
        canvasGradient.addColorStop(1, "blue");
        this.state.ctx.fillStyle = canvasGradient;//设置填充颜色
        // 绘制圆的路径**
        this.state.ctx.arc(x, y, 25, 0, Math.PI * 2, false);
        // 0°是从三点钟方向开始的

        // 描边路径
        // this.state.ctx.stroke();
        this.state.ctx.fill();
    }

    drawReact(d1,d2,d3,d4,clearRange){
        console.log(d1);
        console.log(d2);
        console.log(d3);
        console.log(d4);
        console.log(clearRange);
        // console.log(...clearRange);

        // this.state.ctx2.clearRect(150,350,400,150);
        // this.state.ctx2.clearRect(150,0,400,150);
        this.state.ctx2.beginPath();
        let grd = this.state.ctx2.createLinearGradient(0,300,600, 500);

        grd.addColorStop(0,"#32bced"); //0表示起点..0.1 0.2 ...1表示终点，配置颜色
        grd.addColorStop(0.2,"#113483");
        grd.addColorStop(0.5,"#042a6f");
        grd.addColorStop(0.6,"#32bced");
        grd.addColorStop(0.8,"#113483");
        grd.addColorStop(1,"#32bced");


        this.state.ctx2.moveTo(...d1);
        this.state.ctx2.lineTo(...d2);
        this.state.ctx2.lineTo(...d3);
        this.state.ctx2.lineTo(...d4);
        this.state.ctx2.closePath();
        this.state.ctx2.strokeStyle = grd; //生成的颜色块赋值给样式
        this.state.ctx2.stroke();

    }


    /*draw1(){
      let points =;
      this.animate(this.state.ctx,points,10);
    }

    draw2(){
      let points = ;
      this.animate(this.state.ctx,points,10);
    }

    draw3(){
      let points = ;
      this.animate(this.state.ctx,points,10);
    }

    draw4(){
      let points = ;
      this.animate(this.state.ctx,points,10);
    }

    draw5(){
      let points = ;
      this.animate(this.state.ctx,points,10);
    }

    draw6(){
      let points = ;
      this.animate(this.state.ctx,points,10);
    }

    draw7(){
      let points = ;
      this.animate(this.state.ctx,points,10);
    }
  */

    componentDidMount() {
        this.state.canvas = document.querySelector("canvas");
        this.state.ctx = this.state.canvas.getContext("2d");
        this.state.ctx.fillStyle = 'rgba(255, 255, 255, 0)';

       /* this.state.canvas2 = document.querySelector("#canvas1");
        this.state.ctx2 = this.state.canvas2.getContext("2d");
        this.state.ctx2.fillStyle = 'rgba(255, 255, 255, 0)';*/

        this.animate(this.state.ctx,this.state.data,10);

        /*   this.draw1();
           this.draw2();
           this.draw3();
           this.draw4();
           this.draw5();
           this.draw6();
           this.draw7();*/
        /*let points = [
            [200, 350],
            [150, 400],
            [500, 350],
            [550, 400],
        ];
        let current = [
            [200, 350],
            [200, 350],
            [500, 350],
            [500, 350],
        ];*/

        // this.reactRotate(points,current,10);
        // this.drawCircle(50,200);
        // this.drawCircle(650,200);
    }



    render() {
        return (
            <canvas id="canvas" width="500" height="200"></canvas>
       /* <div>
                <canvas id="canvas" width="1000" height="1000"></canvas>
                <canvas id="canvas1" width="1000" height="1000"></canvas>
                <div className={'test-container'}>
                    <div className={'test1'}></div>
                    <div className={'test2'}></div>
                </div>
            </div>*/
        )
    }
}

export default ReactCanvas;

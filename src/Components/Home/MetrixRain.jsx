import {useEffect, useRef} from "react";

export default function MetrixRain() {

    let canvasRef = useRef(null)

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const canvas = canvasRef.current;
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const gradient = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 100, canvas.width/2, canvas.height/2, 500);
        gradient.addColorStop(0, '#2af598');
        gradient.addColorStop(0.2, '#22e4ac');
        gradient.addColorStop(0.4, '#1bd7bb');
        gradient.addColorStop(0.6, '#14c9cb');
        gradient.addColorStop(0.8, '#0fbed8');
        gradient.addColorStop(1, '#08b3e5');

        class Symbol {
            constructor(x, y, fontSize, canvasHeight) {
                //this.characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                this.characters = '♔♕♖♗♘♙♚♛♜♝♞♟';
                // this.characters = '10';
                // this.characters = 'POORNAJITH';
                this.x = x;
                this.y = y;
                this.fontSize =fontSize;
                this.canvasHeight = canvasHeight;
            }
            draw(context){
                this.text = this.characters.charAt(Math.floor(Math.random()*this.characters.length));
                context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
                if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98){
                    this.y =0;
                }else {
                    this.y += 1;
                }
            }
        }
        class Effect{
            constructor(canvasWidth, canvasHeight) {
                this.canvasWidth = canvasWidth;
                this.canvasHeight= canvasHeight;
                this.fontSize =16;
                this.columns = this.canvasWidth/this.fontSize;
                this.symbols = [];
                this.#initialize();
            }
            #initialize(){
                for (let i=0; i< this.columns; i++){
                    this.symbols[i] =new Symbol(i, 0, this.fontSize, this.canvasHeight);
                }
            }
            resize(width, height){
                this.canvasWidth = width;
                this.canvasHeight = height;
                this.columns = this.canvasWidth/this.fontSize;
                this.symbols =[];
                this.#initialize();
            }
        }

        const effect = new Effect(canvas.width, canvas.height);
        let lastTime = 0;
        const fps = 30;
        const nextFrame = 1000/fps;
        let timer = 0;

        function animate(timeStamp){
            const deltaTime = timeStamp - lastTime;
            lastTime =timeStamp;
            if (timer > nextFrame){
                ctx.fillStyle = 'rgba(0,0,0,0.05)';
                ctx.textAlign = 'center';
                ctx.fillRect(0,0, canvas.width, canvas.height);
                ctx.fillStyle= gradient; //'#0aff0a';
                ctx.font = effect.fontSize + 'px monospace';
                effect.symbols.forEach(symbol => symbol.draw(ctx));
                timer = 0;
            }else {
                timer += deltaTime;
            }

            requestAnimationFrame(animate);
        }
        animate(0);

        window.addEventListener('resize', function (){
            canvas.width = window.innerWidth;
            canvas.height= window.innerHeight;
            effect.resize(canvas.width, canvas.height);
        })

        return () => {
            // Clean up any resources or event listeners
        };
    }, []);


    return(
        <div>
            <canvas id="canvas1" ref={canvasRef}></canvas>
        </div>
    )
}
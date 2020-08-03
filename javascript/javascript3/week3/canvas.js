
const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

  
      class Circle {
          constructor(x,y,r,startAngle, endAngle, fillColor){
              this.x =x;
              this.y =y;
              this.r =r;
              this.startAngle = startAngle;
              this.endAngle = endAngle;
              this.fillColor = fillColor;
              
          }
          draw(){
              
              const context = canvas.getContext("2d");
              const centerX = this.x;
              const centerY = this.y;
              const radius = this.r;
              const startAngel = this.startAngle;
              const endAngle = this.endAngle;

              context.beginPath();
              
              context.arc(centerX, centerY, radius, startAngel,endAngle, 2 * Math.PI,false);
              context.fillStyle = this.fillColor;
              context.fill();
              context.lineWidth = 5;
              context.strokeStyle = "#003300"

          }
      }
    
/* let randomX = Math.random()*(100 -20) + 20 ;
let randomY = Math.random()*(100 -20) + 20 ; */



/* let randomRadius = Math.random()*(50 -30) +10 ;

        let x = 50;let y = 50;
        const interval = setInterval(() => {
            
            const randomColor =
              "#" + Math.floor(Math.random() * 16777215).toString(16);
           
                  console.log(x, y);
                let c = new Circle(
                  x,
                  y,
                  randomRadius,
                  0,
                  2 * Math.PI,
                  randomColor
                );
                c.draw();
                if (x == canvas.width && y == canvas.height) {
                  clearInterval(interval);
                } else if (x < canvas.width) {
                  x += 50;
                } else if (x == canvas.width) {
                  x = 50;
                  y += 50;
                }
         
        }, 500); */
 
   window.addEventListener('mousemove', (event)=>{
    let randomRadius = Math.random() * (50 - 30) + 10;
    
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);


    let c = new Circle(event.clientX, event.clientY, randomRadius, 0, 2 * Math.PI, randomColor, false);
               
                c.draw();
         
        
     
   })

 



   
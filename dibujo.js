const lienzo = document.getElementById("lienzo");
const ALTURA_CANVAS=800;
const ANCHO_CANVAS=800;
lienzo.width = ANCHO_CANVAS;
lienzo.height = ALTURA_CANVAS;

if (lienzo.getContext) {
    const ctx = lienzo.getContext('2d');

    //LETRA
    ctx.font = "30px Arial";
    ctx.fillText("Udenar", 350,30);

    //Cabeza
    ctx.beginPath();
    ctx.arc(ANCHO_CANVAS/2, 100, 50, 0, 2 * Math.PI);
    ctx.stroke();

    //Ojo izq
    ctx.beginPath();
    ctx.arc(380,90,3,0, 2 * Math.PI);
    ctx.stroke();

    //Ojo der
    ctx.beginPath();
    ctx.arc(420,90,3,0, 2 * Math.PI);
    ctx.stroke();

    //Boca
    ctx.beginPath();
    ctx.arc(400, 105, 10, 0, 1 * Math.PI);
    ctx.stroke();

    //Torso
    ctx.fillRect(400,150,1,200);

    //Brazos
    ctx.moveTo(300,200);
    ctx.lineTo(500,200);
    ctx.stroke();

    //Mano izq
    ctx.moveTo(300,200);
    ctx.lineTo(280,170);
    ctx.stroke();

    //Mano der
    ctx.moveTo(500,200);
    ctx.lineTo(520,230);
    ctx.stroke();

    //Pierna izq
    ctx.moveTo(400,350);
    ctx.lineTo(350,430);
    ctx.stroke();
    
    //Pie izq
    ctx.moveTo(350,430);
    ctx.lineTo(370,450);
    ctx.stroke();

    //Pierna der
    ctx.moveTo(400,350);
    ctx.lineTo(450,430);
    ctx.stroke();

    //Pie der
    ctx.moveTo(450,430);
    ctx.lineTo(430,450);
    ctx.stroke();


}

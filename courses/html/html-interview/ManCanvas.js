import React, { useEffect, useRef } from 'react';

function ManCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Head
    ctx.beginPath();
    ctx.arc(150, 100, 30, 0, Math.PI * 2);
    ctx.fillStyle = 'lightblue';
    ctx.fill();
    ctx.closePath();

    // Body
    ctx.beginPath();
    ctx.moveTo(150, 130);
    ctx.lineTo(150, 250);
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.closePath();

    // Arms
    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.lineTo(100, 200);
    ctx.moveTo(150, 150);
    ctx.lineTo(200, 200);
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.closePath();

    // Legs
    ctx.beginPath();
    ctx.moveTo(150, 250);
    ctx.lineTo(100, 320);
    ctx.moveTo(150, 250);
    ctx.lineTo(200, 320);
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.closePath();
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width={200} height={300}></canvas>
    </div>
  );
}

export default ManCanvas;

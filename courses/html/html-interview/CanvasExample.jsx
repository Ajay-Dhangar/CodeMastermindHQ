import React, { Component } from 'react';

class CanvasExample extends Component {
    componentDidMount() {
        // Get the canvas element
        const canvas = this.canvasRef;
        
        // Get the drawing context
        const ctx = canvas.getContext("2d");
        
        // Set the fill color
        ctx.fillStyle = "blue";
        
        // Draw a square
        ctx.fillRect(50, 50, 100, 100);
    }

    render() {
        return (
            <div>
                <canvas 
                    ref={ref => this.canvasRef = ref} 
                    width="200" 
                    height="200" 
                />
            </div>
        );
    }
}

export default CanvasExample;

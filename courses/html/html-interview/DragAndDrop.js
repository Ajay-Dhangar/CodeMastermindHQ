import React from 'react';

class DragAndDrop extends React.Component {
  handleDragStart = (event) => {
    event.dataTransfer.setData('text/plain', 'This is some data to be dropped');
  }

  handleDragOver = (event) => {
    event.preventDefault();
  }

  handleDrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    this.dropTarget.textContent = `Dropped: ${data}`;
  }

  render() {
    return (
      <div>
        <div
          id="draggableElement"
          draggable="true"
          onDragStart={this.handleDragStart}
        >
          Drag me!
        </div>
        <div
          id="dropTarget"
          onDragOver={this.handleDragOver}
          onDrop={this.handleDrop}
          ref={(ref) => (this.dropTarget = ref)}
        >
          Drop here
        </div>
      </div>
    );
  }
}

export default DragAndDrop;

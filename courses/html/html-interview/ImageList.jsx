import React from 'react';

class ImageList extends React.Component {
    handleDragStart = (event, id) => {
        event.dataTransfer.setData('text/plain', id);
    }

    handleDragOver = (event) => {
        event.preventDefault();
    }

    handleDrop = (event) => {
        event.preventDefault();
        const draggedImageId = event.dataTransfer.getData('text/plain');
        const draggedImage = document.getElementById(draggedImageId);
        const dropTarget = event.target.closest('li');
        if (dropTarget) {
            dropTarget.before(draggedImage);
        }
    }

    render() {
        return (
            <ul id="image-list">
                <li draggable="true" onDragStart={(e) => this.handleDragStart(e, 'image1')}>
                    <img src="https://codemastermindhq.vercel.app/dev-img/cd-html.svg" alt="Image 1" />
                </li>
                <li draggable="true" onDragStart={(e) => this.handleDragStart(e, 'image2')}>
                    <img src="https://codemastermindhq.vercel.app/dev-img/cd-css3.svg" width={50} alt="Image 2" />
                </li>
                <li draggable="true" onDragStart={(e) => this.handleDragStart(e, 'image3')}>
                    <img src="https://codemastermindhq.vercel.app/dev-img/cd-javascript.svg" alt="Image 3" />
                </li>
            </ul>
        );
    }
}

export default ImageList;

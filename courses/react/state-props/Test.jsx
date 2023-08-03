import React from 'react';

function GrandparentComponent() {
    const message = "Hello from Grandparent!";
    return (
        <div>
            <ParentComponent message={message} />
        </div>
    );
}
function ParentComponent(props) {
    return <ChildComponent message={props.message} />;
}
function ChildComponent(props) {
    return <div>{props.message}</div>;
}

export default GrandparentComponent;
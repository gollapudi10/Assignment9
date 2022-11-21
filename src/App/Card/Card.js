import React from "react";

function Card(props) {
    var cardStyle = {
        height: 80,
        width: 1516,
        padding: 0,
        margin: 10,
        backgroundColor: "rgb(97, 219, 251)",
        WebkitFilter: "drop-shadow(0px 0px 5px #666)",
        filter: "drop-shadow(0px 0px 5px #666)"
    };

    function Square(props) {
        var squareStyle = {
            height: 50,
            backgroundColor: props.color
        };
        return (
            <div style={squareStyle}>
                {props.title}
            </div>
        )
    }




    return (
        <div style={cardStyle}>
            {props.children}
            <Square color={props.color} title={props.title} />
            {/* <Label color={props.color}/> */}
        </div>
    );
}

export default Card
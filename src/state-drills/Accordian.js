import React from "react";

class Accordian extends React.Component {
    renderSections(){
        return this.props.sections.map((sections, index) => (
            <li>
                <button key={index}>{sections.title}</button>
                <p>{sections.content}</p>
            </li>
        ))
    }
    
    render(){
        return (
            <ul>
                {this.renderSections}
            </ul>
        );
    }
}

export default Accordian;
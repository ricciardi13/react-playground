import React from 'react';
import "./Tooltip.css";

function Tooltip(props) {
    
}

class TooltipClass extends React.Component {
    static defaultProps = {
        color: "#01A800",
    };
    render() {
        return (
            <span className='Tooltip'>
              <span 
                className='Tooltip-content'
                style={{color: this.props.color}}        
              >
                {this.props.children}
              </span>
              <div className='Tooltip-message'>
                {this.props.message}
              </div>
            </span>
          )
    }
}

export default TooltipClass;
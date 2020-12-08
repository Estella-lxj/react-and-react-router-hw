import React from 'react';
import './WebLayout.css';

class WebLayout extends React.Component {

    render() {
        return (
            <div className="web-container">
                <div className="web-header">Header</div>
                <div className="web-content">Content</div>
                <div className="web-footer">Footer</div>
            </div>
        )
    }
}

export default WebLayout;
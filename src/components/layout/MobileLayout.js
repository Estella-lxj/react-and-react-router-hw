import React from 'react';
import "./MobileLayout.css";


class MobileLayout extends React.Component {

    render() {
        return (
            <div className="mobile-container">
                <div className="mobile-header">Header</div>
                <div className="mobile-content">
                    {[...Array(10)].map((item) => {
                        return (<div className="mobile-content-item">app </div>)
                    })}
                </div>
                <div className="mobile-footer">
                    {[1, 2, 3, 4].map((item) => {
                        return (<div className="mobile-footer-item">app</div>)
                    })}
                </div>
            </div>
        )
    }
}

export default MobileLayout;
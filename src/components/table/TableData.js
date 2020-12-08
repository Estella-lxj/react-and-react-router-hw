import React from 'react';
import './TableData.css'


class TableData extends React.Component {
    render() {
        return (
            <p className="td">{this.props.text}</p>)
    }
}

export default TableData;
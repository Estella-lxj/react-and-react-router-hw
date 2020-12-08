import React from "react";
import TableData from "./TableData";
import "./TableRow.css"

class TableRow extends React.Component {
    render() {
        return (
            <div className="row">
                {this.props.data.map((item) => {
                    return <TableData text={item} />
                })}
            </div>
        )
    }
}

export default TableRow;
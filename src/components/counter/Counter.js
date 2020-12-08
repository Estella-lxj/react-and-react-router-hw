import React, { useState } from 'react';

// class Counter extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { value: 0 }
//     }

//     handlePlus = () => {
//         this.setState({ value: this.state.value + 1 })
//     }

//     handleMinus = () => {
//         this.setState({ value: this.state.value - 1 })
//     }

//     render() {
//         return (<div className="counter-container">
//             <h1>{this.state.value}</h1>
//             <div>
//                 <span>
//                     <button onClick={this.handlePlus}>
//                         +
//                         </button>
//                 </span>
//                 <span>
//                     <button onClick={this.handleMinus}>
//                         -
//                         </button>
//                 </span>
//             </div>
//         </div>)
//     }
// }


const Counter2 = () => {
    const [value, setValue] = useState(0);

    return (
        <div>
            <h1>{value}</h1>
            <div>
                <span>
                    <button onClick={() => setValue(value + 1)}>
                        +
                        </button>
                </span>
                <span>
                    <button onClick={() => setValue(value - 1)}>
                        -
                    </button>
                </span>
            </div>
        </div>
    )
}

export default Counter2;
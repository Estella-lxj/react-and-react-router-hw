import React from 'react';
import TableRow from "./TableRow";

class Table extends React.Component {

    render() {
        return (
            <div>
                <TableRow data={['', 'Knocky', 'Flor', 'Ella', 'Juan']} />
                <TableRow data={['Breed', 'Jack Russell', 'Poodle', 'Streetdog', 'Cocker Spaniel']} />
                <TableRow data={['Age', '16', '9', '10', '5']} />
                <TableRow data={["Owner", 'Mother-in-law', 'Me', 'Me', 'Sister-in-Law']} />
                <TableRow data={['Eating Habits', `Eats everyone's leftovers`, 'Nibbles at food', 'Hearty eater', 'Will eat till he expolodes']} />
            </div>
        )
    }
}

export default Table;
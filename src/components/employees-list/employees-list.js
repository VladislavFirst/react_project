import EmployersListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const Employerslist = ({data, onDelete}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployersListItem 
            key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}/>
        )
    });

    return( 
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default Employerslist;
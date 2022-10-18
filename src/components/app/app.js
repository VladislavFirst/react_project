import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import Employerslist from '../employees-list/employees-list';
import EmployersAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        data: [
          {name: 'John C.' , salary: 800, increase: false, id:1 },
          {name: 'Alex M.' , salary: 3000, increase: true, id:2 },
          {name: 'Carl V.' , salary: 15000, increase: false, id:3 },
        ]
      }
      this.maxId = 4;
    }

    deleteItem = (id) => {
      this.setState(({data}) => {
        // const index = data.findIndex(elem => elem.id === id);
        //1 способ 
        // const before = data.slice(0, index);
        // const after = data.slice(index + 1);

        // const newArr = [...before, ...after];

        return {
          //2 способ
          data: data.filter(item => item.id !== id)
        }
      })
    } 
    
    render(){
      return (
        <div className="app">
          <AppInfo/>
    
          <div className='search-panel'>
               <SearchPanel/>
               <AppFilter/>
          </div>
    
            <Employerslist 
            data={this.state.data}
            onDelete={this.deleteItem}/>
            <EmployersAddForm/>
          
    
        </div>
      );
    }

  
}

export default App;

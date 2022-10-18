import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import Employerslist from '../employees-list/employees-list';
import EmployersAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

    const data = [
      {name: 'John C.' , salary: 800, increase: false, id:1 },
      {name: 'Alex M.' , salary: 3000, increase: true, id:2 },
      {name: 'Carl V.' , salary: 15000, increase: false, id:3 },
    ];


  return (
    <div className="app">
      <AppInfo/>

      <div className='search-panel'>
           <SearchPanel/>
           <AppFilter/>
      </div>

        <Employerslist data={data}/>
        <EmployersAddForm/>
      

    </div>
  );
}

export default App;

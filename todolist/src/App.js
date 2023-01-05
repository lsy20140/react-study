import './App.css';
import AppTodolist from './AppTodolist';
import { useState } from 'react';
import Header from './components/Header';

const filters = ['all', 'active', 'completed'];


function App() {
  const [filter, setFilter] = useState(filters[0]); 

  return (
    <div>
      <Header filters={filters} filter={filter} onFilterChange={setFilter}></Header>
      <AppTodolist filter={filter}/>
    </div>
  );
}

export default App;

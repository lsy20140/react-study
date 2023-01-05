import './App.css';
import AppTodolist from './components/AppTodolist/AppTodolist';
import { useState } from 'react';
import Header from './components/Header/Header';
import DarkModeProvider from './context/DarkModeContext';

const filters = ['all', 'active', 'completed'];


function App() {
  const [filter, setFilter] = useState(filters[0]); 
  return (
    <DarkModeProvider>
      <Header filters={filters} filter={filter} onFilterChange={setFilter}></Header>
      <AppTodolist filter={filter}/>
    </DarkModeProvider>
  );
}

export default App;

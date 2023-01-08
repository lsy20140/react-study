import React from 'react'
import { Outlet } from 'react-router-dom'
import SearchHeader from './components/SearchHeader';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query' 

const queryClient = new QueryClient();

function App() {
  return (
    <div className='w-10/12 m-2.5 mx-auto'>
      <SearchHeader/>
      <QueryClientProvider client={queryClient}>
        <Outlet/>
      </QueryClientProvider>

    </div>
  )
}

export default App;

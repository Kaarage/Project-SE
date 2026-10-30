import { useState } from 'react'
import { Routes, Route } from 'react-router';
import { HomePage } from './pages/home/HomePage';
import './App.css'
import { SearchSchools } from './pages/search-schools/SearchSchools';
import { Shortlist } from './pages/shortlist/Shortlist';
import { Account } from './pages/account/Account';

function App() {
    const [selected, setSelected] = useState("Home");

    const sidebarItems = [
      "Home",
      "Search Schools",
      "Shortlist",
      "Account"
    ];

  return (
    <Routes>
      <Route index element={<HomePage
        selected={selected}
        setSelected={setSelected}
        sidebarItems={sidebarItems}
      />} />
      <Route path="/login" element={<div>Test login</div>} />
      <Route path="/search-schools" element={<SearchSchools 
        selected={selected}
        setSelected={setSelected}
        sidebarItems={sidebarItems}
      />} />
      <Route path="/shortlist" element={<Shortlist
        selected={selected}
        setSelected={setSelected}
        sidebarItems={sidebarItems}
      />} />
      <Route path="/Account" element={<Account
        selected={selected}
        setSelected={setSelected}
        sidebarItems={sidebarItems}
      />} />
    </Routes>
    
  )
}

export default App

import { useState, useEffect } from 'react';
import './App.css';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';

function App() {
  const [monsters, setMonsters] = useState([])
  const [searchField, setSearchField] =useState ("")


  // fetch ile API çekme
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => setMonsters(users))
  }, [])

  // Search inputuna yazılan kelimeyi küçük harfe dönüştürme
  const onSearchChange = (e) => {
    const SearchFieldString = e.target.value.toLocaleLowerCase()
    setSearchField(SearchFieldString)
  }

  // aranılan monsterin isminin küçük harfle olması
  const filteredMonster = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField)
  })

  return (
    <div className="App">
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox
        className = "monster-search-box"
        placeholder = "Search Monsters"
        onChangeHandler = {onSearchChange}
      />

      <CardList monsters={filteredMonster}/>
    </div>
  );
}

export default App;

import {React, useEffect, useState} from 'react';
import './App.css';
import SearchEngine from './Components/SearchEngine/SearchEngine';
import AjouterInfos from './Components/AjouterInfos/ajouterInfos';

const App = () => {
  const [listeSauveteurs, setListeSauveteurs] = useState()
  useEffect(() => {
    fetch("/sauveteurs")
    .then(result => result.json())
    .then(data => setListeSauveteurs(data))
  }, [])
  return (
    <div className="App">

      {
        listeSauveteurs && listeSauveteurs.length > 0 ?
            <SearchEngine sauveteurs={listeSauveteurs}/>
        : <></>
      }



    </div>
  );
}

export default App;

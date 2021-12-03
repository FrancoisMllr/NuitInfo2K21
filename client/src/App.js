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

      <h1> Bienvenue sur le site de la team Alph-Fra-To-Ry</h1>


      <h3> Voilà que s'achève la nuit de l'info, une superbe expérience que nous avons partagé à 3. Thierry, Thomas & François.
        
        Malheureusement nous n'avons pas eu le temps de développer et de mettre au point toutes nos idées, comme vous pouvez le constater sur le rendu mais nous avons mis tous nos coeurs à l'ouvrage, vous pouvez en être certains ! Ce fût une superbe expérience pour nous, et espérons quand même que le résultat vous plaira.
        

        PS : les points sur lesquels nous avons buté sont les suivants : Data Scrapping pour récupérer, order, trier toutes les données concernant les sauveteurs, les personnes sauvées ainsi que les bateaux.

        </h3>

      {
        listeSauveteurs && listeSauveteurs.length > 0 ?
            <SearchEngine sauveteurs={listeSauveteurs}/>
        : <></>
      }



    </div>
  );
}

export default App;

import {React, useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';

const SearchEngine = (props) => {
    const [chercherPersonne, setChercherPersonne] = useState(null)
    
    return(
        <>
        <br/><br/>
            <h2>Moteur de recherche</h2>

            <TextField fullWidth id="outlined-basic" label="Chercher une personne (exemple : AGEZ)" variant="outlined" value={chercherPersonne} onChange={(e) => setChercherPersonne(e.target.value)}/>

            <p>Résultats de la recherche (METTRE LES MAJUSCULES si nécessaire) :</p> 

            {
                chercherPersonne && chercherPersonne.length > 0 ? 
                
                    props.sauveteurs.filter((sauveteur) => {return sauveteur.nom.search(chercherPersonne) != -1} ).length > 0 ?

                    props.sauveteurs.filter((sauveteur) => {return sauveteur.nom.search(chercherPersonne) != -1} )
                    .map(sauveteur => {
                            return(
                                <p key={sauveteur.id} >{sauveteur.nom} {sauveteur.prenom} ( {sauveteur.datasefrom } )</p>
                            )
                    })
                    : <p>Aucun résultat</p>
                : <></>    
            }

        </>

    )
}
export default SearchEngine;
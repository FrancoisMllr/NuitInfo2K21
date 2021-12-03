import {React, useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';

const SearchEngine = (props) => {
    const [chercherPersonne, setChercherPersonne] = useState(null)
    useEffect(() => {
        console.log(props);
    },[])

    return(
        <>
            <p>Moteur de recherche</p>

            <TextField fullWidth id="outlined-basic" label="Chercher une personne" variant="outlined" value={chercherPersonne} onChange={(e) => setChercherPersonne(e.target.value)}/>

            <p>Résultats de la recherche :</p> 

            {
                chercherPersonne && chercherPersonne.length > 0 ? 
                
                    props.sauveteurs.filter((sauveteur) => {return sauveteur.nom.search(chercherPersonne) != -1} ).length > 0 ?

                    props.sauveteurs.filter((sauveteur) => {return sauveteur.nom.search(chercherPersonne) != -1} )
                    .map(sauveteur => {
                            return(
                                <p key={sauveteur.id} >{sauveteur.nom} ( {sauveteur.datasefrom } )</p>
                            )
                    })
                    : <p>Aucun résultat</p>
                : <></>    
            }

        </>

    )
}
export default SearchEngine;
import {React, useEffect, useState} from 'react';

const SearchEngine = (props) => {
    const [chercherPersonne, setChercherPersonne] = useState(null)
    useEffect(() => {
        console.log(props);
    },[])

    return(
        <>
            <p>Moteur de recherche</p>

            <input placeholder="chercher une personne" value={chercherPersonne} onChange={(e) => setChercherPersonne(e.target.value)}/>

            <p>Filtre :</p> 

            {
                props.sauveteurs.filter((sauveteur) => {return sauveteur.nom.search(chercherPersonne) != -1} )
                .map(sauveteur => {
                    return(
                        <p>{sauveteur.nom} ( {sauveteur.datasefrom } )</p>
                    )
                })
            }

        </>

    )
}
export default SearchEngine;
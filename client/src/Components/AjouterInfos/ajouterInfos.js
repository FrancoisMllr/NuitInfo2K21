import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const AjouterInfos = () => {
    const [prenom, setPrenom] = React.useState()
    const [nom, setNom] = React.useState()
    const [typePersonne, setTypePersonne] = React.useState("sauveteur")

    const ajouterNouvelleInfo = () => {
        if(typePersonne == "sauveteur"){
            fetch("/sauveteurs/" + nom + "/" + prenom, 
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                      },
                      method: "POST",
                }
            )
            .then(result => result.json())
            .then(data => console.log(data))

        }else if(typePersonne == "sauve"){
            fetch("/personnesauvee/" + nom + "/" + prenom, 
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  method: "POST",
            }
         )
         .then(result => result.json())
         .then(data => console.log(data))
        }
    }

    return (
    <>

      <h2>Alimenter le site avec vos informations</h2>
      <TextField id="outlined-basic" label="Prenom" variant="outlined" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
      <TextField id="outlined-basic" label="Nom" variant="outlined" value={nom} onChange={(e) => setNom(e.target.value)} />


    <FormControl>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Type Personne
        </InputLabel>
        <NativeSelect
            onChange={(e) => setTypePersonne(e.target.value)}
        >
            <option value={"sauveteur"}>Sauveteur</option>
            <option value={"sauve"}>Sauvé</option>
        </NativeSelect>
    </FormControl>


    <Button variant="outlined" onClick={() => ajouterNouvelleInfo()}>Valider</Button>
    </>
  )
}

  export default AjouterInfos;

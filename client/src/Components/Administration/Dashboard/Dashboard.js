import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle,faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Dashboard = () => {
    const [verifications, setVerifications] = React.useState([])
    React.useEffect(() => {
        fetch("/admin/verif")
        .then(result => result.json())
        .then(data => setVerifications(data))
    }, [])

    const valider = (id) => {
        fetch("/admin/verif/valider/" + id, {method: "PUT"})
        .then(result => result.json())
        .then(data => console.log(data))
    }

    const rejeter = (id) => {
        fetch("/admin/verif/rejeter/" + id, {method: "PUT"})
        .then(result => result.json())
        .then(data => console.log(data))
    }

    return(
        <>
            <p>à vérifier :</p>

        {
            verifications && verifications > 0 ?
        
            <TableContainer sx={{ maxWidth: 850 }} component={Paper}>
                <Table sx={{ maxWidth: 850 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="center">Prénom</TableCell>
                        <TableCell align="center">Nom</TableCell>
                        <TableCell align="center">Valider</TableCell>
                        <TableCell align="center">Rejeter</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                    verifications && verifications.length > 0 ?
                        verifications.map(personne => {
                        return(
                            <TableRow
                            key={personne.nom}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell align="left">{personne.nom}</TableCell>
                            <TableCell align="left">{personne.prenom}</TableCell>

                            <TableCell align="center"> <FontAwesomeIcon icon={faCheckCircle} size="6x" onClick={() => valider(personne.id)} color="green"/> </TableCell>
                            <TableCell align="center"> <FontAwesomeIcon icon={faTimesCircle} size="6x" onClick={() => rejeter(personne.id)} color="red"/> </TableCell>
                            </TableRow>
                        )
                    })
                    : <></>
                    }
                    </TableBody>
                </Table>
            </TableContainer>
        
        : <p> Aucun élément à afficher</p>
        }

        </>
    )
}   
export default Dashboard;
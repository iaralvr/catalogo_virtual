import { Avatar, Button, Container } from "@mui/material";
import { useEffect, useState } from "react";
import Filme from "./components/Filme";
import Menu from "./components/MenuResponsivo";
import Style from "./components/App.module.css"

function App() {
    

    const [ filmes, setFilmes ] = useState();
    const [ erro, setErro ] = useState();
 

    useEffect(() => {
        const usuario = localStorage.getItem("usuario");
        fetch( process.env.REACT_APP_BACKEND + "produtos/" + usuario, {
            headers: {
                'Content-Type': 'application/json'
            }
        } )
        .then( (resposta) => resposta.json() )
        .then( ( json ) => setFilmes( json ) )
        .catch( ( erro ) => { setErro( true ) } )
    }, [])

    function Excluir( evento, id ) {
        evento.preventDefault();
        fetch( process.env.REACT_APP_BACKEND + "produtos" , {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: id,
                usuario: localStorage.getItem( "usuario")
            })
        } )
        .then( ( resposta ) => resposta.json() )
        .then( ( json ) => {
            const novaLista = filmes.filter( (filme ) => filme._id !== id );
            setFilmes( novaLista );
        })
        .catch( ( error ) => setErro( true ) )
    }

    return (
        <>
            <Menu></Menu>

            <h1 className={Style.nome}><a href='http://localhost:3000/filmes'>Lembrar dos momentos da infância é bom, ainda mais com o seu filme ou série nostalgico favorito, cadastre o seu!!</a></h1>
            <br></br>
            
            <Container sx={{ 
                display: "flex" ,
                flexFlow: "row",
                flexWrap: "wrap",
                gap: "2rem"
            }}>
            { filmes && (
                filmes.map( (filme, index ) => ( 
                    <Filme
                        imagem={filme.imagem}
                        titulo={filme.titulo}
                        descricao={filme.descricao}a
                        categoria={filme.categoria}
                        ano={filme.ano}
                        duracao={filme.duracao}
                        excluir={ (e) => Excluir( e, filme._id ) }
                        id={filme._id}
                    />
                ) )
            ) }
            </Container>
        </>
    );
}

export default App;

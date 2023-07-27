import React, { useEffect, useState } from 'react'
import { EditForm } from './EditForm';

export default function ArticleList({listState, setListState}) {

    //const [listState, setListState] = useState([])
    const [editState, setEditState] = useState(0);
    useEffect(() => { getMovies(); }, []);

    const getMovies = () => {
        let movies = JSON.parse(localStorage.getItem('movies'));
        setListState(movies);
        return movies;
    }

    const deleteMovie = (id) => {
        // Get saved movies
        let storedMovies = getMovies();

        // Filter the stored Array to remove the movie by the id
        let newMoviesArray = storedMovies.filter(movie => movie.id !== parseInt(id));
        
        // Set new movieState
        setListState(newMoviesArray);

        // Update local stored
        localStorage.setItem('movies', JSON.stringify(newMoviesArray));
    }

    return (
        <>
            {listState !== null ?
                listState.map(movie => {
                    return (
                        <article className="movie-item"
                                key={movie.id}>
                            <h3 className="movie-title"> {movie.title} </h3>
                            <p className="movie-synopsis"> {movie.synopsis} </p>
                            <button className="btn-edit" onClick={() => {setEditState(movie.id)}}> Editar </button>
                            <button className="btn-delete" onClick={() => deleteMovie(movie.id)}> Borrar </button>

                            {/* Form to edit movie */}
                            {editState === movie.id &&
                                <EditForm movie={movie}
                                          getStored={getMovies}
                                          setEditState={setEditState}
                                          setListState={setListState} />}
                        </article>
                    );
                })
                :
                <div className="welcome">
                    <h2 className="welcome-message"> Bienvenido a MovieApp! </h2>
                    <p className="wecome-text">
                        MoviApp es una aplicación para que guardes las películas que más te gustan y, además,
                        después podes editarlas o eliminarlas.
                    </p>
                </div>
            }
        </>
    )
}

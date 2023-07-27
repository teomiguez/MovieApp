import React, { useState } from 'react'

export default function SearchForm({listState, setListState}) {

    const [search, setSearch] = useState('')
    const [notExist, setNotExists] = useState(false);

    const titleComponent = "Buscador";
    const searchMovie = (e) => {
        // Update search
        setSearch(e.target.value);

        // Find matches with the movie list
        let matches = listState.filter(movie => {
            return movie.title.toLowerCase().includes(search.toLowerCase());
        })

        if ((search.length <= 1) || (search.length === 0))
        {
            matches = JSON.parse(localStorage.getItem('movies'));
            setNotExists(true);
        }
        else
        {
            setNotExists(false);    
        }

        // Update listState
        setListState(matches);
    }

    return (
        <>
            <h3 className="title"> {titleComponent} </h3>
            {(notExist && search.length > 1) && (
                <span className="not-exist"> No se han encontrado coincidencias </span>
            )}
            <form>
                <input type="text"
                        id="search"
                       name="search"
                    autoComplete="off"
                    placeholder="Titulo..."
                       onChange={searchMovie} />
                <button className="btn-search"
                        id="btn-search">
                    Buscar
                </button>
            </form>
        </>
    )
}

import React, { useState } from 'react'
import { SaveInLocalstorage } from './helpers/SaveInLocalstorage';

export default function AddForm({listState, setListState}) {

    const titleComponent = "Añadir pélicula";
    const key = "movies";
    const [ movieState, setMovieState ] = useState({
        id: '',
        title: '',
        synopsis: '',
    })

    const getFormData = e => {
        e.preventDefault();

        // Save data to variables
        let target = e.target;
        let title = (target.title.value).replace(/^\s+|\s+$/gm,'');
        let synopsis = (target.synopsis.value).replace(/^\s+|\s+$/gm,'');
        
        if ((title !== '') && (synopsis !== ''))
        {
            // Create the movie object and then save it
            let movie = {
                id: new Date().getTime(),
                title, // same as 'title: title'
                synopsis // same as 'synopsis: synopsis'
            };
            
            // Save state
            setMovieState(movie);
            console.log(movieState);

            if (listState.length === 0)
                setListState([movie]);            
            else
                setListState([...listState, movie]);

            // Save movie to local storage
            SaveInLocalstorage(key, movie);
            document.querySelector('#form-add').reset();
        }
        else
        {
            alert("Ingresa algo en ambos campos SALAME!");    
        }
    }

    return (
        <>
            <h3 className="title"> {titleComponent} </h3>
                <form id="form-add" onSubmit={getFormData}>
                    <input type="text"
                        id="title"
                        name="title"
                        placeholder="Titulo..." />
                    <textarea id="synopsis"
                            name="synopsis"
                            cols="30" rows="10"
                            placeholder="Sinopsis..."/>
                    <input className="btn-add"
                        id="btn-add"
                        type="submit"
                        value="Agregar" />
                </form>
        </>
    )
}

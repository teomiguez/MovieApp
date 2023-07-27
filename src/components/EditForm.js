import React from 'react'

export const EditForm = ({movie, getStored, setEditState, setListState}) => {
    const titleComponent = "Editar pélicula";

    const updateMovie = (e, id) => {
        e.preventDefault();

        // Save data to variables
        let target = e.target;
        let title = (target.title.value).replace(/^\s+|\s+$/gm,'');
        let synopsis = (target.synopsis.value).replace(/^\s+|\s+$/gm,'');
        
        if ((title !== '') && (synopsis !== ''))
        {
            // Get movies stored and get movie editing
            let stored = getStored();
            let indexEditing = stored.findIndex(movie => movie.id === id);
            
            // Create the movie object and then save it
            let movieEditing = {
                id: id,
                title, // same as 'title: title'
                synopsis // same as 'synopsis: synopsis'
            };

            // Update movie in the storedArray and save this
            stored[indexEditing] = movieEditing;
            localStorage.setItem('movies', JSON.stringify(stored));

            // Update states
            setListState(stored);
            setEditState(0);
        }
        else
        {
            alert("Ingresa algo en ambos campos SALAME!");    
        }
    }

    return (
        <div className="form-edit">
            <hr className="hr" />
            <h3 className="title"> {titleComponent} </h3>
            <form onSubmit={e => updateMovie(e, movie.id)}>
                <input type="text"
                        id="title"
                        name="title"
                        defaultValue={movie.title} />
                <textarea id="synopsis"
                            name="synopsis"
                            cols="30" rows="10"
                            defaultValue={movie.synopsis} />
                <input className="btn-edit"
                        id="btn-edit"
                        type="submit"
                        value="Actualizar" />
            </form>
        </div>
    )
}

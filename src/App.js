import { useState } from "react";
import AddForm from "./components/AddForm";
import ArticleList from "./components/ArticleList";
import SearchForm from "./components/SearchForm";

function App() {
  const [listState, setListState] = useState([])

  return (
    <div className="layout">
      {/* -- Cabecera -- */}
      <header className="header">
          <div className="logo">
              <div className="play"></div>
          </div>
          <h1 className="title-app"> MovieApp </h1>
      </header>

      {/* -- Barra de navegación del sitio web -- */}
      <nav className="nav">
          <ul>
              <li><a href="/#"> Inicio </a></li>
              <li><a href="/#"> Peliculas </a></li>
              <li><a href="/#"> Blog </a></li>
              <li><a href="/#"> Contacto </a></li>
          </ul>
      </nav>

      {/*-- Contenido principal --*/}
      <section className="content">
        {/* -- Listado de peliculas -- */}
        <ArticleList listState={listState} setListState={setListState} />
      </section>

      {/* -- Barra lateral -- */}
      <aside className="sidebar">
          {/* -- Formulario - buscador -- */}
          <div className="search-movie">
              <SearchForm listState={listState} setListState={setListState} />
          </div>
          {/* -- Formulario - agregar pelicula -- */}
          <div className="add-movie">
            <AddForm listState={listState} setListState={setListState} />
          </div>
      </aside>

      {/* -- Pie de página -- */}
      <footer className="footer">
          &copy; Sitio web desarrollado por
          <a href="https://www.linkedin.com/in/teo-miguez-de-araujo-9332b9167/"> teomiguez </a>
      </footer>
    </div>
  );
}

export default App;

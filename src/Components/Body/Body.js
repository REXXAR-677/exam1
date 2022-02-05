import React, { useEffect, useContext } from "react";
import useHttp from "../../Hooks/useHttp";
import filterContext from "../../Store/filter-context";
import FilterDropdown from "./FilterDropdown";
import CardItem from "./CardItem";

const Body = (props) => {
  const ctx = useContext(filterContext);
  const { isLoading, error, data: dataFetched } = useHttp(ctx.url);

  useEffect(() => {
    props.setNum(dataFetched.length);
  }, [dataFetched, props]);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  const currentPosts = dataFetched.slice(
    ctx.indexOfFirstPost,
    ctx.indexOfLastPost
  );

  return (
    <div>
      {error && <h3>Something went wrong while fetching!</h3>}
      {!error && (
        <section>
          <FilterDropdown />
          <ul>
            {currentPosts.map((i) => (
              <CardItem
                key={i.objectID}
                title={i.story_title || i.title}
                url={i.story_url || i.url}
                item={i}
                created={i.created_at}
                author={i.author}
              />
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default Body;

/*
PRIMERO:
- DEJA DE HACER EL SLICE Y PON LOS 20 RESULTADOS
- RETORNA DEL USEHTTP LOS TODO LOS DATOS Y VERIFICA Q SEAN DE REACT, VUE, ANGULAR

SEGUNDO:
- PARA LA PRIMERA FETCH, PON EL NUMERO DE PAGINAS DE 1 A 50 Y QUE HAGAN SU RESPECTIVO SCROLL
- CADA PAGINA ALTERARA EL ENLACE DEL FETCH PARA FETCHEAR CADA PAGINA CORRESPONDIENTE (NUM -1) SIENDO PARA 50 => 49

TERCERO:
- AÑADE CADA UNO DE LOS ELEMENTOS DE FAVORITOS EN LOCALSTORAGE CON SU RESPECTIVO ID DE NOTICIA (REACT...)
- AÑADE FUNCIONALIDAD DE FAVORITOS Y PAGINA DE FAVORITOS CON SUS DEBIDOS COMPONENTES INDIVIDUALES

CUARTO:
- AÑADE LOS ESTILOS Y TRASICIONES, CON VARIABLES DE CSS
*/

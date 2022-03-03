import { useEffect } from "react";
import Hero from "../components/Hero";
import Movie from "../components/Movie";
import Search from "../components/Search";
import { useGlobalContext } from "../context/ContextApi";

export default function Home({ movies }) {
  const { moviesList } = useGlobalContext();
  console.log(movies);
  const List = moviesList.length == 0 ? movies : moviesList;
  return (
    <>
      <Hero />
      <main className="containere">
        <Search />
        <div className="grid 2xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 gap-y-20 gap-x-10">
          {List.map((movie) => {
            return <Movie key={movie.id} {...movie} />;
          })}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_MOVIE}&page=1`
  );
  const movies = await response.json();

  return {
    props: { movies: movies.results },
  };
}

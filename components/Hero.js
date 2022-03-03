import React from "react";
import { useGlobalContext } from "../context/ContextApi";

function Hero() {
  const { DetailMovie } = useGlobalContext();
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url("${DetailMovie.posterUrl}")`,
        minHeight: "500px",
        height: "500px",
        backgroundPosition: "center",
        backgroundSize: "center",
      }}
    >
      <div className="relative sm:container mx-auto md:container 2xl:container flex flex-row items-center text-white h-full">
        <div>
          <h1 className="absolute text-2xl top-0 font-bold text-white pt-4">
            NETFLIX
          </h1>
          <div>
            <h1 className="text-3xl font-bold mb-4">{DetailMovie.title}</h1>
            <p
              style={{ width: "60%", lineHeight: "1.6rem" }}
              className="sm:hidden md:block xl:block lg:block"
            >
              {DetailMovie.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

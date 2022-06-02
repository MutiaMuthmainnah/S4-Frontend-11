/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import StyledHero from "./Hero.styled";

function Hero() {
  // Membuat State movie
  const [movie, setMovie] = useState("");

  async function fetchMovie() {
    const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
    // Melakukan Fetch data dari API omdb.
    const response = await fetch(url);
    const data = await response.json();

    // Update state movie dengan data movie (hasil fetch)
    setMovie(data);
  }

  /**
   * Menjalankan useEffect.
   * Parameter kedua digunakan untuk custom lifecycle update.
   * Jika state di dalam array berubah, maka jalankan useEffect lagi (lifecycle update).
   * Jika state di dalam array kosong, maka jalankan sekali (lifecycle mount).
   */
  useEffect(fetchMovie, []);

  // Tampilkan state movie.
  console.log(movie);

  return (
    <StyledHero>
      <section>
        <div>
          <h2>{movie.Title}</h2>
          <h3>Genre: {movie.Genre}</h3>
          <p>{movie.Plot}</p>
          <Button>Watch</Button>
        </div>
        <div>
          <img
            src={movie.Poster} alt={movie.title}/>
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;

import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addResult } from "../utils/searchSlice";

const MovieSearchBar = () => {
  const dispatch = useDispatch();

  const searchRef = useRef();

  const searchHandler = ($event) => {
    $event.preventDefault();
    openaiSearch(searchRef.current.value);
  };

  let searchPromiseList = [];

  const openaiSearch = async () => {
    const gptQuery =
      "Act as a movie recommendation engine and suggest a movie based on the query : " +
      searchRef?.current?.value +
      ". only gice me names of 5 movies, comma separated like the example below: 'movie1, movie2, movie3, movie4, movie5'";
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!chatCompletion.choices) {
      console.log("No movie found");
      return;
    }
    const result = chatCompletion?.choices[0]?.message?.content;

    const movies = result.split(",");

    getResults(movies);
  };

  const searchTMDB = async (query) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}`,
      API_OPTIONS
    );
    const data = await response.json();
    return data.results;
  };

  const getResults = async (recommendation) => {
    recommendation.forEach((movie) => {
      searchPromiseList.push(searchTMDB(movie));
    });
    const results = await Promise.all(searchPromiseList);
    dispatch(addResult({ results, recommendation }));
  };

  return (
    <form className="p-4 w-1/2 grid grid-cols-12 mx-auto bg-black">
      <input
        className="h-10 px-3 text-black bg-white col-span-9"
        type="text"
        placeholder="Search for a movie"
        ref={searchRef}
      />
      <button
        className="h-10 bg-red-600 text-white col-span-3 ml-2"
        onClick={searchHandler}
      >
        Search
      </button>
    </form>
  );
};

export default MovieSearchBar;

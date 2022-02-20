import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Header from '../components/ui/Header';
import Movie from './Movie';
import Pagination from '../components/ui/Pagination'
import Spinner from './ui/Spinner';
import SmallWatchList from './SmallWatchList'




function MovieList() {

const [category, setCategory] = useState('top_rated')
const [movies,setMovies] = useState([])
const [query, setQuery] = useState('Avengers')
// total amount of movies we get from the API request
const [totalResults,setTotalResults] = useState(0)
// keep track of what page we are currently on
const [currentPage, setCurrentPage] = useState(1)
const [genreId, setGenreId] = useState()
const [isLoading, setIsLoading] = useState(false)


const nextPage = (pageNumber) => {
 
  const fetchItems = async() => {
    const result = await axios(`https://api.themoviedb.org/3/movie/${category}?api_key=7b6a4aaf8e531cac206a64fde6c9137b&page=${pageNumber}`)
    console.log(result.data)
    console.log(result.data.results[0])
    setMovies(result.data.results);
    setCurrentPage(pageNumber)
    setIsLoading(false)
    }
    fetchItems()
    const fetchhItems = async() => {
      const result = await axios(`https://api.themoviedb.org/3/discover/movie?api_key=7b6a4aaf8e531cac206a64fde6c9137b&with_genres=${genreId}&page=${pageNumber}`)
      setMovies(result.data.results);
      setTotalResults(result.data.total_results)
      setIsLoading(false)
      }
      fetchhItems()
}


useEffect(() => {
  const fetchItems = async() => {
  const result = await axios(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=7b6a4aaf8e531cac206a64fde6c9137b`)
  setMovies(result.data.results);
  setTotalResults(result.data.total_results)
  }
  fetchItems()
},[query])


useEffect(() => {
  setIsLoading(true)
  const fetchData = async() => {
      const result = await axios(`https://api.themoviedb.org/3/movie/${category}?api_key=7b6a4aaf8e531cac206a64fde6c9137b`);
      console.log(result.data.results)
      setMovies(result.data.results)
      setTotalResults(result.data.total_results)
      setIsLoading(false)
  }
  fetchData()
},[category])

useEffect(() => {
  setIsLoading(true)
  const fetchItems = async() => {
  const result = await axios(`https://api.themoviedb.org/3/discover/movie?api_key=7b6a4aaf8e531cac206a64fde6c9137b&with_genres=${genreId}`)
  setMovies(result.data.results);
  setTotalResults(result.data.total_results)
  setIsLoading(false)
  }
  fetchItems()
},[genreId])



const FilterVotes = (pageNumber) => { 
 const filtered = movies.sort((a, b) => (a.vote_average> b.vote_average) ? -1 : 1).map(item => item) 

 setCurrentPage(pageNumber)
 setMovies(filtered)
}

const FilterDate = (pageNumber) => { 
  const filtered = movies.sort((a, b) => (a.release_date> b.release_date) ? -1 : 1).map(item => item)

  setCurrentPage(pageNumber)
  setMovies(filtered)
 }
 
 let numberPages = Math.floor(totalResults / 20)
 if (totalResults > 500) {
   numberPages = 26;
 }

  return (
     <>
    <Header getQuery={(query) => setQuery(query)} ClickDate={FilterDate} ClickVotes={FilterVotes} setGenreId={setGenreId} sortCategory={setCategory}/>
    {/* <SmallWatchList></SmallWatchList> */}
    {isLoading ? <Spinner/> :  <div className='container movielist'>
    {movies.map(movie => (
    <Movie movie = {movie} key = {movie.id}></Movie>
    ))}
    {totalResults > 20 ? <Pagination pages={numberPages} nextPage={nextPage} currentPage={currentPage}/>: ''}
    </div> }
    </>
  );
}

export default MovieList;

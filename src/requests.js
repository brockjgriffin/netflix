const key = 'f17c1d843f0aad8406e4e6e48f137ee7'
const baseurl = 'https://api.themoviedb.org/3'

const endpoints = {
    popular: `${baseurl}/movie/popular?api_key=${key}`,
    topRated: `${baseurl}/movie/top_rated?api_key=${key}`,
    trending: `${baseurl}/movie/popular?api_key=${key}&language=en=US&page=2`,
    upcoming: `${baseurl}/movie/upcoming?api_key=${key}`,
    action: `${baseurl}/discover/movie?api_key=${key}&with_genres=28`,
    comedy: `${baseurl}/discover/movie?api_key=${key}&with_genres=35`,
    horror: `${baseurl}/discover/movie?api_key=${key}&with_genres=27`,
    romance: `${baseurl}/discover/movie?api_key=${key}&with_genres=10749`,
    documentary: `${baseurl}/discover/movie?api_key=${key}&with_genres=99`,
    
    
    
}

export default endpoints;
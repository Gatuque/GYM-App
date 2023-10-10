
export const exerciseOptions = {
  method: 'GET',
  params: {limit: '10'},
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
}

export const youtubeOptions = {
  method: 'GET',
  params: {
    id: process.env.REACT_APP_YOUTUBE_ID,
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
     const response = await fetch(url, options)
     const data = await response.json()
     return data
}


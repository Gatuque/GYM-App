
export const exerciseOptions = {
  method: 'GET',
  params: {limit: '10'},
  headers: {
    'X-RapidAPI-Key': process.env.EXERCISE_DB_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
}

export const fetchData = async (url, options) => {
     const response = await fetch(url, options)
     const data = await response.json()
     return data
}


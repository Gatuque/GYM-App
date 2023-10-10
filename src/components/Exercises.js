import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'

const Exercises = ({exercises, setExercises, bodyPart}) => {
  const [currentPage, setCurrentPage] = useState(1)

  const indexOfLastPage = currentPage * 3;
  const indexOfFirstPage = indexOfLastPage - 3;
  const currentExercises = exercises.slice(indexOfFirstPage, indexOfLastPage);

   const handlePaginate = (event, newPage) => {
    setCurrentPage(newPage)
    window.scrollTo({ top: 1800, behavior: "smooth"})
  }

  useEffect(() => {
    console.log(`Body part is ${bodyPart}`);
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if(bodyPart === "all") {
        exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises?bodyPart=${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    }
    fetchExercisesData();
    }, [bodyPart])


  return (
   <Box id="exercises"
    sx={{mt: {lg: "110px"}}}
    mt="50px"
    p="20px"> 
     <Typography variant="h3" mb="46px">
      Showing Results
      </Typography>
      <Stack direction="row" sx={{ gap: { lg: "110px", xs: "50px"}}}
      flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise, index) => (
          <ExerciseCard  key={index} exercise={exercise}/>
        ))} 
      </Stack>
     <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
      {exercises.length > 3  && (
        <Pagination 
        color="standard" 
        shape="rounded" 
        defaultPage={1} 
        count={Math.ceil(exercises.length / 3)}
        page={currentPage} 
        onChange={handlePaginate}
        size="large"
        />
      )}
     </Stack>
   </Box>
  )
}

export default Exercises
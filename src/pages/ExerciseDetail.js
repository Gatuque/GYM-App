import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { fetchData, exerciseOptions, youtubeOptions } from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {

 const [exerciseDetail, setExerciseDetail] = useState({})
 const [youtubeVideos, setYoutubeVideos] = useState([])
 const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
 const [equipmentExercises, setEquipmentExercises] = useState([])
 const { id } = useParams() 

 useEffect(() => {
   const fetchExercisesData = async () => {
    const exerciseDbUrl = "https://exercisedb.p.rapidapi.com"
    const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com"
    
    const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

    const exerciseVideosData = await 
            fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions)
      setYoutubeVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);
      console.log(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equimentExercisesData);
      console.log(equimentExercisesData);
   }

   fetchExercisesData()
 }, [id])


  return (
    <div>
      <Box>
        <Detail exerciseDetail={exerciseDetail}/>
        <ExerciseVideos exerciseVideos={youtubeVideos} name={exerciseDetail.name} />
        <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
      </Box>
    </div>
  ) 
}

export default ExerciseDetail
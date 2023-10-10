import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const ExerciseVideos = ({ exerciseVideos, name }) => {
    if (!exerciseVideos === null) return "loading ..."
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px"}}} p="20px">
        <Typography variant="h3" mb="33px">
          Wacth <span style={{ color: "#ff2625", textTransform: "capitalize"}}>{name}</span> exercise Videos  
        </Typography> 
        <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
        sx={{
            flexDirection: { lg: "row"},
            gap: { lg: "110px", xs: "0" }
        }}>
            {exerciseVideos?.slice(0,6).map((item, index) => (
              
              <div>
                <a key={index} className="exercise-video"
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target="_blank" rel="noreferrer">
                  <img src={item.video.thumbnails[0].url} alt={item.video.url} />
                    <Box>
                      <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">
                      {item.video.title}
                      </Typography>
                      <Typography fontSize="14px" color="#000">
                       {item.video.channelName}
                      </Typography>
              </Box>
               </a> 
              </div>
            ))}

        </Stack>
    </Box>
  )
}

export default ExerciseVideos
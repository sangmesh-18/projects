import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

function SimilarExercises({ equipmentExercises, targetMuscleExercise }) {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '50px' } }}>
      <Typography variant="h3" mb={5}>
        Exercises that target the same  <span style={{ color: 'red' }}>Muscle</span> group
      </Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
        {targetMuscleExercise.length ?
          <HorizontalScrollbar data={targetMuscleExercise} />
          : <Loader />}
      </Stack>
      <Typography variant="h3" mb={5} mt={10}>
        Exercises that target the same <span style={{ color: 'red' }}>Equipment</span>
      </Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
        {equipmentExercises.length ?
          <HorizontalScrollbar data={equipmentExercises} />
          : <Loader />}
      </Stack>

    </Box>

  );
}

export default SimilarExercises;

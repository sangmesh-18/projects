import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Details = ({ exerciseDetail }) => {
  const { gifUrl, bodyPart, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icons: BodyPartImage,
      name: bodyPart,

    },
    {
      icons: TargetImage,
      name: target,
    },
    {
      icons: EquipmentImage,
      name: equipment,
    },
  ];
  return (
    <Stack sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack mt="0px" sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography variant="h3">
          {name}
        </Typography>
        <Typography variant="h5">
          Exericses Keep you strong.{name} {' '} is one of the best exercises to target your {target}.it will help you improve your mood and gain energy.
        </Typography>
        <Typography>
          {
            extraDetail.map((item) => (
              <Stack key={item.name} direction="row" gap="24px" alignItems="center">
                <Button gap="10px " sx={{ background: '#fff2db', borderRadius: '50%', width: '50px', height: '60px' }}>
                  <img src={item.icons} alt={item.name} style={{ width: '30px', height: '30px' }} />
                </Button>
                <Typography variant="h5" color="text.primary " textTransform="capitalize">
                  {item.name}
                </Typography>
              </Stack>
            ))
            }
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Details;

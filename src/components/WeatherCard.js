import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export const WeatherCard = (props) => {
  return (
    <Card style={{width: 400}}>
      <CardContent>
        <Typography sx={{ fontSize: 50 }} color="text.primary" textAlign="center">
          {props.data.cityName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" textAlign="center">
        Local Date & Time: {props.data.localDateTime}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" textAlign="center">
        Local Temperature: {props.data.tempDegrees}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" textAlign="center">
        Conditions: {props.data.conditions}
        </Typography>
      </CardContent>
    </Card>
  );
};

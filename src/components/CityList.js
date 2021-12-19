import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export const CityList = (props) => {
    let listContent = <p>Start adding your cities!</p>;

    if (props.list.length === 0) {
        return <h2>{listContent}</h2>
    };

    return (
        <ul className="city-list">
        {props.list.map((city) => 
            <li className="city-list-item">
                <Card style={{width: 370}}>
                    <CardContent>
                        <Typography sx={{ fontSize: 50 }} color="text.primary" textAlign="center">
                        {city.cityName}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary" textAlign="center">
                        Local Date & Time: {city.localDateTime}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary" textAlign="center">
                        Local Temperature: {city.tempDegrees}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary" textAlign="center">
                        Conditions: {city.conditions}
                        </Typography>
                    </CardContent>
                </Card>
            </li>
        )}
    </ul>
    );
};
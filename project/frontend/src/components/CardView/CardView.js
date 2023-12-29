import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import "./CardView.css";

const CardView = (props) => {
    return (
        <div className="CardView">
            <Card sx={{ maxWidth: 345 }} className="CardView-main">
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.title}
                        </Typography>
                        {props.children}
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
      );
};

export default CardView;
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia, Link } from "@mui/material";

export type LinkCardProps = {
  title: string;
  subtext: string;
  link: string;
  image: any;
};

export default function LinkCard({
                                   title,
                                   subtext,
                                   image,
                                   link
                                 }: LinkCardProps) {
  return (
    <Link href={ link } underline="none" color="inherit" >
      <Card variant="outlined" sx={ { height: '100%', flexGrow: 1 } }>
        <CardMedia
          component="img"
          height="120"
          image={ image }
          alt={ title }
          sx={ {
            objectFit: 'cover',
            borderRadius: '20px',
          } }
        />
        <CardContent sx={ { mt: 2 } }>
          <Typography gutterBottom variant="h6" component="div">
            { title }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            { subtext }
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

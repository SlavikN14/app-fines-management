import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CustomizedDataGrid from './CustomizedDataGrid';
import LinkCard from './LinkCard';
import grafanaLogo from '../resources/grafana_logo.jpg';
import bigQueryLogo from '../resources/big_query_logo.png';

export default function MainGrid() {
  return (
    <Box sx={ { width: '100%', maxWidth: { sm: '100%', md: '1700px' } } }>
      <Typography component="h2" variant="h5" sx={ { mb: 2 } }>
        Overview
      </Typography>
      <Grid container spacing={ 2 } columns={ 12 }>
        <Grid size={ { xs: 12, lg: 9 } }>
          <CustomizedDataGrid/>
        </Grid>
        <Grid size={ { xs: 12, lg: 3 } }>
          <Stack gap={ 2 } direction={ { xs: 'column', sm: 'row', lg: 'column' } }>
            <Grid>
              <LinkCard
                title="Grafana"
                subtext="View Grafana dashboard"
                image={ grafanaLogo }
                link="http://localhost:3000/d/ee1251wf0z1tsbtd/parking-fines-in-kyiv?orgId=1&from=now-1y&to=now&timezone=browser&refresh=5s"
              />
            </Grid>
            <Grid>
              <LinkCard
                title="BigQuery"
                subtext="View BigQuery dashboard"
                image={ bigQueryLogo }
                link="https://console.cloud.google.com/bigquery?ws=!1m5!1m4!4m3!1sanalytics-438119!2sfines_app!3sfine_events"
              />
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

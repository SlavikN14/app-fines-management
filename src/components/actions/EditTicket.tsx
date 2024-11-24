import * as React from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button, Box, Typography } from '@mui/material';
import { rows } from '../../internals/data/gridData';

export default function EditTicket() {
  const { id } = useParams<{ id: string }>();
  const ticket = rows.find(row => row.id === id);

  const [carPlate, setCarPlate] = React.useState(ticket?.carPlate || '');
  const [dateTime, setDateTime] = React.useState(ticket?.dateTime || '');
  const [location, setLocation] = React.useState(ticket?.location || '');

  const handleSave = () => {
    console.log('Ticket saved:', { id, carPlate, dateTime, location });
  };

  if (!ticket) {
    return <Typography variant="h6">Ticket not found</Typography>;
  }

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>Edit Ticket</Typography>
      <TextField
        label="Car Plate"
        value={carPlate}
        onChange={(e) => setCarPlate(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Date & Time"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSave} sx={{ mt: 2 }}>
        Save
      </Button>
    </Box>
  );
}

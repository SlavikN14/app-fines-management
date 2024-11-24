import { GridRowsProp, GridColDef } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import React from "react";
import { Chip } from "@mui/material";

export const columns: GridColDef[] = [
  { width: 1 },
  { field: 'carPlate', headerName: 'Car Plate', flex: 1, minWidth: 100},
  { field: 'dateTime', headerName: 'Date & Time', flex: 1.5, minWidth: 150 },
  { field: 'location', headerName: 'Location', flex: 1.5, minWidth: 150 },
  {
    field: 'violations',
    headerName: 'Violations',
    flex: 2,
    minWidth: 200,
    renderCell: (params) => (
      <div>
        { params.value.map((violation: {type: string; fine: number}) => (
          <Chip
            key={ violation.type }
            label={ `${ violation.type }, $${ violation.fine }` }
            variant="outlined"
            sx={ { margin: '2px' } }
          />
        )) }
      </div>
    ),
  },
  {
    field: 'actions',
    headerName: 'Actions',
    flex: 1,
    minWidth: 150,
    renderCell: (params) => (
      <div>
        <IconButton
          href={ `edit/ticket/${ params.row.id }` }
          size="small"
          sx={ { '&:hover': { color: 'primary.main' } } }
        >
          <EditIcon/>
        </IconButton>
        <IconButton
          href={ `delete_ticket.html?ticketId=${ params.row.id }` }
          size="small"
          sx={ { '&:hover': { color: 'error.main' } } }
        >
          <DeleteIcon/>
        </IconButton>
      </div>
    ),
  },
];

export const rows: GridRowsProp = [
  {
    id: 'T1',
    carPlate: 'ABC123',
    dateTime: '2021-01-01 12:00',
    location: '(40.7128, -74.0060)',
    violations: [
      { type: 'Speeding', fine: 100 },
      { type: 'Red Light', fine: 200 },
    ],
  },
  {
    id: 'T2',
    carPlate: 'DEF456',
    dateTime: '2021-02-15 14:30',
    location: '(34.0522, -118.2437)',
    violations: [
      { type: 'Illegal Parking', fine: 50 },
    ],
  },
  {
    id: 'T3',
    carPlate: 'GHI789',
    dateTime: '2021-03-10 09:45',
    location: '(51.5074, -0.1278)',
    violations: [
      { type: 'Speeding', fine: 150 },
      { type: 'No Seatbelt', fine: 75 },
    ],
  },
  {
    id: 'T4',
    carPlate: 'JKL012',
    dateTime: '2021-04-22 16:20',
    location: '(48.8566, 2.3522)',
    violations: [
      { type: 'Red Light', fine: 200 },
    ],
  },
  {
    id: 'T5',
    carPlate: 'MNO345',
    dateTime: '2021-05-30 11:10',
    location: '(35.6895, 139.6917)',
    violations: [
      { type: 'Speeding', fine: 100 },
      { type: 'Illegal U-turn', fine: 120 },
    ],
  },
];

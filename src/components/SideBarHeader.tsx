import * as React from 'react';
import MuiAvatar from '@mui/material/Avatar';
import MuiListItemAvatar from '@mui/material/ListItemAvatar';
import { styled } from '@mui/material/styles';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Avatar = styled(MuiAvatar)(({ theme }) => ({
  width: 28,
  height: 28,
  backgroundColor: (theme.vars || theme).palette.background.paper,
  color: (theme.vars || theme).palette.text.secondary,
  border: `1px solid ${ (theme.vars || theme).palette.divider }`,
}));

const AdminManagementAvatar = styled(MuiListItemAvatar)({
  minWidth: 0,
  marginRight: 12,
});

export default function SideBarHeader() {

  return (
    <Card sx={{ maxWidth: 345, border: '1px solid', borderColor: 'divider' }}>
      <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <AdminManagementAvatar>
          <Avatar alt="Sitemark Store">
            <ConstructionRoundedIcon sx={ { fontSize: '1rem' } }/>
          </Avatar>
        </AdminManagementAvatar>
        <div>
          <Typography variant="subtitle2" component="div">
            Fines management
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Web app
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

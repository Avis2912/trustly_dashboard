import { useState } from 'react';

import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Iconify from 'src/components/iconify';


import ProductCard from '../product-card';
import ProductSort from '../product-sort';
import ProductFilters from '../product-filters';
import ProductCartWidget from '../product-cart-widget';

// ----------------------------------------------------------------------

export default function ProductsView() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <Container>

<Stack justifyContent="space-between" direction="row" alignItems="center">
      <Typography variant="h3" sx={{ mb: 3 }}>
        Account Settings
      </Typography>
      <Button sx={{ mb: 3 }} target="_blank" href="https://tally.so/r/mBxLkR" variant="contained" color="inherit"startIcon={<Iconify icon="gg:website" />}>
           Save Changes</Button> </Stack>


    <Stack direction="row" spacing={3}>
     <Card sx ={{ height: '500px', width: '100%' }}>
      <Stack
        direction="row"
        spacing={13}
        sx={{mt: 6.5, ml: 11,}}
        alignItems="center">

      <Box sx={{ height: 350, width: 350,  overflow: 'hidden', borderRadius: '100%' }}>
        <img
          src="/assets/images/covers/smb5.png"
          alt="hey"
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
        />
      </Box>

      <Stack
        direction="column"
        spacing={0}
        sx={{mt: 2, }}>

        <Typography fontFamily="serif" fontSize="23px" fontWeight="medium">
        Business Name </Typography> 
        <TextField sx = {{ width: '420px', mt: 1.2, }} size="small"
        fontFamily="serif" fontSize="23px" fontWeight="medium" />

      <Stack direction="row" spacing={2.7}>
        <Stack direction="column">
              <Typography sx = {{ mt: 2, }} fontFamily="serif" fontSize="23px"fontWeight="medium">
              Business Location </Typography> 
              <TextField sx = {{ width: '200px', mt: 1.2, }} size="small"
              fontFamily="serif" fontSize="23px" fontWeight="medium" />
      </Stack>
      <Stack direction="column">
            <Typography sx = {{ mt: 2, }} fontFamily="serif" fontSize="23px"fontWeight="medium">
              Business Industry </Typography> 
              <TextField sx = {{ width: '200px', mt: 1.2, }} size="small"
              fontFamily="serif" fontSize="23px" fontWeight="medium" />
      </Stack>
      </Stack>

      <Stack direction="row" spacing={2.7}>
        <Stack direction="column">
              <Typography sx = {{ mt: 2, }} fontFamily="serif" fontSize="23px"fontWeight="medium">
              Phone Number </Typography> 
              <TextField sx = {{ width: '200px', mt: 1.2, }} size="small"
              fontFamily="serif" fontSize="23px" fontWeight="medium" />
      </Stack>
      <Stack direction="column">
            <Typography sx = {{ mt: 2, }} fontFamily="serif" fontSize="23px"fontWeight="medium">
              Locations </Typography> 
              <TextField sx = {{ width: '200px', mt: 1.2, }} size="small"
              fontFamily="serif" fontSize="23px" fontWeight="medium" />
      </Stack>
      </Stack>

        <Typography sx = {{ mt: 2, }} fontFamily="serif" fontSize="23px" fontWeight="medium">
        Email (contact us to change) </Typography> 
        <TextField sx = {{ width: '420px', mt: 1.2, }} size="small"
        fontFamily="serif" fontSize="23px" fontWeight="medium" />


        </Stack>
       
      </Stack>
      </Card>


       </Stack>
      <ProductCartWidget />
    </Container>
  );
}

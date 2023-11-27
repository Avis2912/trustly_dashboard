import { useState } from 'react';

import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Iconify from 'src/components/iconify';

import { products } from 'src/_mock/products';

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
      <Typography variant="h3" sx={{ mb: 4 }}>
        Your Platform Links
      </Typography>
      <Button variant="contained" color="inherit"startIcon={<Iconify icon="gg:website" />}>
           Request Extra</Button> </Stack>


    <Stack direction="row" spacing={3}>
     <Card sx ={{ height: '500px', width: '65%' }}>
      <Stack
        direction="column"
        spacing={0}>

        <Card sx ={{ height: '100px', backgroundColor: "white",
      borderRadius: '0px', borderBottomWidth: '4px', borderColor: 'black' }}>
      <Stack sx = {{ mt: 3.8, ml: 4 }} spacing={10.5} direction="row" alignItems="center">
    <Stack spacing={2} direction="row" alignItems="center">
      <Iconify icon="cib:google" color="darkblue" height="20px"/>
      <Typography fontFamily="serif" fontSize="23px" fontWeight="bold">
        Google </Typography></Stack>
        <Stack spacing={5} direction="row" alignItems="center">
      <Typography fontFamily="serif" fontSize="23px" fontWeight="medium">
        trustly.club/la57-google </Typography> 
        <Button variant="contained" color="inherit"startIcon={<Iconify icon="ion:qr-code" />}>
           Order QR</Button> </Stack>
      </Stack>

        </Card>

        <Card sx ={{ height: '100px', backgroundColor: "white",
      borderRadius: '0px', borderBottomWidth: '4px', borderColor: 'black' }}>
      <Stack sx = {{ mt: 3.8, ml: 4 }} spacing={8} direction="row" alignItems="center">
    <Stack spacing={2} direction="row" alignItems="center">
      <Iconify icon="cib:groupon" color="green" height="20px"/>
      <Typography fontFamily="serif" fontSize="23px" fontWeight="bold">
        Groupon </Typography></Stack>
        <Stack spacing={7} direction="row" alignItems="center">
      <Typography fontFamily="serif" fontSize="23px" fontWeight="medium">
        trustly.club/la57-gpon </Typography> 
        <Button variant="contained" color="inherit"startIcon={<Iconify icon="ion:qr-code" />}>
           Order QR</Button> </Stack>
      </Stack>
        </Card>

        <Card sx ={{ height: '100px', backgroundColor: "white",
      borderRadius: '0px', borderBottomWidth: '4px', borderColor: 'black' }}>
      <Stack sx = {{ mt: 3.8, ml: 4 }} spacing={13.7} direction="row" alignItems="center">
    <Stack spacing={2} direction="row" alignItems="center">
      <Iconify icon="cib:yelp" color="orange" height="20px"/>
      <Typography fontFamily="serif" fontSize="23px" fontWeight="bold">
        Yelp </Typography></Stack>
        <Stack spacing={7.8} direction="row" alignItems="center">
      <Typography fontFamily="serif" fontSize="23px" fontWeight="medium">
        trustly.club/la57-yelp </Typography> 
        <Button variant="contained" color="inherit"startIcon={<Iconify icon="ion:qr-code" />}>
           Order QR</Button> </Stack>
      </Stack>
        </Card>

        <Card sx ={{ height: '100px', backgroundColor: "white",
      borderRadius: '0px', borderBottomWidth: '4px', borderColor: 'black' }}>
      <Stack sx = {{ mt: 3.8, ml: 4 }} spacing={6.8} direction="row" alignItems="center">
    <Stack spacing={2} direction="row" alignItems="center">
      <Iconify icon="simple-icons:trustpilot" color="black" height="20px"/>
      <Typography fontFamily="serif" fontSize="23px" fontWeight="bold">
        TrustPilot </Typography></Stack>
        <Stack spacing={6.6} direction="row" alignItems="center">
      <Typography fontFamily="serif" fontSize="23px" fontWeight="medium">
        trustly.club/la57-tpilot </Typography> 
        <Button variant="contained" color="inherit"startIcon={<Iconify icon="ion:qr-code" />}>
           Order QR</Button> </Stack>
      </Stack>
        </Card>

      </Stack>
      </Card>

      <Card sx ={{ height: '500px', width: '40%' }}>
        <Stack sx ={{ mt: 3, mx: 3, }}>
          
          <Stack justifyContent="space-between" direction="row" alignItems="center">
      <Typography fontFamily="serif" fontSize="28px" fontWeight="bold">
        Add Links </Typography> 
        <Button variant="contained" color="inherit"startIcon={<Iconify icon="carbon:save" />}>
           Save Changes</Button> 
           </Stack>

        <Stack sx ={{ mt: 1.5, }}>
        <Typography fontFamily="serif" fontSize="23px" fontWeight="medium">
        Google </Typography> 
        <TextField sx = {{ width: '350px', mt: 1.2, }} size="small"
        fontFamily="serif" fontSize="23px" fontWeight="medium" />
        </Stack>

        <Stack sx ={{ mt: 1.5, }}>
        <Typography fontFamily="serif" fontSize="23px" fontWeight="medium">
        Groupon </Typography> 
        <TextField sx = {{ width: '350px', mt: 1.2, }} size="small"
        fontFamily="serif" fontSize="23px" fontWeight="medium" />
        </Stack>

        <Stack sx ={{ mt: 1.5, }}>
        <Typography fontFamily="serif" fontSize="23px" fontWeight="medium">
        Yelp </Typography> 
        <TextField sx = {{ width: '350px', mt: 1.2, }} size="small"
        fontFamily="serif" fontSize="23px" fontWeight="medium" />
        </Stack>

        <Stack sx ={{ mt: 1.5, }}>
        <Typography fontFamily="serif" fontSize="23px" fontWeight="medium">
        TrustPilot </Typography> 
        <TextField sx = {{ width: '350px', mt: 1.2, }} size="small"
        fontFamily="serif" fontSize="23px" fontWeight="medium" />
        </Stack>
        </Stack>
       </Card> 

       </Stack>
      <ProductCartWidget />
    </Container>
  );
}

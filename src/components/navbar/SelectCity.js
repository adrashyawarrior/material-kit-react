import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectCity() {
  const [city, setCity] = React.useState('');

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={city}
          onChange={handleChange}
          label="City"
        >
          <MenuItem value="">All India</MenuItem>
          <MenuItem value={10}>Mathura</MenuItem>
          <MenuItem value={20}>Agra</MenuItem>
          <MenuItem value={30}>Lucknow</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

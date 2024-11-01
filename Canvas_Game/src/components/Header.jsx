/* eslint-disable react/prop-types */
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> cca5d74aa5064df46b9fe144826e622a75f7ab59

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        fontWeight="bold"
        color={colors.gray[700]}
        mb="5px"
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[900]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;

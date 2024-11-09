import {
    Box,
    useMediaQuery,
    useTheme,
  } from "@mui/material";
  import { Header } from "../../components";
  import { tokens } from "../../theme";
  import React from 'react';
  //import { mockTransactions } from "../../data/mockData";
  
  function HelpPage() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const isXlDevices = useMediaQuery("(min-width: 1260px)");
    const isMdDevices = useMediaQuery("(min-width: 724px)");
    const isXsDevices = useMediaQuery("(max-width: 436px)");
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between">
            <Header title="Help Page" subtitle="Welcome to the help page." />
            </Box>
        </Box>
);
}

export default HelpPage;
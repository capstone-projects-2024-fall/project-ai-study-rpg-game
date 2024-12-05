import {
  Box,
  // Button,
  // IconButton,
  // Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Header,
  // StatBox,
  // LineChart,
  // ProgressCircle,
  // BarChart,
  // GeographyChart,
  JiraBoard,
} from "../../components";
// import {
//   DownloadOutlined,
//   Email,
//   PersonAdd,
//   PointOfSale,
//   Traffic,
// } from "@mui/icons-material";
import { tokens } from "../../theme";
import React from 'react';
//import { mockTransactions } from "../../data/mockData";

function Dashboard({email}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isXlDevices = useMediaQuery("(min-width: 1260px)");
  const isMdDevices = useMediaQuery("(min-width: 724px)");
  const isXsDevices = useMediaQuery("(max-width: 436px)");
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        </Box>

        <Box
        display="grid"
        gridTemplateColumns={
          isXlDevices
            ? "repeat(12, 1fr)"
            : isMdDevices
            ? "repeat(6, 1fr)"
            : "repeat(3, 1fr)"
        }
        gridAutoRows="140px"
        gap="20px"
      >
        {/* Sprint Board */}
        <Box
          gridColumn="span 12" // Takes full width on larger screens
          gridrowstart={2} // Adjust this to place it in the correct row based on your design needs
          backgroundColor={colors.primary[300]}
          padding="30px"
        >
          <JiraBoard email={email} />
        </Box>
      </Box>
  </Box>
  );
}

export default Dashboard;

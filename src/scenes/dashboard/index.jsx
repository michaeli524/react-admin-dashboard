import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme.js";
import Header from "../../components/Header.jsx";
import { mockTransactions } from "../../data/mockData.js";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadDoneOutlined";
import EmailIcon from "@mui/icons-material/EmailIcon";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart.jsx";
import BarChart from "../../components/BarChart.jsx";
import GeographyChart from "../../components/GeographyChart.jsx";
import StatBox from "../../components/StatBox.jsx";
import ProgressCircle from "../../components/ProgressCircle.jsx";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
    </Box>
  );
};

export default Dashboard;

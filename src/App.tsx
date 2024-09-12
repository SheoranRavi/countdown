import './App.css'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CountdownTimer from './components/CountdownTimer/CountdownTimer';
import { Typography } from '@mui/material';

const targetDate = new Date("2025-02-03T00:00:00");

function App() {
  console.log(`Target date: ${targetDate.toISOString()}`);
  return (
		<Paper elevation={10}
      sx={{
        maxWidth: "100vw",
        backgroundImage: "url(boat.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
			<Box sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "1px",
        width: "100%",
      }}>
          <img src="WhatsApp Image 2024-09-13 at 12.02.51 AM.jpeg" alt="Wedding"
          style={{
            maxHeight: '20vh',
            objectFit: 'contain',
            boxShadow: '2px 4px 8px 2px gray',
          }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              paddingBlock: "1px",
              marginBottom: "20px",
              color: "black",
            }}
          >
            Saylee &#128147; Ravi
          </Typography>
          <CountdownTimer targetDate={targetDate} />
          <Typography
            variant="h6"
            sx={{
              padding: "1rem",
              color: "white",
            }}
          >
            Wedding Countdown
          </Typography>
        </Box>
          <img src="WhatsApp Image 2024-09-13 at 12.03.58 AM.jpeg" alt="Wedding"
          style={{
            maxHeight: '20vh',
            objectFit: 'contain',
            boxShadow: '2px 4px 8px 2px gray',
          }} />
			</Box>
		</Paper>
  );
}

export default App

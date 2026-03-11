import { Button, TextField, Card, CardContent, Typography } from '@mui/material';
import './App.css';

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <Card sx={{ width: 400, padding: 2 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Login Form
          </Typography>

          <TextField
            label="email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;

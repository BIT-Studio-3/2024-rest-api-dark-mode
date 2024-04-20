// Import the Express module
import express from 'express';
import institutionRoutes from "./routes/institution.js";

// Import the CORS module
import cors from 'cors';

// Create an Express application
const app = express();

// Use the CORS module
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/institutions", institutionRoutes);


// Create a GET route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000.');
});



// Export the Express application. May be used by other modules. For example, API testing
export default app;
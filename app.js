// Import the Express module
import express from 'express';
import systemRoutes from "./routes/system.js";
import waypointRoutes from "./routes/waypoints.js";
import marketRoutes from "./routes/market.js";
import shipyardRoutes from "./routes/shipyard.js";
import marketItemRoutes from "./routes/marketitem.js";
import shipRoutes from "./routes/ship.js";
import agentRoutes from "./routes/agent.js";
import contractRoutes from "./routes/contract.js";
import authRouteMiddleware from "./middleware/authRoute.js";
import authRoutes from "./routes/auth.js";

// Import the CORS module
import cors from 'cors';

// Create an Express application
const app = express();
const setXContentTypeOptions = (req, res, next) => {
    res.set("x-content-type-options", "nosniff");
    next();
};
const setXFrameOptions = (req, res, next) => {
    res.set("x-frame-options", "deny");
    next();
};
const setContentSecurityPolicy = (req, res, next) => {
    res.set("content-security-policy", "default-src 'none'");
    next();
};


// Use the CORS module
app.use(cors());
app.use(setXContentTypeOptions);
app.use(setXFrameOptions);
app.use(setContentSecurityPolicy);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/system", systemRoutes);
app.use("/api/waypoints", waypointRoutes);
app.use("/api/market", marketRoutes);
app.use("/api/shipyard", shipyardRoutes);
app.use("/api/marketItems", marketItemRoutes);
app.use("/api/ships", shipRoutes);
app.use("/api/agentData", agentRoutes);
app.use("/api/contract", contractRoutes);
app.use("/api/auth", authRoutes);


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
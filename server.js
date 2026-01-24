const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// API Configuration
const API_URL = 'https://pagelocked.org/api/v2';
const API_KEY = '35566|3KSMwT1fualn86jLWWGzy7XlWLGgTVVdWOHDLZa8713df21c';

// Proxy Endpoint for Offers
app.get('/api/offers', async (req, res) => {
    try {
        // Get client IP and User Agent
        const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        const userAgent = req.headers['user-agent'];

        // Parameters from frontend or defaults
        const params = {
            ip: clientIp, // In production behind valid proxy, this might need adjustment. For local, it might be ::1
            user_agent: userAgent,
            ctype: 1, // Defaulting to CPI as per example, or we can leave it flexible
            ...req.query 
        };

        // Explicitly set the IP if passed from query (for testing or if strictly required)
        if (req.query.ip) {
            params.ip = req.query.ip;
        }

        console.log('Fetching offers with params:', params);

        const response = await axios.get(API_URL, {
            params: params,
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        });

        res.json(response.data);

    } catch (error) {
        console.error('API Error:', error.response ? error.response.data : error.message);
        res.status(500).json({ 
            success: false, 
            error: 'Failed to fetch offers from provider.' 
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

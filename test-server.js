import express from 'express';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors({ origin: '*' }));
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Login route for testing
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log('Login attempt:', email);

    // Simple test - accept any login
    res.status(200).json({
        message: "Login successful",
        success: true,
        user: { email }
    });
});

app.listen(port, () => {
    console.log(`Test server running on http://localhost:${port}`);
});

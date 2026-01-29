require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const { ethers } = require('ethers');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

// Ethereum Provider Setup
let provider, wallet, contract;
if (process.env.ETHEREUM_RPC_URL && process.env.PRIVATE_KEY) {
  provider = new ethers.JsonRpcProvider(process.env.ETHEREUM_RPC_URL);
  wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  // Note: You would load your ABI here in production
  // contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, ABI, wallet); 
}

// Routes

// Health Check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', network: 'Civic Blockchain' });
});

// Vote Endpoint (Pi Network + Blockchain)
app.post('/api/vote', async (req, res) => {
  const { userId, proposalId, voteChoice, signature } = req.body;

  try {
    // 1. Verify Pi Network Signature (Mock implementation)
    // In production, verify against Pi's SDK public key
    if (!signature) throw new Error("Missing Pi Signature");

    // 2. Record in Postgres
    const query = 'INSERT INTO votes (user_id, proposal_id, choice, timestamp) VALUES ($1, $2, $3, NOW())';
    await pool.query(query, [userId, proposalId, voteChoice]);

    // 3. Optional: Record hash on Ethereum
    if (wallet) {
        const tx = await wallet.sendTransaction({
            to: process.env.CONTRACT_ADDRESS,
            value: ethers.parseEther("0.0"), // Sending data only
            data: ethers.hexlify(ethers.toUtf8Bytes(`Vote:${userId}:${proposalId}`))
        });
        console.log(`Blockchain TX: ${tx.hash}`);
    }

    res.status(201).json({ success: true, message: 'Vote cast successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get Results
app.get('/api/results/:proposalId', async (req, res) => {
  try {
    const query = 'SELECT choice, COUNT(*) as count FROM votes WHERE proposal_id = $1 GROUP BY choice';
    const result = await pool.query(query, [req.params.proposalId]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Error Boundary Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong on the server!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

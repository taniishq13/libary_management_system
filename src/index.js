require('dotenv').config();
const express = require('express');
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get('/test', (req, res) => {
    res.send('Hello, World!');
});

app.post("/api/genres",async (req,res)=>{
    const body = req.body
    let genre = await prisma.genre.create({data:{
        name: body.name
    }})
    res.status(201).json(genre)
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
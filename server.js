// importar express
import express from 'express'
// crear app con express

const app = express();
//usar app.listen para abrir puertos

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
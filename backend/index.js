import 
    express 
from "express";



const PORT = process.env.PORT || 4000;

const app = express();

app.use('/', (req,res) => {
    res.send('hola mundo cachones')
});

app.listen( PORT, () => {
    console.log(`server listening on ${PORT}`);
})
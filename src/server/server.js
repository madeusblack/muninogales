import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const { ENV, PORT } = process.env;

if (ENV==='development') {
  console.log('Dev Config');
}
const app = express();
app.get('*', (req, res) => {
  res.send({ Hello: 'express' });
});
app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log('Server Running on port 3000');
});

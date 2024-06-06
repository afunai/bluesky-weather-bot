import express from 'express';

const app = express();
const port = process.env.PORT || 5001;

app.use(express.static(__dirname + '/../htdocs'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

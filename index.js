require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const UserRouter = require('./src/routers/UserRouter');
const CategoryRouter = require('./src/routers/CategoryRouter');
const PostRouter = require('./src/routers/PostRouter');
const errorMiddleware = require('./src/middlewares/errorMiddleware');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.use(UserRouter);
app.use(CategoryRouter);
app.use(PostRouter);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`ouvindo porta ${3000}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

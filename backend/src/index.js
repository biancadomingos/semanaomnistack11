const express = require("express"); //sem a "/" indica que é um package
const cors = requeire("cors"); //módulo de segurança (quem pode acessa a aplicação)
const routes = require("./routes"); // com o "./" indica que é um arquivo

const app = express();

app.use(cors());
app.use(express.json()); //para que a aplicação entenda o Body em json e corverta no objeto javascript
app.use(routes);


app.listen(3333);
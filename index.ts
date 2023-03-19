import express from 'express';
import RouterApi from './routes';
import log from 'npmlog';

const app = express();
const port = 3001;


RouterApi(app);

app.listen(port, () => {
  log.info("Server Started", `application started on port ${port}`);
})

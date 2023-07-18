// import above es6
import express from 'express';
import exphbs from 'express-handlebars';
import router from './controllers/index.js';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3002;

const hbs = exphbs.create();

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
// Using the session with the object "sess" that is connecting express and the user's session.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// Serve static files
app.use(express.static(path.join(__dirname, 'public'), {
  // Set the correct MIME types
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    } else if (filePath.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

app.use(router);

app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}/` + '.'));


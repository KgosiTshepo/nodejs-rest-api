const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const swaggerDocument = YAML.load('./src/api/swagger.yaml');
const connectDB = require('./src/config/database');

// Load config
dotenv.config({path: './src/config/config.env'});

connectDB();

const app = express();

// Body parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Enable cross-origin resource sharing
app.use(cors());

// Routes
app.use('/', require('./src/routes/index'));
app.use('/api/v1', require('./src/routes/products'));

// Set up swagger ui for API documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`server listening on port ${PORT}`);
});

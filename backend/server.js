import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import listEndpoints from "express-list-endpoints";

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/Luna"
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true, 
}); 
mongoose.Promise = Promise;

//Schemas

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex'),
  },
});
// Models 
const User = mongoose.model('User', UserSchema);


//   PORT=9000 npm start
const port = process.env.PORT || 8000;
const app = express();

//Middlewares for authenticating 

app.use(cors()); 
app.use(express.json()); 

const authenticateUser = async (req, res, next) => {
  const accessToken = req.header('Authorization');

  try {
    const user = await user.findOne({
      accessToken
    });
    if (user) {
      next();
    } else {
      res.status(404).json({
        response: {
          message: "Welcome, please sign in or sign up",
        },
        success: false,
      });
    }
  } catch (error) {
    res.status(400).json({
      response: error,
      success: false
    });
  }
};

// ---------------Routes
//get 
app.get('/', (req, res) => {
  res.json(listEndpoints(app));
});
//post
app.post('/signup', async (req, res) => {
	    const { 
      name,
      username,
      password,
      email } = req.body;

  try {
    const salt = bcrypt.genSaltSync();

    if (password.length < 5) {
      throw 'Your password must be at least 5 characters long';
    }

    const newUser = await new User({
      name,
      username,
      email,
      password: bcrypt.hashSync(password, salt),
    }).save();

    res.status(201).json({
      response: {
        userId: newUser._id,
        name: newUser.name,
        username: newUser.username,
        email: newUser.email,
        accessToken: newUser.accessToken,
      },
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      response: error,
      success: false
    });
  }
});

app.post('/login', async (req, res) => {
  const {
      name,
      username,
      email,
      password
  } = req.body;

  try {
    const user = await User.findOne({
      username
    });

    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({
        response: {
          userId: user._id,
          name: user.name,
          username: user.username,
          accessToken: user.accessToken
        },
        success: true
      });

    } else {
      res.status(404).json({
        response: 'Invalid username or password',
        success: false
      });
    }
  } catch (error) {
    res.status(400).json({
      resonse: error,
      success: false
    })
  }

});

// Start the server
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`)
})
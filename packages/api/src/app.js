
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import utils from '@deipnon/utils/lib'
import mongoose from 'mongoose'


import {DB_CONNECTION} from "./config";
import { Routes } from "./routes/";

class App {


  constructor () {
    this.app = express();
    this.config();
    new Routes().routes(this.app);
    this.mongoSetup();
  }

  config() {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(helmet())
  }

  mongoSetup() {
    mongoose.connect(DB_CONNECTION,{ useNewUrlParser: true }).then(() => console.log("MongoDB Connected")).catch(err => console.log(err));
    mongoose.set("useCreateIndex", true);
    mongoose.set("useFindAndModify", false);
  }
}

export default new App().app

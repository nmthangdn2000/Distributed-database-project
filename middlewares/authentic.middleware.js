'use strict';

import jwt from 'jsonwebtoken';
import appConfig from '../configs/appConfig';
import * as database from '../start/database';

const verifyUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, appConfig.KEY_SECRET_JWT);
    req.username = decoded.username;
    await database.connect(decoded.serverDatabase);
    next();
    // res.send('ok');
  } catch (error) {
    console.log(error.message);
    return res.status(403).json({
      message: 'Authorization failed',
    });
  }
};

export { verifyUser };

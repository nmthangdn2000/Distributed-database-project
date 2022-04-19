'use strict';

import jwt from 'jsonwebtoken';
import { SERVERNAME } from '../common/constants';
import appConfig from '../configs/appConfig';
import * as database from '../start/database';

const verifyUser = async (req, res, next) => {
  try {
    // const token = req.headers.authorization.split(' ')[1];
    const token = req.signedCookies.token;
    const decoded = jwt.verify(token, appConfig.KEY_SECRET_JWT);
    res.app.locals.user = decoded;
    if (SERVERNAME.MAIN == decoded.serverDatabase) res.app.locals.serverName = 'Server 1';
    else if (SERVERNAME.SV1 == decoded.serverDatabase) res.app.locals.serverName = 'Server 2';
    else res.app.locals.serverName = 'Server 3';

    req.username = decoded.username;
    req.serverDatabase = decoded.serverDatabase;
    await database.connect(decoded.serverDatabase);
    next();
    // res.send('ok');
  } catch (error) {
    console.log(error.message);
    res.redirect('/admin/login');
    // return res.status(403).json({
    //   message: 'Authorization failed',
    // });
  }
};

export { verifyUser };

import {Request, Response, NextFunction} from 'express';

const getLogin = async (req: Request, res: Response) => {
  res.render("login");  
}

export default {
  getLogin
}
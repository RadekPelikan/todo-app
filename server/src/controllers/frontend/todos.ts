import {Request, Response, NextFunction} from 'express';

const getTodos = async (req: Request, res: Response) => {
  res.render("todos", { title: "AAA", todos: res.locals.todos });  
}

export default {
  getTodos
}
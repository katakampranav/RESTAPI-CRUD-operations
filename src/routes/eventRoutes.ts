import { Router } from "express";
import eventControllers from "../controllers/eventController";

const {addEvent,getEvent,getAllEvent,deleteEvent,updateEvent,searchEvent} = eventControllers;
const eventRouter = Router();

eventRouter.post('/event',addEvent);
eventRouter.get('/event/:id',getEvent);
eventRouter.get('/events',getAllEvent);
eventRouter.delete('/event/:id',deleteEvent);
eventRouter.put('/event/:id',updateEvent);
eventRouter.get('/event/:id',searchEvent);

export default eventRouter;
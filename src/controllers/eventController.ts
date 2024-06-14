import { Request, Response } from "express";
import Event from "../models/eventModel";

const addEvent = async (req: Request, res: Response) => {
  try {
    const {
      title,
      description,
      capacity,
      numOfDays,
      dayWiseDescription,
      instructions,
      location,
      startDate,
      endDate,
      startTime,
      endTime,
      hostName,
      hostMobile,
      hostEmail,
    } = req.body;

    const event = await Event.create({
      title,
      description,
      capacity,
      numOfDays,
      dayWiseDescription,
      instructions,
      location,
      startDate,
      endDate,
      startTime,
      endTime,
      hostName,
      hostMobile,
      hostEmail,
    });

    return res.status(200).json(event);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Server Error");
  }
};

const getEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id);
    return res.status(200).json(event);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Server Error");
  }
};

const getAllEvent = async (req: Request, res: Response) => {
  try {
    const events = await Event.find();
    return res.status(200).json(events);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Server Error");
  }
};

const deleteEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Event.findByIdAndDelete(id);
    return res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Server Error");
  }
};

const updateEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedEvent = await Event.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json(updatedEvent);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Server Error");
  }
};

const searchEvent = async (req: Request, res: Response) => {
  try {
    const { query } = req.params;
    const events = await Event.find({ $text: { $search: query } });
    return res.status(200).json(events);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Server Error");
  }
};

export default {
  addEvent,
  getEvent,
  getAllEvent,
  deleteEvent,
  updateEvent,
  searchEvent,
};

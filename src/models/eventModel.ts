import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }, 
    capacity: {
        type: Number,
        required: true,
    },
    numOfDays:{
        type: Number,
        required: true,
    },
    dayWiseDescription: {
        type: [String],
        required: true,
    },

    instructions: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },

    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },

    startTime: {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true,
    },

    numOfRegisteredUsers: {
        type: Number,
        default: 0,
    },

    hostName: {
        type: String,
        required: true,
    },  
    hostMobile: {
        type: String,
        required: true,
    },
    hostEmail: {
        type: String,
        required: true,
    },
    
    qrData:{
        type: [String],
    },
    registeredUsers:{
        type: [String]
    }
},
{
    timestamps:true
}

);

const Event = mongoose.model('Event', eventSchema);

export default Event;
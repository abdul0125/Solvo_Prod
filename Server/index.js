import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import askExpertRoutes from './Routers/AskExpert.js';
import askFeedRoutes from './Routers/AskFeed.js';
import userRouter from './Routers/user.js';
import hintRouter from './Routers/Hints.js';
import lectureRouter from './Routers/Lecture.js';
import notesRouter from './Routers/Notes.js';
import messageRouter from './Routers/message.js'
import communityRouter from './Routers/Communities.js';
import commentRouter  from './Routers/comments.js';
import answer from './Routers/Answer.js';
import slotRouter from './Routers/slot.js'
// vedio chat stuff imports
// import groupHandler from "../Controllers/groupHandler.js"
import { createRequire } from "module";
const require  =  createRequire(import.meta.url);
const { ExpressPeerServer } = require('peer');
const socket  = require('socket.io');
const uuidv4   = require('uuid');





const app = express();
// peerServer
app.set('view engine', 'ejs')
app.use(bodyParser.json({limit:"30mb",extended:true }));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
app.use("/user", userRouter);
app.use("/message", messageRouter);
app.use('/askExpert',askExpertRoutes);
app.use('/askFeed',askFeedRoutes);
app.use("/hints", hintRouter);
app.use("/videos", lectureRouter);
app.use("/notes",notesRouter);
app.use("/communities",communityRouter)

app.use('/post',commentRouter)
app.use('/answer',answer)
app.use('/slot',slotRouter)


const CONNECTION_URL = 'mongodb+srv://dbuser:mydbuser@memocluster.xlclh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT||5000;


mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
    console.log('mongodb is connected');  
})
.catch((err)=>{
console.log(err.message)
});



mongoose.set('useFindAndModify', false);

const server = app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

// vedio chat server stuff...
const peerServer = ExpressPeerServer(server, {
    debug: true
  });
  
app.use('/peerjs', peerServer);

const createPeerServerListeners = (peerServer) => {
  peerServer.on('connection', (client) => {
    console.log('succesfully connecter to peer js server');
    console.log(client.id);
  });
};

const io = socket(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});
let users= []

const addUser = (userid,socketid)=>{users = users.filter((user) => user.email !== userid);
users.push({userId:userid,socketId:socketid})}

const getUser =(userId)=>users.find((user)=>user.userId===userId.user)

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
}

createPeerServerListeners(peerServer);

  
  let peers = [];
  let groupCallRooms = [];
  
  const broadcastEventTypes = {
    ACTIVE_USERS: 'ACTIVE_USERS',
    GROUP_CALL_ROOMS: 'GROUP_CALL_ROOMS'
  };
  
  io.on('connection', (socket) => {
    socket.emit('connection', null);
    //console.log('new user connected');
    //console.log(socket.id);

    socket.on('addUser',(user)=>{
      addUser(user,socket.id)
      console.log("---------------------joined-------------------------",users)}
      )
      socket.on('disconnect',()=>{removeUser(socket.id)
      console.log("removed",socket.id)})
      socket.on('sendMessage',(data)=>{
        const user = getUser(data)
        console.log(user,data,users)
        if(user)
        {io.to(user.socketId).emit('recieve',data.text)
        console.log(socket.id,user.socketId,users,"sending")    }   
      })


  
    socket.on('register-new-user', (data) => {
      peers.push({
        username: data.username,
        socketId: data.socketId
      });
      console.log('registered new user');
      console.log(peers);
  
      io.sockets.emit('broadcast', {
        event: broadcastEventTypes.ACTIVE_USERS,
        activeUsers: peers
      });
  
      io.sockets.emit('broadcast', {
        event: broadcastEventTypes.GROUP_CALL_ROOMS,
        groupCallRooms
      });
    });
  
    socket.on('disconnect', () => {
     // console.log('user disconnected');
      peers = peers.filter(peer => peer.socketId !== socket.id);
      io.sockets.emit('broadcast', {
        event: broadcastEventTypes.ACTIVE_USERS,
        activeUsers: peers
      });
  
      groupCallRooms = groupCallRooms.filter(room => room.socketId !== socket.id);
      io.sockets.emit('broadcast', {
        event: broadcastEventTypes.GROUP_CALL_ROOMS,
        groupCallRooms
      });
    });
  
    // listeners related with direct call
  
    socket.on('pre-offer', (data) => {
    //  console.log('pre-offer handled');
      io.to(data.callee.socketId).emit('pre-offer', {
        callerUsername: data.caller.username,
        callerSocketId: socket.id
      });
    });
  
    socket.on('pre-offer-answer', (data) => {
    //  console.log('handling pre offer answer');
      io.to(data.callerSocketId).emit('pre-offer-answer', {
        answer: data.answer
      });
    });
  
    socket.on('webRTC-offer', (data) => {
      //console.log('handling webRTC offer');
      io.to(data.calleeSocketId).emit('webRTC-offer', {
        offer: data.offer
      });
    });
  
    socket.on('webRTC-answer', (data) => {
     // console.log('handling webRTC answer');
      io.to(data.callerSocketId).emit('webRTC-answer', {
        answer: data.answer
      });
    });
  
    socket.on('webRTC-candidate', (data) => {
    //  console.log('handling ice candidate');
      io.to(data.connectedUserSocketId).emit('webRTC-candidate', {
        candidate: data.candidate
      });
    });
  
    socket.on('user-hanged-up', (data) => {
      io.to(data.connectedUserSocketId).emit('user-hanged-up');
    });
  
    // // listeners related with group call
    // socket.on('group-call-register', (data) => {
    //   const roomId = uuidv4();
    //   socket.join(roomId);
  
    //   const newGroupCallRoom = {
    //     peerId: data.peerId,
    //     hostName: data.username,
    //     socketId: socket.id,
    //     roomId: roomId
    //   };
  
    //   groupCallRooms.push(newGroupCallRoom);
    //   io.sockets.emit('broadcast', {
    //     event: broadcastEventTypes.GROUP_CALL_ROOMS,
    //     groupCallRooms
    //   });
    // });
  
    // socket.on('group-call-join-request', (data) => {
    //   io.to(data.roomId).emit('group-call-join-request', {
    //     peerId: data.peerId,
    //     streamId: data.streamId
    //   });
  
    //   socket.join(data.roomId);
    // });
  
    // socket.on('group-call-user-left', (data) => {
    //   socket.leave(data.roomId);
  
    //   io.to(data.roomId).emit('group-call-user-left', {
    //     streamId: data.streamId
    //   });
    // });
  
    // socket.on('group-call-closed-by-host', (data) => {
    //   groupCallRooms = groupCallRooms.filter(room => room.peerId !== data.peerId);
  
    //   io.sockets.emit('broadcast', {
    //     event: broadcastEventTypes.GROUP_CALL_ROOMS,
    //     groupCallRooms
    //   });
    // });
  });
    
const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const cors = require('cors')

const app = express()
const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
})

io.on('connection', (socket) => {
  console.log('🟢 Connected:', socket.id)

  socket.on('join', (roomId) => {
    socket.join(roomId)
    console.log(`➡️ ${socket.id} joined room: ${roomId}`)

    // ルーム内の全員に通知
    io.to(roomId).emit('message', `${socket.id} がルームに参加しました`)
  })

  socket.on('disconnect', () => {
    console.log('🔴 Disconnected:', socket.id)
  })
})

const PORT = 3001
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
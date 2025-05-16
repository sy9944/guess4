import { Server } from 'socket.io'
import type { NextApiRequest, NextApiResponse } from 'next'

const ioHandler = (_: NextApiRequest, res: NextApiResponse) => {
  if (!res.socket.server.io) {
    console.log('🔌 Socket.IO server starting...')
    const io = new Server(res.socket.server as any, {
      path: '/api/socket',
      addTrailingSlash: false,
    })
    res.socket.server.io = io

    io.on('connection', (socket) => {
      console.log('✅ New client connected')

      socket.on('guess', (msg) => {
        console.log('🗣 Received guess:', msg)
        socket.broadcast.emit('opponent-guess', msg)
      })
    })
  }
  res.end()
}

export default ioHandler
'use client'

import { useEffect, useState } from 'react'
import { useSocket } from '@/hooks/useSocket'

export default function RoomPage({ params }: { params: { roomId: string } }) {
  const { roomId } = params
  const socket = useSocket(roomId)

  const [message, setMessage] = useState<string | null>(null)

  useEffect(() => {
    if (!socket) return

    // サーバーからのメッセージ受信
    socket.on('message', (msg: string) => {
      setMessage(msg)
    })

    return () => {
      socket.off('message')
    }
  }, [socket])

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6">Room: {roomId}</h1>
      <p className="text-white-700 mb-4">このページは {roomId} のルームです。</p>
      <p className="text-white-500">
        {message ? `📡 メッセージ: ${message}` : 'サーバーからのメッセージを待っています...'}
      </p>
    </main>
  )
}
import Image from "next/image";
import Chat from '@/components/chatbox'
import Box from '@/components/Box'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Chat/>
      </div>
      <div>
      <Box/>
      </div>
    </main>
  );
}

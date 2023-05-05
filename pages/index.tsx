import { Chat } from '../components/Chat'
function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-teal-400 to-blue-500">
      <div className="flex flex-col items-center gap-12 justify-center w-full max-w-4xl p-4">
        <h1 className="text-4xl font-bold text-white">Code Buddy</h1>
        <div className="w-full">
          <Chat />
        </div>
      </div>
    </div>
  )
}
export default Home
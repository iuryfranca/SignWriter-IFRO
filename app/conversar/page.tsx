import { Button } from "@/components/ui/button"
import { SignWriter } from "@/components/sign-writer"
import Link from "next/link"
import { ArrowLeft, Send } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function Conversar() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <header className="bg-blue-600 p-4 text-white flex items-center">
        <Link href="/">
          <Button variant="ghost" size="icon" className="mr-2">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-xl font-bold">Conversar</h1>
      </header>

      <main className="flex-1 p-4 flex flex-col">
        <SignWriter text="Inicie uma conversa em tempo real usando sinais ou texto." />

        <div className="flex-1 bg-white rounded-lg p-4 mt-4 overflow-y-auto">{/* Área de chat */}</div>

        <div className="mt-4 flex space-x-2">
          <Input placeholder="Digite sua mensagem" className="flex-1" />
          <Button size="icon">
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </main>
    </div>
  )
}


import { Button } from "@/components/ui/button"
import { SignWriter } from "@/components/sign-writer"
import Link from "next/link"
import { ArrowLeft, Keyboard } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function EscreverSinais() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <header className="bg-blue-600 p-4 text-white flex items-center">
        <Link href="/">
          <Button variant="ghost" size="icon" className="mr-2">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-xl font-bold">Escrever Sinais</h1>
      </header>

      <main className="flex-1 p-4">
        <SignWriter text="Escreva texto para converter em sinais." />

        <div className="mt-4 space-y-4">
          <Input placeholder="Digite o texto aqui" />
          <Button className="w-full" size="lg">
            <Keyboard className="mr-2 h-5 w-5" />
            Converter para Sinais
          </Button>
        </div>
      </main>
    </div>
  )
}


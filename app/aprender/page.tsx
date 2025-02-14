import { Button } from "@/components/ui/button"
import { SignWriter } from "@/components/sign-writer"
import Link from "next/link"
import { ArrowLeft, BookOpen } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Aprender() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <header className="bg-blue-600 p-4 text-white flex items-center">
        <Link href="/">
          <Button variant="ghost" size="icon" className="mr-2">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-xl font-bold">Aprender</h1>
      </header>

      <main className="flex-1 p-4">
        <SignWriter text="Explore recursos educacionais para aprender Libras e SignWriting." />

        <div className="mt-4 grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Lições Básicas</CardTitle>
            </CardHeader>
            <CardContent>
              <Button>
                <BookOpen className="mr-2 h-5 w-5" />
                Iniciar
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Praticar SignWriting</CardTitle>
            </CardHeader>
            <CardContent>
              <Button>
                <BookOpen className="mr-2 h-5 w-5" />
                Começar
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}


import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Camera, Keyboard, MessageSquare, Settings, TrendingUp, History, Pen } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-blue-50">
      <header className="bg-blue-600 p-4 text-white">
        <div className="flex items-center">
          <Pen className="h-8 w-8 mr-2 text-yellow-300" />
          <h1 className="text-xl font-bold">SignWriter</h1>
          <div className="flex-grow" />
          <Avatar>
            <AvatarImage src="/placeholder.svg" alt="Perfil" />
            <AvatarFallback>US</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4">
        <Tabs defaultValue="home" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="home">Início</TabsTrigger>
            <TabsTrigger value="dictionary">Dicionário</TabsTrigger>
            <TabsTrigger value="progress">Progresso</TabsTrigger>
          </TabsList>
          <TabsContent value="home">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Link href="/traduzir-sinais" className="w-full">
                <Card>
                  <CardContent className="p-4 flex flex-col items-center">
                    <Button variant="ghost" size="lg" className="w-full h-24">
                      <Camera className="h-8 w-8 mb-2" />
                      <span>Traduzir Sinais</span>
                    </Button>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/escrever-sinais" className="w-full">
                <Card>
                  <CardContent className="p-4 flex flex-col items-center">
                    <Button variant="ghost" size="lg" className="w-full h-24">
                      <Keyboard className="h-8 w-8 mb-2" />
                      <span>Escrever Sinais</span>
                    </Button>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/conversar" className="w-full">
                <Card>
                  <CardContent className="p-4 flex flex-col items-center">
                    <Button variant="ghost" size="lg" className="w-full h-24">
                      <MessageSquare className="h-8 w-8 mb-2" />
                      <span>Conversar</span>
                    </Button>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/aprender" className="w-full">
                <Card>
                  <CardContent className="p-4 flex flex-col items-center">
                    <Button variant="ghost" size="lg" className="w-full h-24">
                      <BookOpen className="h-8 w-8 mb-2" />
                      <span>Aprender</span>
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </div>
            <Card className="mb-6">
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold mb-2 flex items-center">
                  <TrendingUp className="mr-2" />
                  Sinais Populares
                </h2>
                <div className="flex flex-wrap gap-2">
                  {["Olá", "Obrigado", "Por favor", "Desculpe", "Amor"].map((sign) => (
                    <Button key={sign} variant="outline" size="sm">
                      {sign}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold mb-2 flex items-center">
                  <History className="mr-2" />
                  Histórico Recente
                </h2>
                <ul className="space-y-2">
                  {["Bom dia", "Como vai?", "Tudo bem", "Até logo"].map((item) => (
                    <li key={item} className="flex items-center">
                      <span className="mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="dictionary">
            <Card>
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold mb-2">Dicionário de Sinais</h2>
                <p>Conteúdo do dicionário será exibido aqui.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="progress">
            <Card>
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold mb-4">Seu Progresso</h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Sinais Aprendidos</span>
                      <span>65%</span>
                    </div>
                    <Progress value={65} className="w-full" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Lições Completadas</span>
                      <span>40%</span>
                    </div>
                    <Progress value={40} className="w-full" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Precisão na Tradução</span>
                      <span>78%</span>
                    </div>
                    <Progress value={78} className="w-full" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-blue-600 p-4">
        <nav className="flex justify-around">
          <Link href="/traduzir-sinais">
            <Button variant="ghost" size="icon" className="text-white">
              <Camera className="h-6 w-6" />
            </Button>
          </Link>
          <Link href="/escrever-sinais">
            <Button variant="ghost" size="icon" className="text-white">
              <Keyboard className="h-6 w-6" />
            </Button>
          </Link>
          <Link href="/conversar">
            <Button variant="ghost" size="icon" className="text-white">
              <MessageSquare className="h-6 w-6" />
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="text-white">
            <Settings className="h-6 w-6" />
          </Button>
        </nav>
      </footer>
    </div>
  )
}


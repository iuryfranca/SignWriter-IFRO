"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { SignWriter } from "@/components/sign-writer"
import Link from "next/link"
import { ArrowLeft, Camera, Mic, Image, RotateCcw, Copy } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TraduzirSinais() {
  const [isTranslating, setIsTranslating] = useState(false)
  const [translatedText, setTranslatedText] = useState("")

  const startTranslation = () => {
    setIsTranslating(true)
    // Simular uma tradução após 2 segundos
    setTimeout(() => {
      setTranslatedText("Olá, como vai você?")
      setIsTranslating(false)
    }, 2000)
  }

  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <header className="bg-blue-600 p-4 text-white flex items-center">
        <Link href="/">
          <Button variant="ghost" size="icon" className="mr-2">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-xl font-bold">Traduzir Sinais</h1>
      </header>

      <main className="flex-1 p-4">
        <SignWriter text="Use a câmera ou faça upload de uma imagem para traduzir sinais em tempo real." />

        <Tabs defaultValue="camera" className="mt-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="camera">Câmera</TabsTrigger>
            <TabsTrigger value="upload">Upload</TabsTrigger>
          </TabsList>
          <TabsContent value="camera" className="mt-4">
            <Card className="w-full aspect-video bg-gray-200 flex items-center justify-center">
              {isTranslating ? (
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-2"></div>
                  <p>Traduzindo...</p>
                </div>
              ) : (
                <Camera className="h-12 w-12 text-gray-400" />
              )}
            </Card>
            <div className="mt-4 flex justify-center space-x-4">
              <Button onClick={startTranslation} disabled={isTranslating}>
                <Camera className="mr-2 h-5 w-5" />
                {isTranslating ? "Traduzindo..." : "Iniciar Tradução"}
              </Button>
              <Button variant="outline">
                <Mic className="mr-2 h-5 w-5" />
                Áudio
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="upload" className="mt-4">
            <Card className="w-full aspect-video bg-gray-200 flex items-center justify-center border-2 border-dashed border-gray-400">
              <div className="text-center">
                <Image className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p>Arraste uma imagem ou clique para fazer upload</p>
              </div>
            </Card>
            <div className="mt-4 flex justify-center">
              <Button>
                <Image className="mr-2 h-5 w-5" />
                Selecionar Imagem
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {translatedText && (
          <Card className="mt-6">
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold mb-2">Tradução:</h2>
              <p>{translatedText}</p>
              <div className="mt-4 flex justify-end space-x-2">
                <Button variant="outline" size="sm">
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Refazer
                </Button>
                <Button variant="outline" size="sm">
                  <Copy className="mr-2 h-4 w-4" />
                  Copiar
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="mt-6">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-2">Dicas de Tradução:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Certifique-se de que a iluminação esteja adequada</li>
              <li>Mantenha as mãos dentro do quadro da câmera</li>
              <li>Faça movimentos claros e precisos</li>
              <li>Para melhores resultados, use um fundo neutro</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}


"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface SignWriterProps {
  text: string
}

export function SignWriter({ text }: SignWriterProps) {
  const [showSignWriter, setShowSignWriter] = useState(false)

  // Esta é uma função simulada. Na implementação real, você usaria uma biblioteca
  // ou API para converter o texto em SignWriting.
  const convertToSignWriting = (text: string) => {
    return `SignWriting: ${text}`
  }

  return (
    <Card className="mt-4">
      <CardContent className="p-4">
        <Button onClick={() => setShowSignWriter(!showSignWriter)} className="mb-4">
          {showSignWriter ? "Mostrar Texto" : "Mostrar SignWriting"}
        </Button>
        {showSignWriter ? <div className="p-4 bg-blue-100 rounded">{convertToSignWriting(text)}</div> : <p>{text}</p>}
      </CardContent>
    </Card>
  )
}


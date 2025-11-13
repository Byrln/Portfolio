"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 text-center px-4">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-white">Page Not Found</h2>
          <p className="text-gray-400">
            Хайгаад байгаа хуудас тань алгадаа.
          </p>
        </div>

        <Link href="/" className="inline-block">
          <Button
            size="lg"
            className="group bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white transition-all duration-300 px-8 border-none"
          >
            <Home className="mr-2 h-4 w-4" />
            Нүүрлүү буцах
          </Button>
        </Link>
      </div>
    </div>
  )
}
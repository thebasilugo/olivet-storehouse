"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export default function ErrorBoundary({ children, fallback }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const errorHandler = (error: ErrorEvent) => {
      console.error("Caught error:", error)
      setError(error.error)
      setHasError(true)
    }

    window.addEventListener("error", errorHandler)

    return () => {
      window.removeEventListener("error", errorHandler)
    }
  }, [])

  if (hasError) {
    if (fallback) return <>{fallback}</>

    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] p-6 text-center">
        <AlertTriangle className="h-12 w-12 text-destructive mb-4" />
        <h2 className="text-xl font-bold mb-2">Something went wrong</h2>
        <p className="text-muted-foreground mb-6">We're sorry, but there was an error loading this page.</p>
        <div className="flex gap-4">
          <Button onClick={() => window.location.reload()}>Refresh Page</Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            Go Back
          </Button>
        </div>
        {error && process.env.NODE_ENV === "development" && (
          <div className="mt-6 p-4 bg-muted rounded-md text-left overflow-auto max-w-full">
            <p className="font-mono text-sm">{error.toString()}</p>
          </div>
        )}
      </div>
    )
  }

  return <>{children}</>
}


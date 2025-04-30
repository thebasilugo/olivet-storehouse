import { Loader2 } from "lucide-react"

interface LoadingFallbackProps {
  message?: string
  fullScreen?: boolean
}

export default function LoadingFallback({ message = "Loading...", fullScreen = false }: LoadingFallbackProps) {
  return (
    <div className={`flex flex-col items-center justify-center ${fullScreen ? "min-h-screen" : "py-12"}`}>
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <p className="mt-4 text-muted-foreground">{message}</p>
    </div>
  )
}


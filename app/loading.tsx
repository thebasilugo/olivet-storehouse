import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <Loader2 className="h-10 w-10 text-orange-600 animate-spin" />
    </div>
  )
}

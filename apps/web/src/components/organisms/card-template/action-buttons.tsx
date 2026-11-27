import { Button } from "@workspace/ui/components/button"
import { Heart } from "lucide-react"

export default function ActionButtons() {
  return (
    <div>
      <Button
        size="lg"
        className="bg-[#3D1308] px-6 py-2.5 text-sm font-semibold text-white"
      >
        Да!
        <Heart
          fill="currentColor"
          strokeWidth={0}
          className="text-yellow-300"
        />
      </Button>
      <Button
        size="lg"
        className="bg-white/75 px-6 py-2.5 text-sm font-semibold"
      >
        Нет
      </Button>
    </div>
  )
}

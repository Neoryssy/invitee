import { Badge } from "@workspace/ui/components/badge"
import { Trees } from "lucide-react"

type Props = { text: string }

export default function ActivityBadge({ text }: Props) {
  return (
    <Badge
      variant="secondary"
      className="h-fit gap-2 bg-coral/25 px-3 py-1 font-bold text-dark-orange"
    >
      <Trees className="size-4" />
      <span className="text-xs font-bold tracking-widest uppercase">
        {text}
      </span>
    </Badge>
  )
}

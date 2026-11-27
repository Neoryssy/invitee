import type { LucideIcon } from "lucide-react"

type Props = {
  icon: LucideIcon
  text: string
}

export default function DetailItem({ icon: Icon, text }: Props) {
  return (
    <div className="flex items-center gap-2.5">
      <Icon className="size-4" />
      <p>{text}</p>
    </div>
  )
}

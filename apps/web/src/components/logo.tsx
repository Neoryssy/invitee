import { Heart } from "lucide-react"

export default function Logo() {
  return (
    <a
      href="/"
      className="group flex items-center gap-2 font-heading text-xl font-semibold"
    >
      <div className="flex size-9 items-center justify-center rounded-full bg-linear-to-br from-coral via-light-salmon to-light-coral transition-transform duration-350 ease-in-out group-hover:rotate-15">
        <Heart color="#fff" fill="#fff" className="inset-0 size-4" />
      </div>
      <span>Пригласи меня</span>
    </a>
  )
}

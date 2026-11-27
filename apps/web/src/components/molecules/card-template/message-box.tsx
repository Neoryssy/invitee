type Props = { text: string }

export default function MessageBox({ text }: Props) {
  return (
    <p className="rounded-2xl bg-white/50 p-4 whitespace-pre-line">{text}</p>
  )
}

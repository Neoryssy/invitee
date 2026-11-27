import ActionButtons from "./action-buttons"

type Props = {
  signature: string
}

export default function CardFooter({ signature }: Props) {
  return (
    <div>
      <ActionButtons />

      <p className="text-right font-heading text-base italic">
        С теплом, {signature}
      </p>
    </div>
  )
}

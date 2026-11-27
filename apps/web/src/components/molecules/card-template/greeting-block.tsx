type Props = { name: string }

export default function GreetingBlock({ name }: Props) {
  return (
    <div>
      <p>Приглашение для</p>
      <h3 className="font-heading text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
        {name}
      </h3>
    </div>
  )
}

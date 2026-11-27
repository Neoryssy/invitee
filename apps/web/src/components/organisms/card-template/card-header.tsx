import ActivityBadge from "@/components/molecules/card-template/activity-badge"
import GreetingBlock from "@/components/molecules/card-template/greeting-block"

type Props = {
  activity: string
  name: string
}

export default function CardHeader({ activity, name }: Props) {
  return (
    <div>
      <ActivityBadge text={activity} />
      <GreetingBlock name={name} />
    </div>
  )
}

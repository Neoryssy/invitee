import DetailItem from "@/components/molecules/card-template/detail-item"
import { CalendarHeart, Clock, MapPin } from "lucide-react"

type Props = {
  date: string
  time: string
  location: string
}

export default function EventDetailsList({ date, location, time }: Props) {
  return (
    <div className="grid gap-2.5 text-sm">
      <DetailItem icon={CalendarHeart} text={date} />
      <DetailItem icon={Clock} text={time} />
      <DetailItem icon={MapPin} text={location} />
    </div>
  )
}

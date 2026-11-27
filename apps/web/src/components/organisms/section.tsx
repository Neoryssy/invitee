import { Badge } from "@workspace/ui/components/badge"
import {
  ArrowRight,
  CalendarHeart,
  Clock,
  Heart,
  MapPin,
  Sparkles,
  Trees,
} from "lucide-react"
import Header from "@/components/organisms/header"
import { Button } from "@workspace/ui/components/button"
import ActivityBadge from "../molecules/card-template/activity-badge"
import DetailItem from "../molecules/card-template/detail-item"
import GreetingBlock from "../molecules/card-template/greeting-block"
import MessageBox from "../molecules/card-template/message-box"
import EventDetailsList from "./card-template/event-details-list"
import ActionButtons from "./card-template/action-buttons"
import CardFooter from "./card-template/card-footer"
import CardHeader from "./card-template/card-header"

export default function Section() {
  return (
    <section className="space-y-5 bg-hero-glow px-4 sm:px-6 lg:px-8">
      <Header />

      <Badge
        variant="secondary"
        className="h-fit gap-2 bg-coral/25 px-4 py-1.5 font-bold text-dark-orange"
      >
        <Sparkles className="size-3.5" />
        <span className="text-xs font-bold tracking-widest uppercase">
          Приглашения на свидание
        </span>
      </Badge>

      <h1 className="font-heading text-5xl leading-[1.05] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
        Пригласите на свидание{" "}
        <span className="bg-linear-120 from-coral via-light-salmon to-light-coral bg-clip-text text-transparent italic">
          красиво
        </span>
      </h1>

      <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
        Создайте личное приглашение с датой, местом и тёплыми словами — и
        отправьте его одной ссылкой. А чтобы ответ точно был «да», кнопка «нет»
        будет убегать.
      </p>

      <div className="flex flex-col items-start gap-4">
        <a
          href="/create"
          className="group/button inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-warm-romance bg-clip-padding px-6 py-4 font-medium whitespace-nowrap text-white shadow-[0_14px_40px_-12px_rgb(224_83_60/0.7)] transition-[transform,translate,box-shadow] duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-12px_rgb(224_83_60/0.8)]"
        >
          Создать приглашение
          <ArrowRight className="size-5" />
        </a>

        <a
          href="#how"
          className="text-sm font-semibold text-[#D94E34] underline-offset-4 hover:underline"
        >
          Как это работает
        </a>

        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <div className="flex -space-x-2">
            <span className="grid size-8 place-items-center rounded-full border-2 border-background bg-coral">
              <Heart
                fill="currentColor"
                strokeWidth={0}
                className="size-3.5 text-white"
              />
            </span>
            <span className="grid size-8 place-items-center rounded-full border-2 border-background bg-light-salmon">
              <Heart
                fill="currentColor"
                strokeWidth={0}
                className="size-3.5 text-white"
              />
            </span>
            <span className="grid size-8 place-items-center rounded-full border-2 border-background bg-light-coral">
              <Heart
                fill="currentColor"
                strokeWidth={0}
                className="size-3.5 text-white"
              />
            </span>
          </div>
          Бесплатно, без регистрации, за пару минут
        </div>
      </div>

      <div className="rotate-3 animate-float-slow [--tilt:2deg]">
        <div className="relative overflow-hidden rounded-4xl bg-warm-card p-7 sm:p-9">
          <Heart
            strokeWidth={0}
            fill="currentColor"
            className="pointer-events-none absolute -top-10 -right-10 size-48 text-white opacity-15"
          />
          <Heart
            strokeWidth={0}
            fill="currentColor"
            className="pointer-events-none absolute -bottom-10 left-10 size-24 rotate-12 text-white opacity-15"
          />

          <CardHeader activity="Прогулка" name="Алёна" />

          <p className="max-w-md font-heading text-lg italic">
            Приглашаю тебя на прогулку. Скажешь "да"?
          </p>

          <MessageBox
            text="Говорят, у нас в городе очень красивая набережная. Хочу увидеть её вместе
            с тобой"
          />

          <EventDetailsList
            date="13 декабря, воскресенье"
            time="20:30"
            location="У набережной"
          />

          <CardFooter signature="Дима" />
        </div>
      </div>
    </section>
  )
}

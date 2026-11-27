import Logo from "../logo"
import CreateButton from "../molecules/create-button"

export default function Header() {
  return (
    <header className="h-20">
      <div className="mx-auto flex h-full max-w-4xl items-center justify-between gap-4">
        <div>
          <Logo />
        </div>

        <div className="flex items-center gap-4">
          <CreateButton />
        </div>
      </div>
    </header>
  )
}

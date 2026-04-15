import { UserRound } from "lucide-react"

export function GenericAvatar() {
  return (
    <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-200 flex items-center justify-center relative shrink-0">
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="border-[0.5px] border-neutral-300"></div>
        ))}
      </div>
      <div className="w-12 h-12 bg-neutral-400 rounded-full flex items-center justify-center z-10">
        <UserRound className="w-5 h-5 text-white fill-current" />
      </div>
    </div>
  )
}


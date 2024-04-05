type TooltipProps = {
  message: string
  children: React.ReactNode
}

export default function Tooltip({
  message,
  children,
}: TooltipProps): JSX.Element {
  return (
    <div className="group relative flex w-full justify-center">
      {children}
      <span className="absolute bottom-10 scale-0 text-nowrap rounded bg-gray-800 p-2 text-xs text-white transition-all group-hover:scale-100">
        {message}
      </span>
    </div>
  )
}

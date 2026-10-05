import { cn } from "@/lib/utils"

export function buttonVariants(variant: "primary" | "outline" = "primary") {
  return cn(
    "inline-flex h-9 lg:h-10.5 items-center justify-center rounded-[3px] px-4 py-2.25 text-xs font-black uppercase transition-colors font-lato",
    variant === "primary" &&
      "bg-peach text-white hover:bg-coral",
    variant === "outline" &&
      "bg-white text-coral outline-1 -outline-offset-1 outline-coral hover:text-white hover:bg-coral"
  )
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline"
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(buttonVariants(variant), className)} {...props}>
      {children}
    </button>
  )
}

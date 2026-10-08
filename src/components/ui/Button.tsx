import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-navy text-cream hover:bg-navy/90 active:bg-navy/95 disabled:bg-navy/40",
  secondary:
    "bg-transparent text-navy border border-navy/20 hover:border-navy/40 hover:bg-navy/5 active:bg-navy/10 disabled:text-navy/40 disabled:border-navy/10",
  ghost:
    "bg-transparent text-navy hover:bg-navy/5 active:bg-navy/10 disabled:text-navy/40",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-sm", // 44px
  lg: "h-12 px-6 text-base", // 48px
};

export function Button({
  variant = "primary",
  size = "lg",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        "inline-flex items-center justify-center gap-2",
        "rounded-md font-medium",
        "transition-colors duration-200 ease-in-out",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy",
        "disabled:cursor-not-allowed",
        variantStyles[variant],
        sizeStyles[size],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
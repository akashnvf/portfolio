import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  download?: boolean | string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      external,
      download,
      icon,
      iconPosition = "left",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC078] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0D] disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5",
    };

    const variantStyles = {
      primary:
        "bg-[#FF6A00] text-black font-semibold hover:bg-[#FF8500] shadow-[0_0_20px_rgba(255,106,0,0.35)] hover:shadow-[0_0_25px_rgba(255,133,0,0.5)]",
      secondary:
        "bg-[#17171B] text-[#F5F5F5] border border-[rgba(255,255,255,0.12)] hover:border-[#FF6A00] hover:text-[#FF8500] hover:bg-[#202025]",
      outline:
        "bg-transparent text-[#F5F5F5] border border-[rgba(255,255,255,0.15)] hover:border-[#FF6A00] hover:text-[#FF6A00]",
      ghost:
        "bg-transparent text-[#B8B8BE] hover:text-[#F5F5F5] hover:bg-[#17171B]",
    };

    const combinedClassName = cn(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      className
    );

    const content = (
      <>
        {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
      </>
    );

    if (href) {
      if (external || download) {
        return (
          <a
            href={href}
            className={combinedClassName}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            download={download}
          >
            {content}
          </a>
        );
      }

      return (
        <Link href={href} className={combinedClassName}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={combinedClassName}
        disabled={disabled}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";


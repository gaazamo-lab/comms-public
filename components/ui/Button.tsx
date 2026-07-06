"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?:
    | "primary"
    | "secondary"
    | "ghost"
    | "gold"
    | "outline-gold"
    | "outline-white";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
}

const variants = {
  primary:
    "bg-navy-800 text-white hover:bg-navy-700 focus-visible:ring-navy-800",
  secondary:
    "bg-white text-navy-800 border border-navy-100 hover:border-navy-200 hover:bg-navy-50 focus-visible:ring-navy-400",
  ghost:
    "bg-transparent text-navy-700 hover:bg-navy-50 focus-visible:ring-navy-400",
  gold:
    "bg-gold-500 text-white hover:bg-gold-600 focus-visible:ring-gold-500",
  "outline-gold":
    "bg-transparent text-gold-500 border-2 border-gold-500 hover:bg-gold-500 hover:text-white focus-visible:ring-gold-500",
  "outline-white":
    "bg-transparent text-white border-2 border-white/60 hover:border-white hover:bg-white/10 focus-visible:ring-white",
};

const sizes = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-2.5 text-sm gap-2",
  lg: "px-8 py-3.5 text-base gap-2.5",
  xl: "px-10 py-4 text-sm gap-3",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  external,
  className,
  children,
  onClick,
  disabled,
  type = "button",
  fullWidth,
}) => {
  const classes = cn(
    "inline-flex min-h-[42px] items-center justify-center font-sans font-semibold",
    "rounded-xl border-2 border-transparent transition-all duration-200 hover:-translate-y-px",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    "tracking-[0.01em]",
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

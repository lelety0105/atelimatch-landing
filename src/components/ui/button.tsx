import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
export const buttonVariants = cva("inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-50 [&_svg]:h-4 [&_svg]:w-4", { variants: { variant: { default: "bg-primary text-white hover:bg-primary-deep", hero: "bg-gradient-brand text-white shadow-soft hover:shadow-elegant", soft: "border border-border bg-white/80 text-primary hover:bg-secondary", outline: "border border-border bg-background text-foreground", light: "bg-white text-primary hover:bg-secondary" }, size: { default: "py-3", xl: "min-h-14 px-7 py-4 text-base" } }, defaultVariants: { variant: "default", size: "default" } });
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean }
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => { const Component = asChild ? Slot : "button"; return <Component ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />; });
Button.displayName = "Button";

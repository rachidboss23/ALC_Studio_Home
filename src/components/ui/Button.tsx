import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  variant?: "solid" | "outline" | "light";
  external?: boolean;
  className?: string;
  children: React.ReactNode;
};

const styles = {
  solid: "bg-ink text-paper border-ink hover:bg-accent hover:border-accent",
  outline: "border-ink text-ink hover:bg-ink hover:text-paper",
  light: "border-paper text-paper hover:bg-paper hover:text-ink",
} as const;

export function Button({ href, variant = "solid", external, className, children }: Props) {
  const cls = cn("inline-flex items-center justify-center border px-7 py-3.5 text-xs font-medium uppercase tracking-[0.14em] transition-colors", styles[variant], className);
  return external ? (
    <a href={href} className={cls} target="_blank" rel="noopener noreferrer">{children}</a>
  ) : (
    <Link href={href} className={cls}>{children}</Link>
  );
}

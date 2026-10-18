import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  variant?: "solid" | "outline" | "light";
  external?: boolean;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

const styles = {
  solid:
    "border border-[#1b1b1a] bg-[#1b1b1a] text-[#f5f1e9] shadow-[0_10px_25px_rgba(27,27,26,0.12)] hover:bg-[#2d2d2b] hover:border-[#2d2d2b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a6f4d] focus-visible:ring-offset-2",
  outline:
    "border border-[#1b1b1a]/25 bg-transparent text-[#1b1b1a] hover:border-[#1b1b1a] hover:bg-[#1b1b1a] hover:text-[#f5f1e9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a6f4d] focus-visible:ring-offset-2",
  light:
    "border border-[#f5f1e9]/60 bg-[#f5f1e9] text-[#1b1b1a] hover:bg-white hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5f1e9] focus-visible:ring-offset-2",
} as const;

export function Button({ href, variant = "solid", external, className, onClick, children }: Props) {
  const cls = cn(
    "inline-flex items-center justify-center gap-3 rounded-full px-6 py-3.5 text-[10px] font-medium uppercase tracking-[0.16em] transition-all duration-200 ease-out motion-reduce:transition-none",
    styles[variant],
    className,
  );

  return external ? (
    <a href={href} className={cls} target="_blank" rel="noopener noreferrer" onClick={onClick}>{children}</a>
  ) : (
    <Link href={href} className={cls} onClick={onClick}>{children}</Link>
  );
}

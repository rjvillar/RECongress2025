import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  children?: ReactNode;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = false,
  className,
  children,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-10", centered && "text-center", className)}>
      <h2 className="text-2xl md:text-3xl font-klein text-navy mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-gray-500 font-poppins max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}

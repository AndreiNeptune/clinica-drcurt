import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { width: 80, height: 40 },
  md: { width: 120, height: 60 },
  lg: { width: 180, height: 90 },
};

export default function Logo({ className, size = "md" }: LogoProps) {
  const s = sizes[size];

  return (
    <div className={cn("flex flex-col items-center justify-center space-y-1", className)}>
      <div className="relative">
        <Image
          src="/images/logo.webp"
          alt="Clinica Doctor Curt Logo"
          width={s.width}
          height={s.height}
          priority
          className="object-contain drop-shadow-md"
        />
      </div>
    </div>
  );
}

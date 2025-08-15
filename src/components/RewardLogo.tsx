import { cn } from "@/lib/utils";

interface RewardLogoProps {
  className?: string;
}

export const RewardLogo = ({ className }: RewardLogoProps) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative">
        <img 
          src="/lovable-uploads/49e48342-e934-4bb6-81ac-f9b22e73d0fc.png" 
          alt="Rewards Logo" 
          className="w-16 h-16 rounded-2xl shadow-lg object-cover"
        />
      </div>
    </div>
  );
};
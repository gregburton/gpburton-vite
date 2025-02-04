import { LucideIcon } from "lucide-react";

type GradientStrokeIconProps = {
  Icon: LucideIcon;
  fromColor: string;
  toColor: string;
  gradientId: string;
  width?: number;
  height?: number;
  className?: string;
};

const GradientStrokeIcon = ({
  Icon,
  fromColor,
  toColor,
  gradientId,
  width = 48,
  height = 48,
  className,
}: GradientStrokeIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Define the gradient */}
      <defs>
        <linearGradient
          id={gradientId}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor={fromColor} />
          <stop offset="100%" stopColor={toColor} />
        </linearGradient>
      </defs>

      {/* Render the icon with the gradient stroke */}
      <Icon
        stroke={`url(#${gradientId})`}
        width="100%"
        height="100%"
        className={className}
      />
    </svg>
  );
};

export default GradientStrokeIcon;

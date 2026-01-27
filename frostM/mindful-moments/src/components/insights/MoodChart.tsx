import { motion } from "framer-motion";
import { useMemo } from "react";

interface MoodDataPoint {
  day: string;
  mood: number;
}

interface MoodChartProps {
  data: MoodDataPoint[];
}

export function MoodChart({ data }: MoodChartProps) {
  const chartHeight = 160;
  const chartWidth = 100; // percentage

  const points = useMemo(() => {
    return data.map((point, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = chartHeight - (point.mood / 5) * chartHeight;
      return { x, y, ...point };
    });
  }, [data]);

  const pathData = useMemo(() => {
    if (points.length < 2) return "";
    
    return points.reduce((acc, point, index) => {
      if (index === 0) {
        return `M ${point.x} ${point.y}`;
      }
      const prev = points[index - 1];
      const cpX1 = prev.x + (point.x - prev.x) / 2;
      const cpY1 = prev.y;
      const cpX2 = prev.x + (point.x - prev.x) / 2;
      const cpY2 = point.y;
      return `${acc} C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${point.x} ${point.y}`;
    }, "");
  }, [points]);

  const areaPath = useMemo(() => {
    if (!pathData) return "";
    return `${pathData} L 100 ${chartHeight} L 0 ${chartHeight} Z`;
  }, [pathData]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-card rounded-3xl p-6 shadow-card"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground">
            Your Week
          </h3>
          <p className="text-sm text-muted-foreground">
            7-day mood journey
          </p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-display font-semibold text-primary">
            {(data.reduce((acc, d) => acc + d.mood, 0) / data.length).toFixed(1)}
          </p>
          <p className="text-xs text-muted-foreground">avg mood</p>
        </div>
      </div>

      <div className="relative" style={{ height: chartHeight + 40 }}>
        <svg
          viewBox={`0 0 100 ${chartHeight}`}
          className="w-full h-full overflow-visible"
          preserveAspectRatio="none"
        >
          {/* Gradient fill */}
          <defs>
            <linearGradient id="moodGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--sage))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--sage))" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Area fill */}
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            d={areaPath}
            fill="url(#moodGradient)"
          />

          {/* Line */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            d={pathData}
            fill="none"
            stroke="hsl(var(--sage))"
            strokeWidth="2"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />

          {/* Data points */}
          {points.map((point, index) => (
            <motion.circle
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              cx={point.x}
              cy={point.y}
              r="4"
              fill="hsl(var(--card))"
              stroke="hsl(var(--sage))"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>

        {/* Day labels */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-1">
          {data.map((point, index) => (
            <span
              key={index}
              className="text-xs text-muted-foreground"
            >
              {point.day}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

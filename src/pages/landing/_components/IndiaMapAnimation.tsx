import { motion } from "motion/react";
import { useEffect, useState } from "react";

// Simplified India boundary outline (clockwise from Kashmir)
const INDIA_BOUNDARY =
  "M 36,1 L 40,3 L 44,2 L 49,5 L 54,6 L 59,7 L 64,8 L 68,10 L 72,12 L 77,14 L 82,17 L 87,20 L 90,24 L 88,28 L 90,32 L 88,36 L 85,39 L 81,41 L 77,38 L 74,42 L 70,45 L 66,48 L 62,52 L 58,57 L 55,62 L 54,67 L 53,72 L 50,77 L 47,82 L 43,87 L 40,91 L 38,95 L 36,92 L 34,87 L 31,82 L 29,76 L 27,70 L 26,64 L 25,58 L 23,52 L 21,46 L 18,41 L 14,37 L 11,34 L 9,30 L 8,27 L 10,24 L 8,22 L 11,19 L 15,16 L 20,12 L 25,9 L 29,6 L 32,3 Z";

// Major Indian cities with approximate positions on a normalized coordinate system
const CITIES = [
  { name: "Delhi", x: 48, y: 22, major: true },
  { name: "Mumbai", x: 28, y: 52, major: true },
  { name: "Bangalore", x: 37, y: 74, major: true },
  { name: "Chennai", x: 50, y: 72, major: true },
  { name: "Kolkata", x: 68, y: 40, major: true },
  { name: "Hyderabad", x: 42, y: 60, major: true },
  { name: "Jaipur", x: 36, y: 24, major: false },
  { name: "Ahmedabad", x: 22, y: 38, major: false },
  { name: "Pune", x: 30, y: 58, major: false },
  { name: "Lucknow", x: 54, y: 28, major: false },
  { name: "Kochi", x: 34, y: 82, major: false },
  { name: "Chandigarh", x: 44, y: 14, major: false },
  { name: "Bhopal", x: 40, y: 40, major: false },
  { name: "Guwahati", x: 80, y: 28, major: false },
];

// Routes between cities (index pairs)
const ROUTES: [number, number][] = [
  [0, 1], // Delhi - Mumbai
  [0, 4], // Delhi - Kolkata
  [0, 9], // Delhi - Lucknow
  [0, 6], // Delhi - Jaipur
  [0, 11], // Delhi - Chandigarh
  [1, 8], // Mumbai - Pune
  [1, 7], // Mumbai - Ahmedabad
  [1, 5], // Mumbai - Hyderabad
  [2, 3], // Bangalore - Chennai
  [2, 5], // Bangalore - Hyderabad
  [2, 10], // Bangalore - Kochi
  [3, 5], // Chennai - Hyderabad
  [4, 9], // Kolkata - Lucknow
  [4, 13], // Kolkata - Guwahati
  [5, 12], // Hyderabad - Bhopal
  [6, 7], // Jaipur - Ahmedabad
  [8, 2], // Pune - Bangalore
  [9, 12], // Lucknow - Bhopal
];

function AnimatedDot({
  x1,
  y1,
  x2,
  y2,
  delay,
  duration,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay: number;
  duration: number;
}) {
  return (
    <motion.circle
      r="2.5"
      fill="var(--color-primary)"
      initial={{ cx: x1, cy: y1, opacity: 0 }}
      animate={{
        cx: [x1, x2],
        cy: [y1, y2],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: duration * 0.6,
        ease: "linear",
      }}
    />
  );
}

export default function IndiaMapAnimation() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="relative w-full aspect-[4/5] max-w-[440px] mx-auto">
      {/* Ambient glow behind map */}
      <div className="absolute inset-0 bg-primary/5 rounded-full blur-[80px] scale-75" />

      <svg
        viewBox="0 0 100 100"
        className="w-full h-full relative z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Glow filter for cities */}
          <filter id="cityGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Glow filter for routes */}
          <filter id="routeGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="0.5" />
          </filter>
        </defs>

        {/* India boundary outline - subtle glow */}
        <motion.path
          d={INDIA_BOUNDARY}
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="1.5"
          strokeOpacity="0.06"
          strokeLinejoin="round"
          strokeLinecap="round"
          filter="url(#routeGlow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />

        {/* India boundary outline - main stroke + fill */}
        <motion.path
          d={INDIA_BOUNDARY}
          fill="var(--color-primary)"
          fillOpacity="0.04"
          stroke="var(--color-primary)"
          strokeWidth="0.4"
          strokeOpacity="0.25"
          strokeLinejoin="round"
          strokeLinecap="round"
          initial={{ pathLength: 0, fillOpacity: 0 }}
          animate={{ pathLength: 1, fillOpacity: 0.04 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />

        {/* Route lines */}
        {ROUTES.map(([from, to], i) => {
          const c1 = CITIES[from];
          const c2 = CITIES[to];
          return (
            <motion.line
              key={`route-${i}`}
              x1={c1.x}
              y1={c1.y}
              x2={c2.x}
              y2={c2.y}
              stroke="var(--color-primary)"
              strokeWidth="0.3"
              strokeOpacity="0.15"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: i * 0.08, ease: "easeOut" }}
            />
          );
        })}

        {/* Route glow lines */}
        {ROUTES.map(([from, to], i) => {
          const c1 = CITIES[from];
          const c2 = CITIES[to];
          return (
            <line
              key={`glow-${i}`}
              x1={c1.x}
              y1={c1.y}
              x2={c2.x}
              y2={c2.y}
              stroke="var(--color-primary)"
              strokeWidth="0.8"
              strokeOpacity="0.04"
              filter="url(#routeGlow)"
            />
          );
        })}

        {/* Animated shipment dots */}
        {ROUTES.map(([from, to], i) => {
          const c1 = CITIES[from];
          const c2 = CITIES[to];
          return (
            <AnimatedDot
              key={`dot-${i}`}
              x1={c1.x}
              y1={c1.y}
              x2={c2.x}
              y2={c2.y}
              delay={i * 0.7 + 1}
              duration={2 + (i % 3) * 0.5}
            />
          );
        })}

        {/* City nodes */}
        {CITIES.map((city, i) => (
          <g key={city.name}>
            {/* Pulse ring for major cities */}
            {city.major && (
              <motion.circle
                cx={city.x}
                cy={city.y}
                r="3"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="0.3"
                initial={{ r: 2, opacity: 0.5 }}
                animate={{ r: 5, opacity: 0 }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            )}
            {/* City dot */}
            <motion.circle
              cx={city.x}
              cy={city.y}
              r={city.major ? 2 : 1.2}
              fill="var(--color-primary)"
              opacity={city.major ? 1 : 0.5}
              filter={city.major ? "url(#cityGlow)" : undefined}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + i * 0.08, type: "spring" }}
            />
            {/* City label for major cities */}
            {city.major && (
              <motion.text
                x={city.x}
                y={city.y - 4}
                textAnchor="middle"
                fill="currentColor"
                opacity="0.5"
                fontSize="2.5"
                fontWeight="500"
                className="text-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1 + i * 0.1 }}
              >
                {city.name}
              </motion.text>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}

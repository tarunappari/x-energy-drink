import React from 'react';
import { Check, Clock, Leaf, Brain, Sparkles } from 'lucide-react';
import styles from '@/styles/landingpage/Why.module.scss'

// Responsive Timeline component (horizontal on desktop, vertical on mobile)
function Timeline({ items, variant = "default", showConnectors = true, showTimestamps = true }) {
  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <Check className="h-3 w-3" />;
      case "active":
        return <Clock className="h-3 w-3" />;
      case "pending":
        return <Clock className="h-3 w-3" />;
      default:
        return <div className="h-2 w-2 rounded-full bg-current" />;
    }
  };

  const getVariantGap = () => {
    switch (variant) {
      case "compact": return "md:gap-12 gap-4";
      case "spacious": return "md:gap-12 gap-6";
      default: return "md:gap-8 gap-4";
    }
  };

  return (
    <div className={` relative flex flex-col md:flex-row ${getVariantGap()} md:items-start md:justify-between w-full`}>
      {items.map((item, index) => (
        <div key={item.id} className="relative flex md:flex-col md:items-center min-w-0 md:flex-1 flex-row gap-3 md:gap-0 pb-2 md:pb-0">
          {/* Connector Line - Vertical for mobile, Horizontal for desktop */}
          {showConnectors && index < items.length - 1 && (
            <>
              {/* Mobile: Vertical connector */}
              <div 
                className="absolute left-3 top-9 h-full w-px md:hidden"
                style={{ 
                  backgroundColor: item.status === "completed" ? "#67846c" : 
                                 item.status === "active" ? "#67846c" : 
                                 "rgba(103, 132, 108, 0.3)"
                }}
              />
              {/* Desktop: Horizontal connector */}
              <div 
                className="hidden md:block absolute top-3 h-px"
                style={{ 
                  backgroundColor: item.status === "completed" ? "#67846c" : 
                                 item.status === "active" ? "#67846c" : 
                                 "rgba(103, 132, 108, 0.3)",
                  left: "50%",
                  right: "-50%",
                  width: "100%"
                }}
              />
            </>
          )}

          {/* Icon */}
          <div className="relative z-10 flex shrink-0 md:mb-4">
            <div 
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-xs font-medium transition-all ${
                item.status === "completed" 
                  ? "border-[#67846c] text-white" 
                  : item.status === "active"
                  ? "border-[#67846c] bg-white text-[#67846c] shadow-lg"
                  : "border-gray-300 text-gray-400"
              }`}
              style={{
                backgroundColor: item.status === "completed" ? "#67846c" : 
                               item.status === "active" ? "white" : "white"
              }}
            >
              {item.icon || getStatusIcon(item.status)}
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-2 md:text-center text-left min-w-0 flex-1">
            {/* Timestamp */}
            {showTimestamps && item.timestamp && (
              <time className="text-xs font-semibold" style={{ color: "#204033" }}>
                {item.timestamp}
              </time>
            )}

            {/* Title */}
            <h3 className="font-semibold leading-tight text-base md:text-base text-lg" style={{ color: "#204033" }}>
              {item.title}
            </h3>

            {/* Description */}
            {item.description && (
              <p className="text-sm leading-relaxed" style={{ color: "#67846c" }}>
                {item.description}
              </p>
            )}

            {/* Custom Content */}
            {item.content && <div className="mt-3">{item.content}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}

// Main Demo Component
export default function RelaxationTimeline() {
  const timelineItems = [
    {
      id: "1",
      title: "Initial Cooling",
      description: "Mint cools your senses, first wave of relaxation begins.",
      timestamp: "0 – 5 minutes",
      status: "completed",
      icon: <Leaf className="h-3 w-3" />,
    },
    {
      id: "2",
      title: "Mental Clarity",
      description: "L-Theanine and botanicals turn down mental noise.",
      timestamp: "10 – 15 minutes",
      status: "active",
      icon: <Brain className="h-3 w-3" />,
    },
    {
      id: "3",
      title: "Deep Focus",
      description: "Calm, steady energy with deep focus and no restlessness.",
      timestamp: "20 – 30 minutes",
      status: "pending",
      icon: <Sparkles className="h-3 w-3" />,
    },
  ];

  return (
    <div className={`${styles.timelineContainer} flex items-start justify-center p-4`}>
      <div className="w-full max-w-5xl">
        {/* Timeline Card */}
        <div 
          className={`${styles.timeline} rounded-2xl p-8 shadow-lg`}
          style={{ 
            backgroundColor: "white",
            border: "1px solid rgba(103, 132, 108, 0.2)"
          }}
        >
          <Timeline 
            items={timelineItems} 
            variant="spacious"
            showConnectors={true}
            showTimestamps={true}
          />
        </div>

        {/* Footer Note
        <div className="mt-5 pl-2  text-start">
          <p className="text-sm" style={{ color: "#67846c" }}>
            Effects may vary by individual. Enjoy your moment of peace.
          </p>
        </div> */}
      </div>
    </div>
  );
}
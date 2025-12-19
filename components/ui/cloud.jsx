import { PlusIcon } from "lucide-react";
import styles from "@/styles/landingpage/Ingredients.module.scss";
import lemon from "@/public/assets/ingredients/lemon.webp";
import citrus from "@/public/assets/ingredients/citrus.webp";
import stevia from "@/public/assets/ingredients/stevia.webp";
import salt from "@/public/assets/ingredients/salt.webp";
import ashwagandha from "@/public/assets/ingredients/ashwagandha.webp";
import Bacopa from "@/public/assets/ingredients/Bacopa.webp";
import centella from "@/public/assets/ingredients/centella.webp";
import L from "@/public/assets/ingredients/L.webp";

const INGREDIENTS = [
  { src: lemon.src, name: "Lemon juice" },
  { src: citrus.src, name: "Citric acid (food grade)" },
  { src: stevia.src, name: "Stevia rebaudiana" },
  { src: salt.src, name: "Rock / Himalayan salt" },
  { src: ashwagandha.src, name: "Ashwagandha extract" },
  { src: Bacopa.src, name: "Bacopa monnieri" },
  { src: centella.src, name: "Centella asiatica" },
  { src: L.src, name: "L-Theanine" },
];

export function LogoCloud() {
  return (
    <div className="relative limiter mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4 border-x border-neutral-200">
      {/* top border */}
      <div className="absolute left-1/2 top-0 w-[99vw] -translate-x-1/2 border-t border-neutral-200" />

      {INGREDIENTS.map((item, index) => {
        const col = index % 4;
        const row = Math.floor(index / 4);
        const isGrey = (row + col) % 2 === 0;

        const isLastColumn = (index + 1) % 4 === 0;
        const isLastRow = index >= 4;

        return (
          <div
            key={item.name}
            className={[
              "relative flex flex-col items-center justify-center px-6 py-10 md:p-10",
              "border-b border-neutral-200",
              row === 0 && "border-t border-neutral-200",
              !isLastColumn && "md:border-r",
              isGrey ? "bg-neutral-50" : "bg-white",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <img
              src={item.src}
              alt={item.name}
              className="h-14 md:h-16 select-none"
            />

            <p className={styles.ingredientName}>{item.name}</p>

            {/* PLUS ICON */}
            {!isLastColumn && !isLastRow && (
              <PlusIcon className="absolute -bottom-4 -right-4 z-20 hidden size-8 text-neutral-400 md:block pointer-events-none" />
            )}
          </div>
        );
      })}

      {/* bottom border */}
      <div className="absolute left-1/2 bottom-0 w-[99vw] -translate-x-1/2 border-b border-neutral-200" />
    </div>
  );
}

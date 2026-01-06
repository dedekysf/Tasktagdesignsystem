import { useEffect, useState } from "react";

interface ColorItemProps {
  name: string;
  cssVar: string;
}

export function ColorItem({ name, cssVar }: ColorItemProps) {
  const [hexColor, setHexColor] = useState("");
  const [rgbColor, setRgbColor] = useState("");
  const [hasAlpha, setHasAlpha] = useState(false);

  useEffect(() => {
    const computedValue = getComputedStyle(
      document.documentElement,
    )
      .getPropertyValue(cssVar)
      .trim();

    console.log(
      `Color: ${name}, CSS Var: ${cssVar}, Computed: "${computedValue}"`,
    );

    // Try to match rgba or rgb format (with more flexible spacing)
    const rgbaMatch = computedValue.match(
      /rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*(?:,\s*([\d.]+))?\s*\)/,
    );

    if (rgbaMatch) {
      const r = parseInt(rgbaMatch[1]);
      const g = parseInt(rgbaMatch[2]);
      const b = parseInt(rgbaMatch[3]);
      const a = rgbaMatch[4] ? parseFloat(rgbaMatch[4]) : 1;
      const hex =
        "#" +
        [r, g, b]
          .map((x) => x.toString(16).padStart(2, "0"))
          .join("")
          .toUpperCase();

      // Convert alpha to hex (0-255)
      const alphaHex = Math.round(a * 255)
        .toString(16)
        .padStart(2, "0")
        .toUpperCase();

      setHasAlpha(a < 1);
      // Show both hex with alpha and rgba for transparent colors
      if (a < 1) {
        setHexColor(
          `${hex}${alphaHex} (${Math.round(a * 100)}%)`,
        );
        setRgbColor(`rgba(${r}, ${g}, ${b}, ${a})`);
        console.log(
          `Setting overlay hex: ${hex}${alphaHex}, rgba: rgba(${r}, ${g}, ${b}, ${a})`,
        );
      } else {
        setHexColor(hex);
        setRgbColor(`rgb(${r}, ${g}, ${b})`);
      }
    } else {
      // Try to match hex format (including 8-digit hex with alpha)
      const hex8Match = computedValue.match(
        /^#?([a-fA-F0-9]{8})$/,
      );
      const hex6Match = computedValue.match(
        /^#?([a-fA-F0-9]{6})$/,
      );
      const hex3Match = computedValue.match(
        /^#?([a-fA-F0-9]{3})$/,
      );

      if (hex8Match) {
        // 8-digit hex with alpha
        const hexValue = hex8Match[1];
        const r = parseInt(hexValue.substring(0, 2), 16);
        const g = parseInt(hexValue.substring(2, 4), 16);
        const b = parseInt(hexValue.substring(4, 6), 16);
        const a = parseInt(hexValue.substring(6, 8), 16) / 255;
        const hexRGB = hexValue.substring(0, 6).toUpperCase();
        const alphaHex = hexValue.substring(6, 8).toUpperCase();
        setHexColor(
          `#${hexRGB}${alphaHex} (${Math.round(a * 100)}%)`,
        );
        setRgbColor(`rgba(${r}, ${g}, ${b}, ${a.toFixed(2)})`);
        setHasAlpha(true);
      } else if (hex6Match) {
        const hexValue = hex6Match[1];
        const r = parseInt(hexValue.substring(0, 2), 16);
        const g = parseInt(hexValue.substring(2, 4), 16);
        const b = parseInt(hexValue.substring(4, 6), 16);
        setHexColor("#" + hexValue.toUpperCase());
        setRgbColor(`rgb(${r}, ${g}, ${b})`);
        setHasAlpha(false);
      } else if (hex3Match) {
        // Expand 3-digit hex to 6-digit
        const hexValue = hex3Match[1];
        const expanded = hexValue
          .split("")
          .map((char) => char + char)
          .join("");
        const r = parseInt(expanded.substring(0, 2), 16);
        const g = parseInt(expanded.substring(2, 4), 16);
        const b = parseInt(expanded.substring(4, 6), 16);
        setHexColor("#" + expanded.toUpperCase());
        setRgbColor(`rgb(${r}, ${g}, ${b})`);
        setHasAlpha(false);
      } else {
        console.log(`No match for ${name}: "${computedValue}"`);
      }
    }
  }, [cssVar, name]);

  // Check if color is light (needs border)
  const isLightColor = () => {
    if (!rgbColor) return false;
    const match = rgbColor.match(
      /rgba?\((\d+),\s*(\d+),\s*(\d+)/,
    );
    if (match) {
      const r = parseInt(match[1]);
      const g = parseInt(match[2]);
      const b = parseInt(match[3]);
      // Calculate relative luminance
      const luminance =
        (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      return luminance > 0.9;
    }
    return false;
  };

  return (
    <div className="typography-card">
      <div className="flex items-center gap-3">
        <div
          className="w-16 h-16 flex-shrink-0"
          style={{
            backgroundColor: `var(${cssVar})`,
            boxShadow: "var(--elevation-sm)",
            border: isLightColor()
              ? "1px solid var(--border)"
              : "none",
            borderRadius: "var(--radius-8)",
          }}
        />
        <div className="flex-1 min-w-0">
          <p className="text-label">{name}</p>
          {hexColor && (
            <p className="text-web-metadata-primary text-metadata mt-1">
              {hexColor}
            </p>
          )}
          {rgbColor && (
            <p className="text-web-metadata-primary text-metadata mt-1">{rgbColor}</p>
          )}
        </div>
      </div>
    </div>
  );
}
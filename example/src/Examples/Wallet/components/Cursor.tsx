import {
  Circle,
  Group,
  Paint,
  interpolateColors,
} from "@shopify/react-native-skia";
import React from "react";
import type { SharedValue } from "react-native-reanimated";
import { interpolateColor, useDerivedValue } from "react-native-reanimated";

import { COLORS } from "../Model";

interface CursorProps {
  x: SharedValue<number>;
  y: SharedValue<number>;
  width: number;
}

export const Cursor = ({ x, y, width }: CursorProps) => {
  const color = useDerivedValue(() => {
    const result = interpolateColors(
      x.value / width,
      COLORS.map((_, i) => i / COLORS.length),
      COLORS
    );
    return result;
  });
  const transform = useDerivedValue(() => [
    { translateX: x.value },
    { translateY: y.value },
  ]);
  return (
    <Group transform={transform}>
      <Circle cx={0} cy={0} r={27} color={color} opacity={0.15} />
      <Circle cx={0} cy={0} r={18} color={color} opacity={0.15} />
      <Circle cx={0} cy={0} r={9} color={color}>
        <Paint style="stroke" strokeWidth={2} color="white" />
      </Circle>
    </Group>
  );
};

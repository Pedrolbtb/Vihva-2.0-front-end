import { alignmentClasses, colorClasses } from 'consts/consts';
import React from 'react';
import { Text, View } from 'react-native';

interface VTitleProps {
  title: string;
  subtitle?: string;
  color: 'primary' | 'secondary' | 'black';
  alignment: 'left' | 'center' | 'right';
}

export const VTitle: React.FC<VTitleProps> = ({ title, subtitle, color, alignment }) => {
  const titleClass = `${colorClasses[color]} text-7xl  ${alignmentClasses[alignment]}`;

  return (
    <View className="gap-1">
      <Text className={`${titleClass} font-peanutButter`}>{title}</Text>

      {subtitle && (
        <Text className={`text-sm text-slate-700 ${alignmentClasses[alignment]}`}>{subtitle}</Text>
      )}
    </View>
  );
};

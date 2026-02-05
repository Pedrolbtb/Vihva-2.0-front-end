import { alignmentClasses, colorClasses, sizeClasses } from 'consts/consts';
import React from 'react';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';

interface TypographyProps {
  content: string;
  color: 'primary' | 'secondary' | 'black';
  size: 'sm' | 'md' | 'lg' | 'xl';
  alignment: 'left' | 'center' | 'right';
}

export const VTypography: React.FC<TypographyProps> = ({ content, color, size, alignment }) => {
  const className = `
    ${colorClasses[color]}
    ${sizeClasses[size]}
    ${alignmentClasses[alignment]}
    font-cloudsoft
  `;

  return <Text className={className.trim()}>{content}</Text>;
};

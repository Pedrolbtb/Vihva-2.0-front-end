import { alignmentClasses, colorClasses, sizeClasses } from 'consts/consts';
import React from 'react';
import { Text } from 'react-native';

interface TypographyProps {
  content: string;
  color: 'primary' | 'secondary' | 'black';
  size: 'sm' | 'md' | 'lg' | 'xl';
  weight: 'normal' | 'bold';
  alignment: 'left' | 'center' | 'right';
}

export const VTypography: React.FC<TypographyProps> = ({ content, color, size, alignment }) => {
  const className = `${colorClasses[color]} ${sizeClasses[size]} ${alignmentClasses[alignment]}`;
  return <Text className={className}>{content}</Text>;
};

import { bgClasses, colorClasses } from 'consts/consts';
import React from 'react';
import { Pressable, Text } from 'react-native';

interface VButtonProps {
  content: string;
  disabled?: boolean;
  color: 'primary' | 'secondary' | 'black';
  alignment?: 'left' | 'center' | 'right';
  bgColor?: 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
}

export const VButton: React.FC<VButtonProps> = ({
  content,
  disabled = false,
  color = 'primary',
  alignment = 'center',
  bgColor = 'primary',
  onClick,
}) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onClick}
      className={`${bgClasses[bgColor]} border-primary h-14 w-56 items-center justify-center rounded-full border-2 shadow-lg`}>
      <Text className={`${colorClasses[color]} text-center`}>{content}</Text>
    </Pressable>
  );
};

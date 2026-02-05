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
      className={`${bgClasses[bgColor]} h-14 w-64 items-center justify-center rounded-3xl border-2 border-primary shadow-lg shadow-black`}>
      <Text className={`${colorClasses[color]} text-center font-cloudsoft text-xl`}>{content}</Text>
    </Pressable>
  );
};

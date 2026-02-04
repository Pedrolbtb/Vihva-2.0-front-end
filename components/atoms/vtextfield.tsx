import React from 'react';
import { View, TextInput } from 'react-native';

export interface VTextFieldProps {
  icon?: React.ReactNode;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  setIconEnd?: boolean;
}

export const VTextField: React.FC<VTextFieldProps> = ({
  icon,
  placeholder,
  value,
  onChangeText,
  setIconEnd = true,
}) => {
  return (
    <View
      className={`h-14 w-full flex-row items-center rounded-full border-2 border-secondary bg-white px-4 shadow-md shadow-black`}>
      <TextInput
        className="flex-1 text-base"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      {setIconEnd && <View className="ml-2">{icon}</View>}
    </View>
  );
};

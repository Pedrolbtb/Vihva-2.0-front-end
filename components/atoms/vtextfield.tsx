import React from 'react';
import { View, TextInput } from 'react-native';

export interface VTextFieldProps {
  icon?: React.ReactNode;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  setIconEnd?: boolean;
  password?: boolean;
}

export const VTextField: React.FC<VTextFieldProps> = ({
  icon,
  placeholder,
  value,
  password,
  onChangeText,
  setIconEnd = true,
}) => {
  return (
    <View className="h-20 w-full flex-row items-center rounded-3xl border-2 border-secondary bg-white px-4 shadow-md shadow-slate-800">
      <TextInput
        className="h-full flex-1 font-cloudsoft text-xl text-secondary"
        placeholder={placeholder}
        placeholderTextColor="#94a3b8"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
      />

      {setIconEnd && <View className="ml-2">{icon}</View>}
    </View>
  );
};

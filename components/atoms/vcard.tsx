import React from 'react';
import { View } from 'react-native';

export interface VCardProps {
  children: React.ReactNode;
}

export const VCard: React.FC<VCardProps> = ({ children }) => {
  return (
    <View className="border-secondary flex h-64 w-full flex-col items-center justify-center gap-3 rounded-xl border-2 bg-white p-4 shadow-lg">
      {children}
    </View>
  );
};

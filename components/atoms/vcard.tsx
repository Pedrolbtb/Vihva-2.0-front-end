import React from 'react';
import { View } from 'react-native';

export interface VCardProps {
  children: React.ReactNode;
}

export const VCard: React.FC<VCardProps> = ({ children }) => {
  return (
    <View className="m-5 flex h-64 flex-col items-center justify-center gap-3 self-stretch rounded-xl border-2 border-secondary bg-white p-4 shadow-lg shadow-black">
      {children}
    </View>
  );
};

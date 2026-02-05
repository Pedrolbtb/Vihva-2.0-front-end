import React from 'react';
import { View } from 'react-native';

export interface VViewProps {
  children: React.ReactNode;
}

export const VView: React.FC<VViewProps> = ({ children }) => {
  return (
    <View className=" flex h-full w-full flex-col items-center justify-center gap-3 bg-primary p-2">
      {children}
    </View>
  );
};

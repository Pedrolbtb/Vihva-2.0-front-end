import { TextInput } from 'react-native';

export interface VTextFieldProps {
  icon?: React.ReactNode;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

export const VTextField: React.FC<VTextFieldProps> = ({
  icon,
  placeholder,
  value,
  onChangeText,
}) => {
  return (
    <TextInput
      className="border-secondary h-14 w-full rounded-full border-2 bg-white px-4 text-base shadow-lg"
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

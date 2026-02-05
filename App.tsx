import { VButton } from 'components/atoms/vbutton';
import './global.css';
import { VCard } from 'components/atoms/vcard';
import { Ionicons } from '@expo/vector-icons';
import { VTitle } from 'components/atoms/vtitle';
import { VView } from 'components/atoms/vview';
import { VTextField } from 'components/atoms/vtextfield';
import React from 'react';
import { VTypography } from 'components/atoms/vtypography';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Cloudsoft-Bold': require('./assets/fonts/CloudSoft.otf'),
    PeanutButter: require('./assets/fonts/Peanut-Butter.otf'),
  });

  if (!fontsLoaded) return null;

  return (
    <>
      <VView>
        <VTitle title="Vihva" color={'secondary'} alignment={'center'} />
        <VCard>
          <VTextField
            placeholder="Email"
            icon={<Ionicons name="mail" size={28} color="#6096a8" />}
          />
          <VTextField
            placeholder="Senha"
            password={true}
            icon={<Ionicons name="lock-closed" size={28} color="#6096a8" />}
          />
          <VButton
            content="Entrar"
            bgColor="secondary"
            onClick={() => alert('Button Clicked!')}
            color={'primary'}
          />
          <VTypography
            content={'Esqueci minha senha'}
            color={'secondary'}
            size={'lg'}
            alignment={'center'}
          />
        </VCard>

        <VTypography
          content={'Não possui uma conta? Cadastre-se!'}
          color={'secondary'}
          size={'xl'}
          alignment={'center'}
        />
      </VView>
    </>
  );
}

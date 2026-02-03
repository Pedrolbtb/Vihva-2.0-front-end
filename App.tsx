import { VButton } from 'components/atoms/vbutton';
import './global.css';
import { VTypography } from 'components/atoms/vtypography';
import { VCard } from 'components/atoms/vcard';

export default function App() {
  return (
    <>
      <VCard>
        <VTypography
          content={'helou'}
          color={'secondary'}
          size={'sm'}
          alignment={'center'}
          weight={'bold'}
        />
        <VButton
          content="click"
          bgColor="secondary"
          onClick={() => alert('Button Clicked!')}
          color={'primary'}
        />
      </VCard>
    </>
  );
}

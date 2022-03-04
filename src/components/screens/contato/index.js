import React from 'react';
import Box from '../../foundation/box';
import Text from '../../foundation/text';
import Button from '../../common/button/button';
import ContainerContato, { RedesSociais, ContatoModal } from './style';
import Modal from '../../common/modal/modal';
import ContactForm from '../../forms/contactForm/contactForm';

function Contato() {
  const [isModalOpen, setModalState] = React.useState(false);

  return (
    <ContainerContato>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalState(false);
        }}
      >
        {(propsDoModal) => (
          <ContactForm propsDoModal={propsDoModal} setModalState={setModalState} />
        )}
      </Modal>
      <ContatoModal>
        <Button
          id="button"
          title="Let's talk?"
          ghost
          onClick={() => {
            setModalState(!isModalOpen); // novo state sendo atribuido
          }}
        >
          <Text tag="p" id="contato" variant="titleXS" color="fonts.main">
          Let's talk?
          </Text>
        </Button>
      </ContatoModal>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={{
          xs: 'justify',
          md: 'space-between',
        }}
      >
        <Text tag="p" variant="paragraph3">Social networks</Text>
        <RedesSociais>
          <Text
            tag="a"
            href="https://www.linkedin.com/in/Zweli-Sa"
            variant="paragraph1XS"
            target="_blank"
            rel="noopener noreferrer"
            title="Linkedin"
            color="fonts.main"
          >
            Linkedin
          </Text>
          <Text
            tag="a"
            href="https://github.com/Zweli-Sa"
            variant="paragraph1XS"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
            color="fonts.main"
          >
            Github
          </Text>
          <Text
            tag="a"
            href="https://www.instagram.com/zwelisangweni25/"
            variant="paragraph1XS"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            color="fonts.main"
          >
            Instagram
          </Text>
        </RedesSociais>
      </Box>
    </ContainerContato>
  );
}

export default Contato;

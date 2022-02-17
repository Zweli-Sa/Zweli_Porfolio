/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../foundation/box';
import Text from '../../foundation/text';
import ContainerSobre, {
  Canais, Descricao, Image, Info,
} from './style';

export { getContent } from './getContent';

function Sobre({ messages }) {
  return (
    <ContainerSobre>
      <Text tag="h1" variant="titleXS">About</Text>
      <Box
        display="flex"
        flexDirection={{
          xs: 'column',
          md: 'row',
        }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Info>
          <Descricao>
            <Text tag="p" variant="paragraph3">
              Currently a Software engineering student at APTECH specializing in Java. Extremely motivated, constantly developing
              and looking for the first opportunity.
            </Text>
            <Text tag="p" variant="paragraph3">
              
              During the last few months I have had access to several channels and websites that have taught me
              various technologies and tools and these materials helped me to develop
              some of my projects in other languages including python and React. I also have a good understading of Google Cloud Platform and its products.
            </Text>
          </Descricao>
          <Canais>
            {messages.projects.map((dado) => (
              <li key={dado.id}>
                <Text tag="a" href={dado.demo} title={dado.name} color="fonts.main" target="_blank" rel="noopener noreferrer">
                  {dado.name}
                  <img src={dado.preview} alt={dado.name} />
                </Text>
              </li>
            ))}
          </Canais>
        </Info>
        <Image>
          <img src="https://avatars.githubusercontent.com/u/78607664?v=4" alt="" />
        </Image>
      </Box>
    </ContainerSobre>
  );
}

Sobre.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  messages: PropTypes.object.isRequired,
};

export default Sobre;

import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../foundation/box';
import Text from '../../foundation/text';
import ContainerCasePortfolio, {
  Info, Description, Image, LogoImage, Referencia,
} from './style';

export { getContent } from './getContent';

function CasePortfolio({ messages }) {
  return (
    <ContainerCasePortfolio>
      <Text tag="h1" variant="subTitleXS">Portfolio</Text>
      <Box
        display="flex"
        flexDirection={{
          xs: 'column',
          md: 'row',
        }}
        justifyContent={{
          xs: 'center',
          md: 'space-between',
        }}
        paddingTop="30px"
        paddingBottom="30px"
        alignItems={{
          xs: 'left',
          md: 'center',
        }}
      >
        <Info>
          <Box>
            <Text tag="p" variant="paragraph3" color="fonts.main">Website</Text>
            <a href="https://zweli-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" title="Site Portfolio">
              <Text tag="p" variant="paragraph2" color="fonts.main">
              https://zweli-sa.com/
              </Text>
            </a>
          </Box>
          <Box>
            <Text tag="p" variant="paragraph3" color="fonts.main">Date</Text>
            <Text tag="p" variant="paragraph2">March 2022 - Incomplete</Text>
          </Box>
        </Info>
        <LogoImage>
          <img src="/images/logo.svg" alt="Logo Portfolio" title="Logo Portfolio" />
        </LogoImage>
      </Box>
      <Description>
        {messages.allPageCasePortfolios.map((item) => (
          <li className="list" key={item.id}>
            <Text tag="h2" variant="paragraph1XS" color="fonts.main">{item.title}</Text>
            <Box
              display="flex"
              flexDirection={{
                xs: 'column',
                md: 'row',
              }}
              justifyContent={{
                xs: 'justify',
                md: 'space-between',
              }}
              alignItems="flex-start"
            >
              <Text tag="p" variant="paragraph3" color="fonts.main">{item.description}</Text>
              <Referencia>
                {item.ref.map((dado) => (
                  <li key={dado.description}>
                    <Text tag="span" color="fonts.main">{dado.description}</Text>
                  </li>
                ))}
              </Referencia>
            </Box>
          </li>
        ))}
      </Description>
      <Image>
        <img src="/images/fonte.svg" alt="Fonte Sora" />
      </Image>
      <Text tag="p" variant="paragraph2" color="fonts.main" textAlign="justify" lineHeight="1.5" className="finalText">
        The portfolio began as the first challenge of Alura&apos;s Advanced Front End Bootcamp,
        but as the stages went through, I decided to deepen and improve the project more and more.
        With this, I met and learned new tools, developed new projects and
        acquired new knowledge.
      </Text>
    </ContainerCasePortfolio>
  );
}

CasePortfolio.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  messages: PropTypes.object.isRequired,
};

export default CasePortfolio;

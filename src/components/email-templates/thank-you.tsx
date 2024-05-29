import * as React from 'react'

import {
  Body,
  Container,
  Head,
  Html,
  Tailwind,
  Text,
  Img,
  Link,
  Hr,
  Column,
  Row
} from '@react-email/components'

interface ThankYouEmailTemplateProps {
  company: string
  person: string
  email: string
  phone: string
  note: string
  numOfCompanies?: string
  usedPrograms?: string
}

//TODO: solve import issue

export const ThankYouEmailTemplate: React.FC<Readonly<ThankYouEmailTemplateProps>> = ({
  person,
  company,
  email,
  phone,
  note,
  numOfCompanies,
  usedPrograms
}) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Tailwind>
          <Container style={container}>
            <Img
              src={'https://sam.itps.hu/web/assets/deeb957c/imgs/sam-logo-small.png'}
              width="50"
              height="55"
              alt="SAM Logo"
              style={logo}
            />
            <Hr style={hr} />
            <Text style={paragraph}>Tisztelt {person},</Text>
            <Text style={paragraph}>
              Köszönjük a megkeresést a(z) <strong>{company}</strong> nevében.
              <br />
              Munkatársaink hamarosan felveszik Önokkel a kapcsolatot!
            </Text>
            <Text style={paragraph}>
              Megadott adatai:
              <br />
              Email: {email}
              <br />
              Telefon: {phone}
              <br />
              Cég neve: {company}
              <br />
              Kapcsolattartó személy: {person}
              <br />
              {
                <>
                  numOfCompanies && usedPrograms &&
                  <br />
                  Kezelt cégek száma: {numOfCompanies}
                  <br />
                  Használt könyvelőprogramok: {usedPrograms}
                </>
              }
              Megjegyzés: {note}
              <br />
            </Text>
            <Text style={paragraph}>
              Köszönettel,
              <br />
              Simple Accounting Team
            </Text>
            <Hr style={hr} />
            <Text style={footer}>
              SMART TECH INVESTMENT KFT.
              <br />
              <Link href="https://www.simpleaccounting.hu" className="text-[#8898aa] underline">
                simpleaccounting.hu
              </Link>
              <br />
              <Link href="mailto:support@simpleaccounting.hu" className="text-[#8898aa] underline">
                support@simpleaccounting.hu
              </Link>
              <br />
              +36 1 443 3320
              <br />
              1053 Budapest, Veres Pálné utca 9. 1. em. 2.
            </Text>
            <Row>
              <Column align="left">
                <Link href="https://www.facebook.com/profile.php?id=61553716456220">
                  <Img
                    src={
                      'https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png'
                    }
                    alt="Social Media"
                    width="20"
                    height="20"
                    className="inline-block"
                  />
                </Link>
                <Link href="https://google.com">
                  <Img
                    src={
                      'https://upload.wikimedia.org/wikipedia/commons/d/db/Threads_%28app%29.png'
                    }
                    alt="Social Media"
                    width="20"
                    height="20"
                    style={socialMedia}
                  />
                </Link>
                <Link href="https://google.com">
                  <Img
                    src={
                      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png'
                    }
                    alt="Social Media"
                    width="20"
                    height="20"
                    style={socialMedia}
                  />
                </Link>
                <Link href="https://google.com">
                  <Img
                    src={
                      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png'
                    }
                    alt="Social Media"
                    width="20"
                    height="20"
                    style={socialMedia}
                  />
                </Link>
              </Column>
            </Row>
          </Container>
        </Tailwind>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px'
}

const logo = {
  margin: '0 auto'
}

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px'
}

const hr = {
  borderColor: '#f8673a',
  margin: '20px 0'
}

const footer = {
  color: '#8898aa',
  fontSize: '12px'
}

const socialMedia = {
  display: 'inline-block',
  marginLeft: '10px'
}


import {
  Body,
  Container,
  Head,
  Img,
  Link,
  Heading,
  Html,
  Preview,
  Text,
} from '@react-email/components';
import Lottie from 'lottie-react';
import * as React from 'react';
import maca from "@/public/images/maca.json";
import '../globals.css'


interface WelcomeEmailProps {
  firstName: string;
}

export const WelcomeEmail = ({ firstName }: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Dobrodošli u Frizline!</Preview>
    <Body style={main}>
      <Container style={container}>
        <div className="flex items-center gap-6 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="30" preserveAspectRatio="xMidYMid meet" version="1.0"><path fill="#efa9fa" d="M 374.953125 0 L 374.953125 187.492188 L 187.429688 0 Z M 0 0 L 187.429688 187.492188 L 187.429688 0 Z M 374.953125 374.953125 L 374.953125 187.492188 L 187.429688 187.492188 Z M 187.429688 374.953125 L 187.429688 187.492188 L 0 187.492188 Z M 187.429688 374.953125 " fill-opacity="1" fill-rule="nonzero"/></svg>
        <span style={h1} className='ml-4'>Frizline</span>
        </div>
        
        <Heading style={h1}>Hej, { firstName }</Heading>
        
        <Text style={{ ...text, marginBottom: '14px' }}>
          Hvala ti na interesu za Frizline - rješenje za online naručivanje skrojeno za frizerske salone.
        </Text>
        <Text style={{ ...text, marginBottom: '14px' }}>
          Trenutno radimo na poboljšanju usluge i nismo u mogućnosti primati nove frizerske salone. Javiti ćemo ti se čim ponovno počnemo primati nove salone. <br /> Kao zahvalu za tvoj interes, poklanjamo ti 1 mjesec besplatnog korištenja Frizline platforme 🎁. <br /> Čujemo se uskoro!
        </Text>

        <Text style={footer}>
          Frizline - Stu development
        </Text>
      </Container>
    </Body>
  </Html>
);

export default WelcomeEmail;

const main = {
  backgroundColor: '#ffffff',
};

const container = {
  paddingLeft: '12px',
  paddingRight: '12px',
  margin: '0 auto',
};

const h1 = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
};

const link = {
  color: '#2754C5',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  textDecoration: 'underline',
};

const text = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  margin: '24px 0',
};

const footer = {
  color: 'blueviolet',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '12px',
  lineHeight: '22px',
  marginTop: '12px',
  marginBottom: '24px',
};

const code = {
  display: 'inline-block',
  padding: '16px 4.5%',
  width: '90.5%',
  backgroundColor: '#f4f4f4',
  borderRadius: '5px',
  border: '1px solid #eee',
  color: '#333',
};
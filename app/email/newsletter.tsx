import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

interface NetlifyWelcomeEmailProps {
  steps?: {
    id: number;
    Description: React.ReactNode;
  }[];
  links?: string[];
  firstName: string;
  email: string;
}

  const formData: Record<string, string> = {};

const PropDefaults: NetlifyWelcomeEmailProps = {
  steps: [
    {
      id: 1,
      Description: (
        <li className="mb-20" key={1}>
          <strong>Tvoji posjetitelji napuste webicu bez obavljanja akcije.</strong>
        </li>
      ),
    },
    {
      id: 2,
      Description: (
        <li className="mb-20" key={2}>
          <strong>Tvoja newsletter lista je prazna.</strong>
        </li>
      ),
    },
    {
      id: 3,
      Description: (
        <li className="mb-20" key={3}>
          <strong>Imaš visok broj posjetitelja, ali nizak broj kupaca.</strong>
        </li>
      ),
    },
    {
      id: 4,
      Description: (
        <li className="mb-20" key={4}>
          <strong>Imaš sporu webicu i nisi zadovoljan/na sa dizajnom.</strong>
        </li>
      ),
    },
    {
      id: 5,
      Description: (
        <li className="mb-20" key={5}>
          <strong>Nemaš posjetitelje na webici, a duže od godinu dana si na tržištu.</strong>
        </li>
      ),
    },
    {
      id: 6,
      Description: (
        <li className="mb-20" key={6}>
          <strong>Tek si napravio/la webicu i nisi siguran/na dali je to to.</strong>
        </li>
      ),
    },
  ],
  links: ["Trebaš novu webicu?", "Boost webice?", "Trebaš održavanje?"],
  firstName: formData.firstName,
  email: formData.email
};

export const NetlifyWelcomeEmail = ({
  steps = PropDefaults.steps,
  links = PropDefaults.links,
  email
}: NetlifyWelcomeEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Newsletter</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#000",
                offwhite: "#fafbfb",
              },
              spacing: {
                0: "0px",
                20: "20px",
                45: "45px",
              },
            },
          },
        }}
      >
        <Body className="bg-offwhite text-base font-sans">
          <div className="flex items-center justify-center my-12">
                    <svg width="191" height="36" viewBox="0 0 191 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39.7296 9.072H47.0736L38.6256 36H28.7376L23.7936 20.064L18.8976 36H9.00963L0.561625 9.072H7.90563L14.1456 28.896L20.2416 9.072H27.3456L33.4896 28.896L39.7296 9.072ZM74.4498 24.24H52.9458C53.4738 27.84 55.6338 29.616 60.3378 29.616C64.7058 29.616 66.8658 28.416 67.5378 26.64H74.5938C73.8738 32.448 69.1698 36 60.3378 36C51.1218 36 45.8898 31.392 45.8898 22.416C45.8898 13.632 51.2658 8.832 60.3378 8.832C64.1298 8.832 67.2018 9.792 69.4578 11.376V11.328C74.6418 14.88 75.1218 20.544 74.7378 24.24H74.4498ZM60.3378 15.216C56.3058 15.216 54.0978 16.704 53.2338 19.44H67.4418C66.8658 17.424 65.5218 15.216 60.3378 15.216ZM95.0046 9.072C106.381 9.072 107.581 18.624 107.581 22.56C107.581 26.16 106.333 36 95.0046 36C89.9646 36 86.8926 34.608 85.0686 32.256H84.7326V36H77.4366V1.344H84.7326V13.056H85.1166C86.9406 10.656 90.0126 9.072 95.0046 9.072ZM92.8926 29.76C99.8526 29.76 100.621 24.48 100.621 22.56C100.621 20.448 99.8526 15.36 92.8926 15.36C86.5566 15.36 85.2606 18.912 85.2606 22.56C85.2606 26.64 86.5566 29.76 92.8926 29.76ZM116.982 36H109.734V9.264H116.982V36ZM116.982 7.344H109.734V0.815998H116.982V7.344ZM140.37 25.92H147.57C146.994 32.4 141.282 36 133.554 36C125.634 36 119.202 31.44 119.202 22.512C119.202 13.824 125.634 9.024 133.554 9.024C141.282 9.024 146.946 12.768 147.57 19.152H140.418C139.794 17.136 138.018 15.6 133.554 15.6C128.802 15.6 126.306 17.952 126.306 22.512C126.306 27.312 128.802 29.472 133.554 29.472C138.162 29.472 139.842 27.792 140.37 25.92ZM171.477 13.056H171.812V9.072H179.109V36H171.812V32.256H171.573C169.749 34.608 166.677 36 161.589 36C150.309 36 149.061 26.16 149.061 22.56C149.061 18.624 150.261 9.072 161.637 9.072C166.629 9.072 169.653 10.656 171.477 13.056ZM163.749 29.76C170.037 29.76 171.333 26.64 171.333 22.56C171.333 18.912 170.037 15.36 163.749 15.36C156.741 15.36 156.021 20.448 156.021 22.56C156.021 24.48 156.789 29.76 163.749 29.76ZM186.052 36C183.7 36 181.78 34.08 181.78 31.728C181.78 29.328 183.7 27.408 186.052 27.408C188.452 27.408 190.372 29.328 190.372 31.728C190.372 34.08 188.452 36 186.052 36Z" fill="black"/>
</svg>
          </div>



          <Container className="bg-white p-45">
            <Heading className="text-center my-0 leading-8">
              Tvoja besplatna checklista
            </Heading>

            <Section>
              <Row>
                <Text className="text-base">
                  Hvala ti na prijavi na Newsletter! Možeš očekivati newsletter <u>svakog prvog Petka u mjesecu</u> , a čitati ćeš savjete i preporuke za optimizaciju svoje webice od brzine do dizajna.
                </Text>

                <Text className="text-base">Tvoja webica treba osvježenje ako:</Text>
              </Row>
            </Section>

            <ul>{steps?.map(({ Description }) => Description)}</ul>

            <Section className="text-center">
            <Text className="text-base mb-12">
                  Ovo su samo neki od problema koje pokriva ova checklista, a ukoliko ćeš trebati pomoć oko rješavanja problema uvijek me možeš <Link className=" text-orange-500" href="mailto:stublic.jurica@gmail.com">kontaktirati mailom</Link>  ili <Link className=" text-orange-500" href="https://calendly.com/stublic/stu-development-sastanak">dogovoriti sastanak</Link>.
                </Text>
              
                
                <Link className="bg-brand text-white rounded-lg py-3 px-[18px]" href="https://docs.google.com/spreadsheets/d/1aevZFSSgeE70ct5nJ7oKR6QxaRcOeBOxgyXHNPYFkIQ/edit?usp=drive_link">Preuzmi checklistu </Link>
                
             
              
            </Section>

            <Section className="mt-45">
              <Row className="flex justify-between items-center">
                {links?.map((link) => (
                  <Column key={link}>
                    <Link className="text-black underline font-bold text-[12px]">
                      {link}
                    </Link>{" "}
                    <span className="text-red-500">→</span>
                  </Column>
                ))}
              </Row>
            </Section>
          </Container>

          <Container className="mt-20">
            <Section>
              <Row>
                <Column className="text-right pr-20">
                  <Link href="www.webica.hr" className=" text-orange-500">webica.hr</Link>
                </Column>
                <Column className="text-left">
                  <Link className=" text-orange-500">jurica.stublic</Link>
                </Column>
              </Row>
            </Section>
            <Text className="text-center text-gray-400 mb-45">
            10 000 Zagreb, Oreškovićeva 8, Croatia
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default NetlifyWelcomeEmail;

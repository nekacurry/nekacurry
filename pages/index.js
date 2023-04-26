import { Button, Container, Box, Heading, Image, useColorModeValue, Link } from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from "@chakra-ui/icons"
import NextLink from 'next/link'
import { BioSection, BioYear } from "../components/bio"

const Page = () => {
  return (
    <Container>
      <Box 
        borderRadius="lg" 
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
        p={3} 
        mb={6} 
        mt={1}
        align="center"
      >
        Hi there! I'm a Midwestern Full-Stack Developer.
      </Box>
      
      <Box display={{md: 'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Anneka Curry
          </Heading> 
          <p>Media Magical Girl ( Developer // Artist // Content Creator ) </p>
        </Box>
        <Box 
          flexShrink={0} 
          mt={{base: 4, md: 0}} 
          ml={{md: 6}} 
          align="center"
        >
          <Image 
            borderColor="whiteAlpha.800" 
            borderWidth={2} 
            borderStyle="solid"  
            maxWidth="100px" 
            display="inline-block" 
            borderRadius="full" 
            src="/images/anneka.png"
            alt="Profile Image"/>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Anneka is a 2023 grad and full-stack developer based in the Midwestern U.S. with a passion for all things creative. 
          She has worked to launch multiple products from design to development, and has a knack for problem-solving with code.
          Whether it be beautiful, responsive websites, graphic design, or streaming, Anneka uses her dedication to bring a fresh look to any project.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1998</BioYear>
          Born in Chicago, Illinois
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Began Applied Computer Science Program @ 
          <Link href="https://makeschool.org/" target="_blank"> Make School</Link>
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Continued ACS Program @ Dominican University of California
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Graduated from Dominican University of California with a B.S. in Applied Computer Science
        </BioSection>
      </Section>
    </Container>
  )
}

export default Page
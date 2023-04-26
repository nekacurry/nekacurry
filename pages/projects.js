import { Button, Container, Box, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'
import NextLink from 'next/link'
import { ChevronRightIcon } from "@chakra-ui/icons"
import Layout from "../components/layouts/article"


import thumbPixelP from '../public/images/projects/pixelp.png'
import thumbStreamread from '../public/images/projects/streamread.png'
import thumbBrushwrks from '../public/images/projects/brushwrks.png'

const Projects = () => {
  return (
    <Layout>
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Projects
      </Heading>

      <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section>
          <WorkGridItem id="streamread" title="StreamRead" thumbnail={thumbStreamread}>
          A Chrome extension that searches and displays subtitles in any language, over any video player
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="pixelp" title="PixelP Redux" thumbnail={thumbPixelP}>
            A simple pixel art canvas made with React Redux
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="brushwrks" title="Brushwrks" thumbnail={thumbBrushwrks}>
            Ethical freelance platform for artists
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Box align="center" my={4}>
            <Button as={NextLink} rightIcon={<ChevronRightIcon />} colorScheme="teal" href="https://github.com/nekacurry" target="_blank">
              View more
            </Button>
        </Box>
    </Container>
    </Layout>
  )
}

export default Projects
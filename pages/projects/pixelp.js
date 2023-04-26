import { Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from "../../components/paragraph"
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="PixelP Redux">
      <Container>

        <Title>
          PixelP Redux <Badge>2021-2022</Badge>
        </Title>

        <P>
          A simple pixel art canvas created with React Redux. Allows user to make 16x16 sprites with a color picker, fill bucket, eraser, as well as the option to save their art!
        </P>

        <List ml={4} my={4}>

          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://pixelp-redux.herokuapp.com/'>
              https://pixelp-redux.herokuapp.com/  <ExternalLinkIcon/>
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Platform</Meta>
            <span>Chrome / Firefox / Microsoft Edge</span>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>React, React Redux</span>
          </ListItem>

          <ListItem>
            <Meta>Github</Meta>
            <Link href='https://github.com/nekacurry/FEW-2.3-pixel-art'>
              View Source  <ExternalLinkIcon/>
            </Link>
          </ListItem>

        </List>

        <ProjectImage src="/images/projects/pixelp.png" alt="PixelP Redux"/>

      </Container>
    </Layout>
  )
}

export default Project
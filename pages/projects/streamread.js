import { Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from "../../components/paragraph"
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="StreamRead">
      <Container>

        <Title>
          StreamRead <Badge>2022</Badge>
        </Title>

        <P>
        A Chrome extension built to search and display subtitles in any language, over any video player. Supports .srt, .ssa, and .ass files. Made on a Co.Lab team as a solo developer.
        </P>

        <List ml={4} my={4}>

          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://streamread.netlify.app/'>
            https://streamread.netlify.app/  <ExternalLinkIcon/>
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Platform</Meta>
            <span>Chrome</span>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>Javascript, Google API</span>
          </ListItem>

          <ListItem>
            <Meta>Github</Meta>
            <Link href='https://github.com/Co-Lab-You-Belong-in-Tech/StreamRead/'>
              View Source  <ExternalLinkIcon/>
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Demo</Meta>
            <Link href="src=https://www.youtube.com/watch?v=wZ4gUn5HxVs">
              Product Demo Video<ExternalLinkIcon/>
            </Link>
          </ListItem>

        </List>

        <ProjectImage src="/images/projects/streamread.png" alt="StreamRead"/>
        <ProjectImage src="/images/projects/streamread_02.png" alt="StreamRead"/>

      </Container>
    </Layout>
  )
}

export default Project
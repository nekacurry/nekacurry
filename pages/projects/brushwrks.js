import { Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from "../../components/paragraph"
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="Brushwrks">
      <Container>

        <Title>
          Brushwrks <Badge>2021</Badge>
        </Title>

        <P>
          An ethical freelance platform for real artists to offer commissions and display their portfolio with no hidden fees.
        </P>

        <List ml={4} my={4}>

          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://brushwrks.com'>
              https://brushwrks.com <ExternalLinkIcon/>
            </Link>
            &nbsp;
            <i> currently under maintenance</i>
          </ListItem>

          <ListItem>
            <Meta>Platform</Meta>
            <span>Chrome / Firefox / Microsoft Edge</span>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, Handlebars </span>
          </ListItem>

          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/brushwrks/brushwrks">
              View Source  <ExternalLinkIcon/>
            </Link>
          </ListItem>

        </List>

        <ProjectImage src="/images/projects/brushwrks.png" alt="Brushwrks"/>
        <ProjectImage src="/images/projects/brushwrks_02.png" alt="Brushwrks"/>

      </Container>
    </Layout>
  )
}

export default Project
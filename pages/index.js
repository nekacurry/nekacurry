import { Container, Box, Heading } from "@chakra-ui/react"


const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I'm a full stack developer based in Chicago, IL
      </Box>
      
      <Box display={{md: 'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Anneka Curry
          </Heading> 
          <p>Advanced Media Creation Girl</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
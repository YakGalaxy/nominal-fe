import { Box, Heading, Paragraph, Anchor, Accordion, AccordionPanel } from "grommet";

// Components
import SidebarContainer from "../../containers/Sidebar";

export const HelpPage = ({ editorState, setEditorState }) => {
  return (
    <Box align="center" pad="small" direction="row" justify="center" margin="auto">
      <SidebarContainer editorState={editorState} setEditorState={setEditorState} />
      <Box height="80vh" width="60vw" round="none" pad="medium" background="background-contrast" overflow="auto">
        <Heading color="rgb(170, 170, 170)" size="small" margin={{ bottom: "2.5vh" }}>
          Help & Support
        </Heading>
        <Paragraph color="black" fill>
          Welcome to the help page. If you need assistance, feel free to reach out to us through any of the following channels:
        </Paragraph>
        
        <Box margin={{ bottom: "medium" }}>
          <Heading level={3} color="#7D5A50" size="small">
            Frequently Asked Questions
          </Heading>
          <Accordion>
            <AccordionPanel label="How do I save my document?">
              <Box pad="small">
                <Paragraph>
                  To save your document, click on the "Save document" button located in the sidebar.
                </Paragraph>
              </Box>
            </AccordionPanel>
            <AccordionPanel label="Where can i see my documents?">
              <Box pad="small">
                <Paragraph>
                  You can see your documents in the "Your Documents" button located in the sidebar.
                </Paragraph>
              </Box>
            </AccordionPanel>
            <AccordionPanel label="How do I use spell check?">
              <Box pad="small">
                <Paragraph>
                  Spellcheck is a feature that will be added within the next update. At this time there is noone yet.
                </Paragraph>
              </Box>
            </AccordionPanel>
            <AccordionPanel label="Can i change to dark mode?">
              <Box pad="small">
                <Paragraph>
                 Yes, you can change to dark mode with the button provided in the top right corner.
                </Paragraph>
              </Box>
            </AccordionPanel>
            <AccordionPanel label="How do I change the font size?">
              <Box pad="small">
                <Paragraph>
                  You can change the font size by selecting the text you want to resize and choosing the desired size from the toolbar.
                </Paragraph>
              </Box>
            </AccordionPanel>
          </Accordion>
        </Box>
        
        <Box margin={{ bottom: "medium" }}>
          <Heading level={3} color="#7D5A50" size="small">
            Contact Information
          </Heading>
          <Box margin={{ bottom: "medium" }}>
            <Heading level={4} color="#7D5A50" size="small">
              Phone
            </Heading>
            <Paragraph>
              <Anchor href="tel:+0628391444" color="#B4846C">+31(6) 28391444</Anchor>
            </Paragraph>
          </Box>
          
          <Box margin={{ bottom: "medium" }}>
            <Heading level={4} color="#7D5A50" size="small">
              Email
            </Heading>
            <Paragraph>
              <Anchor href="mailto:support@nominal.com" color="#B4846C">support@nominal.com</Anchor>
            </Paragraph>
          </Box>
          
          <Box>
            <Heading level={4} color="#7D5A50" size="small">
              Social Media
            </Heading>
            <Box direction="row" gap="medium">
              <Anchor href="https://www.facebook.com/nominal" target="_blank" rel="noopener noreferrer" color="#E5B299">
                Facebook
              </Anchor>
              <Anchor href="https://www.twitter.com/nominal" target="_blank" rel="noopener noreferrer" color="#E5B299">
                Twitter
              </Anchor>
              <Anchor href="https://www.instagram.com/nominal" target="_blank" rel="noopener noreferrer" color="#E5B299">
                Instagram
              </Anchor>
              <Anchor href="https://www.linkedin.com/company/nominal" target="_blank" rel="noopener noreferrer" color="#E5B299">
                LinkedIn
              </Anchor>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

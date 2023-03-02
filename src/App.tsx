import { Container, Stack, Text, Textarea, Title } from "@mantine/core";
import { useState } from "react";

function App() {
  const [translatedText, setTranslatedText] = useState<string>("");
  return (
    <Container p="lg">
      <Stack>
        <Title order={1} align="center">
          Emojify your text
        </Title>
        <Title order={3}>From 🇬🇧 ...</Title>
        <Textarea
          autosize
          minRows={4}
          onChange={({ currentTarget }) =>
            setTranslatedText(currentTarget.value)
          }
        />
        <Title order={3}>... to 🤪</Title>
        <Text>{translatedText}</Text>
      </Stack>
    </Container>
  );
}

export default App;

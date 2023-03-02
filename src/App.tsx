import { useState } from "react";

import { Container, Stack, Text, Textarea, Title } from "@mantine/core";

import { translateText } from "./emojiConvertor";

function App() {
  const [translatedText, setTranslatedText] = useState<string>(null);
  return (
    <Container p="lg">
      <Stack>
        <Title order={1} align="center">
          Emojify your text
        </Title>
        <Title order={3}>From 🔤 (in 🇬🇧) ...</Title>
        <Textarea
          autosize
          minRows={4}
          onChange={({ currentTarget }) => {
            console.log(currentTarget.value.split(" "));
            setTranslatedText(translateText(currentTarget.value));
          }}
        />
        <Title order={3}>... to 🤪</Title>
        <Text>{translatedText}</Text>
      </Stack>
    </Container>
  );
}

export default App;

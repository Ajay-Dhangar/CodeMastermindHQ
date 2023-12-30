import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';
import './style.css'

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus id='giscus'
      repo="Ajay-Dhangar/CodeMastermindHQ"
      repoId="R_kgDOJ6ofeQ"
      category="General"
      categoryId="DIC_kwDOJ6ofec4CX1ZW"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme={colorMode}
      lang="en"
      loading="lazy"
      crossorigin="anonymous"
      async
    />
  );
}

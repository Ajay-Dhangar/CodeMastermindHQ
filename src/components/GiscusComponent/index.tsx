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
      category="[ENTER CATEGORY NAME HERE]"
      categoryId="[ENTER CATEGORY ID HERE]"
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

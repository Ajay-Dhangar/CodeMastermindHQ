---
id: doc-card-list-splitting
title: DocCardList Splitting
date: 2022-09-05 19:28:08
---

## Normal DocCardList

You can embed the generated cards list in a normal doc page. It will display all docs of the current folder. Add the DocCardList component on any doc:

```md title="docs/site-generators/docusaurus/doc-card-list-splitting.md"
import DocCardList from '@theme/DocCardList';

<DocCardList />
```

You should see all docs as a card list:

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import DocCardList from '@theme/DocCardList';


<BrowserWindow>

### All docs in folder

<DocCardList />

</BrowserWindow>
```

## Splitting DocCardList

If you want to split the card list you can add `useCurrentSidebarCategory` hook with the `items` prop and additional logic:

```md title="any doc page"
import DocCardList from '@theme/DocCardList';  
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

### First 2 docs

<DocCardList items={[...[...useCurrentSidebarCategory().items].map((_,i)=>i<2?_:null).filter(Boolean)]} />

### Another 4 docs

<DocCardList items={[...[...useCurrentSidebarCategory().items].map((_,i)=>(i>1&&i<6)?_:null).filter(Boolean)]} />

### Rest docs not shown
```

```mdx-code-block
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<BrowserWindow>

### First 2 docs

<DocCardList items={[...[...useCurrentSidebarCategory().items].map((_,i)=>i<2?_:null).filter(Boolean)]} />

### Another 4 docs

<DocCardList items={[...[...useCurrentSidebarCategory().items].map((_,i)=>(i>1&&i<6)?_:null).filter(Boolean)]} />

### Rest docs not shown

</BrowserWindow>
```

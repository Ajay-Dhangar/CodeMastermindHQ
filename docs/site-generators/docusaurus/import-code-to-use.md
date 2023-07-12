---
id: import-code-to-use
title: Import Code To Use
date: 2022-05-15 18:04:05
---

You can write `React` code components and inject them to `markdown` pages.

## Creating

### Make React component

First, create a **BackgroundImage** folder in the `src/page` directory, create a new **index.js** file there, and place this code in it:

```jsx title="src/page/BackgroundImage/index.js"
import React from 'react';
import styles from './styles.module.css';

const BackgroundImage = (props) => {
  return (
    <div
      className="showcaseFavorite_src-pages-showcase-styles-module"
      style={{paddingBottom: '0px'}}>
      <div className="container">
        <section className="margin-top--lg margin-bottom--xl">
          <div className={styles.portfolio_section__projects}>
            // highlight-next-line
            {props.photos ? (
              props.photos.map((item) => (
                <div
                  key={item.title}
                  className={styles.portfolio_section__project}>
                  <div
                    className={styles.portfolio_section__project_image}
                    style={{
                      backgroundImage: item.url,
                      transition:
                        'background-image 0.3s ease-in-out 0s, background-size 0.2s ease 0s',
                      filter: 'none',
                    }}></div>
                  <div className={styles.portfolio_section__project_title}>
                    {item.title}
                  </div>
                  <div
                    className={styles.portfolio_section__project_description}>
                    {item.text}
                  </div>
                </div>
              ))
            ) : (
              // highlight-start
              <p>Photos is empty</p>
            )}
            // highlight-end
          </div>
        </section>
      </div>
    </div>
  );
};

export default BackgroundImage;
```

:::caution Error

The highlighted lines above are required because of `TypeError: Cannot read property 'map' of undefined` during **server-side rendering** (when you run `npm run build`).

:::

#### What this code do?

This component will insert multiple images (as `css background-image`) into the `markdown` page. You only need to pass the image `url` , `title` and `text` from markdown page to the React component as props.

### Add styles

```css title="src/page/BackgroundImage/styles.module.css"
.portfolio_section__projects {
  --width: 100%;
  --columns-count: 3;
  --column-gap: var(--size-xs, 20px);
  --row-gap: 0;
  display: grid;
  width: var(--width);
  grid-template-columns: repeat(var(--columns-count), minmax(0, 1fr));
  grid-column-gap: var(--column-gap);
  grid-row-gap: var(--row-gap);
}

.landing_grid__column_size_full {
  --column-size: var(--grid-columns-count, 12);
  grid-column-start: span var(--column-size);
}

.portfolio_section__project {
  width: 100%;
}

.portfolio_section__project_image {
  position: relative;
  z-index: 1;
  overflow: hidden;
  width: 100%;
  height: 0;
  margin-bottom: var(--size-l, 40px);
  padding-top: 68.33%;
  cursor: pointer;
  transition: background-size 0.2s;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}

.portfolio_section__project_image:hover {
  background-size: 120%;
}

.portfolio_section__project_title {
  margin-bottom: var(--size-xxs, 16px);
  cursor: pointer;
  font: var(--font-subtitle, 20px/1.2em Suisse, Arial, Helvetica, sans-serif);
}

.portfolio_section__project_description {
  margin-bottom: var(--size-xxs, 16px);
  color: #828586;
  font: var(--font-body, 20px/1.2em Suisse, Arial, Helvetica, sans-serif);
}
```

These styles will be place the images by 3 per line. Each image will have a card style with title and description text.


## Usage

### Import the component

Add this code directly into your any markdown page:

````md
```mdx-code-block
import BackgroundImage from '@site/src/pages/BackgroundImage';

export const threePhotos = [
  {
    url: 'url("https://avatars.mds.yandex.net/get-practicum/5473806/2a0000017c83409147d349a1bb246e3d0ed5/1232x1232")',
    title: 'Serverless',
    text: 'Создавать простые навыки Алисы на базе Yandex Cloud Functions'
  },
  {
    url: 'url("https://avatars.mds.yandex.net/get-practicum/5473806/2a0000017c834091e96fc52da39802810172/1232x1232")',
    title: 'Kubernetes®',
    text: 'Запускать контейнеры и создавать кластер с помощью Yandex Managed Service for Kubernetes®'
  },
   {
    url: 'url("https://avatars.mds.yandex.net/get-practicum/5473806/2a0000017c834093b1e4d8d8c72ab3de51c4/1232x1232")',
    title: 'Управляемые базы данных',
    text: 'Настраивать кластеры управляемых баз данных, хранить и анализировать данные в облаке'
  }
  ];

<BackgroundImage photos={threePhotos} />
```
````

:::tip

Note the **mdx-code-block** title after first 3 backticks.

:::

### Result

You should see this:

```mdx-code-block
import BackgroundImage from '@site/src/pages/BackgroundImage';

export const threePhotos = [
  {
    url: 'url("https://avatars.mds.yandex.net/get-practicum/5473806/2a0000017c83409147d349a1bb246e3d0ed5/1232x1232")',
    title: 'Serverless',
    text: 'Создавать простые навыки Алисы на базе Yandex Cloud Functions'
  },
  {
    url: 'url("https://avatars.mds.yandex.net/get-practicum/5473806/2a0000017c834091e96fc52da39802810172/1232x1232")',
    title: 'Kubernetes®',
    text: 'Запускать контейнеры и создавать кластер с помощью Yandex Managed Service for Kubernetes®'
  },
   {
    url: 'url("https://avatars.mds.yandex.net/get-practicum/5473806/2a0000017c834093b1e4d8d8c72ab3de51c4/1232x1232")',
    title: 'Управляемые базы данных',
    text: (
      <div>
        Настраивать <b>кластеры</b> управляемых баз данных, хранить и анализировать данные в облаке
      </div>
    ),
  },
  ];

<BackgroundImage photos={threePhotos} />
```

### Separate page

If you want your component to be rendered on a separate page, you need to first copy above code to a single page (with little differences):

:::tip About the alias `@site`

In Docusaurus, the `@site` alias always points to the root folder.

:::

```jsx title="src/pages/myComponents/index.js"
import React from 'react';
import Layout from '@theme/Layout';
import BackgroundImage from '@site/src/pages/BackgroundImage';

const threePhotos = [
  {
    url: 'url("https://avatars.mds.yandex.net/get-practicum/5473806/2a0000017c83409147d349a1bb246e3d0ed5/1232x1232")',
    title: 'Serverless',
    text: 'Создавать простые навыки Алисы на базе Yandex Cloud Functions',
  },
  {
    url: 'url("https://avatars.mds.yandex.net/get-practicum/5473806/2a0000017c834091e96fc52da39802810172/1232x1232")',
    title: 'Kubernetes®',
    text: 'Запускать контейнеры и создавать кластер с помощью Yandex Managed Service for Kubernetes®',
  },
  {
    url: 'url("https://avatars.mds.yandex.net/get-practicum/5473806/2a0000017c834093b1e4d8d8c72ab3de51c4/1232x1232")',
    title: 'Управляемые базы данных',
    text: 'Настраивать кластеры управляемых баз данных, хранить и анализировать данные в облаке',
  },
];

export default function MyComponents() {
  return (
    <Layout>
      <BackgroundImage photos={threePhotos} />
    </Layout>
  );
}
```

#### Add link to page

Place a link with href `/myComponents`:

```md
[click](/myComponents)
```

to your markdown file. And you can [click](/myComponents) to see your new page.

#### Add link to sidebar

Add these highlighted lines at the top of your `sidebars.js`:

```json title="sidebars.js"
module.exports = {
  Docs: [
    // highlight-start
    {
      type: 'link',
      label: 'myComponents',
      href: '/myComponents',
    },
    // highlight-end
    {
      type: 'autogenerated',
      dirName: '.',
    },
  ],
};
```

You should now have a working `myComponents` link at the top of the sidebar.

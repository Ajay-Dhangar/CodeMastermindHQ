---
id: semantic-markup-cheat-sheet
title: Semantic Markup Cheat Sheet
date: 2022-05-28 11:47:08
---

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import CodeBlock from '@theme/CodeBlock';
import card from '@site/src/css/markdown.module.css'
```

[Semantic diagram](https://html.spec.whatwg.org/#kinds-of-content)

<div className={card.wrap}>
  <div className={card.maxwidth}>
    <CodeBlock language="html" title="dl, dt, dd">
{`<p>Unix:</p>
<dl>
  <dt>Category</dt>
  <dd>OS</dd>
  <dt>Start Develop</dt>
  <dd>1969</dd>
</dl>`}
    </CodeBlock>
  </div>
  <span class="nonBreak"><a href='https://html.spec.whatwg.org/#the-dl-element' title="spec" class='external'>dl</a></span>
  <div className={card.maxwidth}>
    <BrowserWindow>
      <p>Unix:</p>
      <dl>
        <dt>Category</dt>
        <dd>OS</dd>
        <dt>Start Develop</dt>
        <dd>1969</dd>
      </dl>
    </BrowserWindow>
  </div>
</div>

<div className={card.wrap}>
  <div className={card.maxwidth}>
    <CodeBlock language="html" title="blockquote, cite">
{`<blockquote>
  <p>People are strange</p>
  <footer>— <cite>Doors</cite></footer>
</blockquote>`}
    </CodeBlock>
  </div>
  <span class="nonBreak"><a href='https://html.spec.whatwg.org/#the-blockquote-element' title="spec" class='external'>blockquote</a></span>
  <div className={card.maxwidth}>
    <BrowserWindow>
      <blockquote>
        <p>People are strange</p>
        <footer>— <cite>Doors</cite></footer>
      </blockquote>
    </BrowserWindow>
  </div>
</div>

<div className={card.wrap}>
  <div className={card.maxwidth}>
    <CodeBlock language="html" title="q">
{`<q>Worse is better</q> Unix`}
    </CodeBlock>
  </div>
  <div className={card.maxwidth}>
    <BrowserWindow>
      <q>Worse is better</q> Unix
    </BrowserWindow>
  </div>
</div>

<div className={card.wrap}>
  <div className={card.maxwidth}>
    <CodeBlock language="html" title="address">
{`<address>
  0 Lab
  <br/>6 Simply street
  <br/>MyCity
  <br />OurLand
  <br/>0000000
</address>`}
    </CodeBlock>
  </div>
  <div className={card.maxwidth}>
    <BrowserWindow>
      <address>
        0 Lab
        <br/>6 Simply street
        <br/>MyCity
        <br />OurLand
        <br/>0000000
      </address>
    </BrowserWindow>
  </div>
</div>

<div className={card.wrap}>
  <div className={card.maxwidth}>
    <CodeBlock language="html" title="del, ins">
{`<p>Everything is a <del datetime="2007-03-08">file</del> <ins datetime="2007-03-08">stream of bytes</ins></p>`}
    </CodeBlock>
  </div>
  <div className={card.maxwidth}>
    <BrowserWindow>
      <p>Everything is a <del datetime="2007-03-08">file</del> <ins datetime="2007-03-08">stream of bytes</ins></p>
    </BrowserWindow>
  </div>
</div>

<div className={card.wrap}>
  <div className={card.maxwidth}>
    <CodeBlock language="html" title="abbr">
{`recursive acronym as <abbr title="GNU's Not Unix!">GNU</abbr>`}
    </CodeBlock>
  </div>
  <div className={card.maxwidth}>
    <BrowserWindow>
      recursive acronym as <abbr title="GNU's Not Unix!">GNU</abbr>
    </BrowserWindow>
  </div>
</div>

<div className={card.wrap}>
  <div className={card.maxwidth}>
    <CodeBlock language="html" title="lang">
{`<i lang="fr">Bonjour</i>`}
    </CodeBlock>
  </div>
  <div className={card.maxwidth}>
    <BrowserWindow>
      <i lang="fr">Bonjour</i>
    </BrowserWindow>
  </div>
</div>

<div className={card.wrap}>
  <div className={card.maxwidth}>
    <CodeBlock language="html" title="progress">
{`<progress value="3" min="1" max="5" />`}
    </CodeBlock>
  </div>
  <div className={card.maxwidth}>
    <BrowserWindow>
      <progress value="3" min="1" max="5" />
    </BrowserWindow>
  </div>
</div>

<div className={card.wrap}>
  <div className={card.maxwidth}>
    <CodeBlock language="html" title="meter">
{`<meter value="13" min="1" max="20" />`}
    </CodeBlock>
  </div>
  <div className={card.maxwidth}>
    <BrowserWindow>
      <meter value="13" min="1" max="20" />
    </BrowserWindow>
  </div>
</div>

<div className={card.wrap}>
  <div className={card.maxwidth}>
    <CodeBlock language="html" title="kbd">
{` <p>press <kbd>Ctrl + C</kbd></p>`}
    </CodeBlock>
  </div>
  <div className={card.maxwidth}>
    <BrowserWindow>
       <p>press <kbd>Ctrl + C</kbd></p>
    </BrowserWindow>
  </div>
</div>

<div className={card.wrap}>
  <div className={card.maxwidth}>
    <CodeBlock language="html" title="samp">
{`<p>Terminal:</p>
<p><samp>Permission denied<br/>Press F1 to continue</samp></p>`}
    </CodeBlock>
  </div>
  <div className={card.maxwidth}>
    <BrowserWindow>
      <p>Terminal:</p>
      <p><samp>Permission denied<br/>Press F1 to continue</samp></p>
    </BrowserWindow>
  </div>
</div>

<div className={card.wrap}>
  <div className={card.maxwidth}>
    <CodeBlock language="html" title="code">
{`run in bash: <code>id -u</code> for guid`}
    </CodeBlock>
  </div>
  <div className={card.maxwidth}>
    <BrowserWindow>
      run in bash: <code>id -u</code> for guid
    </BrowserWindow>
  </div>
</div>

<div className={card.wrap}>
  <div className={card.maxwidth}>
    <CodeBlock language="html" title="pre, code">
{`<p>Run in bash:</p>
<pre>
  <code>
    stat -c '%a - %n' *
  </code>
</pre>
<p>for list in 777 style.</p>`}
    </CodeBlock>
  </div>
  <div className={card.maxwidth}>
    <BrowserWindow>
      <p>Run in bash:</p>
      <pre>
        <code>
          stat -c '%a - %n' *
        </code>
      </pre>
      <p>for list in 777 style.</p>
    </BrowserWindow>
  </div>
</div>

<div className={card.wrap}>
  <div className={card.maxwidth}>
    <CodeBlock language="html" title="var">
{`<p>The area of a triangle is: 1/2 x <var>b</var> x <var>h</var>, where <var>b</var> is the base, and <var>h</var> is the vertical height.</p>`}
    </CodeBlock>
  </div>
  <div className={card.maxwidth}>
    <BrowserWindow>
      <p>The area of a triangle is: 1/2 x <var>b</var> x <var>h</var>, where <var>b</var> is the base, and <var>h</var> is the vertical height.</p>
    </BrowserWindow>
  </div>
</div>

<div className={card.wrap}>
  <div className={card.maxwidth}>
    <CodeBlock language="html" title="var, sup, sub">
{`<p>she wrote <var>E</var> = <var>m</var><var>c</var><sup>2</sup></p>
<p>decimal to binary 42<sub>10</sub> = 00101010<sub>2</sub></p>`}
    </CodeBlock>
  </div>
  <div className={card.maxwidth}>
    <BrowserWindow>
      <p>she wrote <var>E</var> = <var>m</var><var>c</var><sup>2</sup></p>
      <p>decimal to binary 42<sub>10</sub> = 00101010<sub>2</sub></p>
    </BrowserWindow>
  </div>
</div>

<div className={card.wrap}>
  <div className={card.maxwidth}>
    <CodeBlock language="html" title="math">
{`<figure>
 <math>
  <mi>a</mi>
  <mo>=</mo>
  <msqrt>
   <msup><mi>b</mi><mn>2</mn></msup>
   <mi>+</mi>
   <msup><mi>c</mi><mn>2</mn></msup>
  </msqrt>
 </math>
 <figcaption>
  Using Pythagoras' theorem to solve for the hypotenuse <var>a</var> of
  a triangle with sides <var>b</var> and <var>c</var>
 </figcaption>
</figure>
`}
    </CodeBlock>
  </div>
  <span class="nonBreak"><a href='https://www.w3.org/Math/draft-spec/chapter2.html#interf.toplevel' title='spec' class='external'>math</a></span>
  <div className={card.maxwidth}>
    <BrowserWindow>
      <figure>
        <math>
          <mi>a</mi>
          <mo>=</mo>
          <msqrt>
          <msup><mi>b</mi><mn>2</mn></msup>
          <mi>+</mi>
          <msup><mi>c</mi><mn>2</mn></msup>
          </msqrt>
        </math>
        <figcaption>
          Using Pythagoras' theorem to solve for the hypotenuse <var>a</var> of
          a triangle with sides <var>b</var> and <var>c</var>
        </figcaption>
      </figure>
    </BrowserWindow>
  </div>
</div>

:::caution

`math` don't work in Chromium (OS MX Linux MX-21)!

:::

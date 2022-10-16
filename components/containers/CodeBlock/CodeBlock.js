import { LitElement, html, css, } from 'lit';
import 'prismjs/prism.js';

const CodeBlock = ({ language, theme }) => {

  language = language && language !== true ? language : `javascript`;
  theme = theme && theme !== true ? theme : `/node_modules/prismjs/themes/prism.css`;
  const output =
    `<link rel="stylesheet" href="${ theme }">
    <pre class="language-${ language }"><code id="output">${ children }</code></pre>

    <div id="hide">
      <slot id="code">${ children }</slot>
    </div>`;

}
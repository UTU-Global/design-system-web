import { TemplateResult, html } from "lit-html";
import '@material/mwc-icon/mwc-icon-font';
import '@material/mwc-icon';

const link = (text: string, url: string): TemplateResult => html`
  <a
    href=${url}
    target="_blank"
    rel="noopener noreferrer"
  >${text}</a>
`;

export const icons = (): TemplateResult => html`
  <div id="wrapper">
    <h3>Icons</h3>
    <p>We are using the icons of the ${link('Material Design library', 'https://material.io/resources/icons/')}</a>.</p>
    <p>The Web Components implementation is from the ${link('official Google repository', 'https://github.com/material-components/material-components-web-components/tree/master/packages/icon')}.</p>
  
    <p>
      <mwc-icon>search</mwc-icon>
      <mwc-icon>contactless</mwc-icon>
      <mwc-icon>face</mwc-icon>
      <mwc-icon>home</mwc-icon>
    </p>
  </div>
`;
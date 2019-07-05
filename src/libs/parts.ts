import { html, TemplateResult } from 'lit-html';

const notAvailable = (): TemplateResult => html`<p>Content not available</p>`;

const empty = (): TemplateResult => html``;

export {
  empty,
  notAvailable
}
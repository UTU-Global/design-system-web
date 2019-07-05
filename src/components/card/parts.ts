import { html, TemplateResult } from 'lit-html';

const check = (prop :string) :Boolean|number => prop && prop.length;

const _taxonomy = (value: string): TemplateResult =>
  check(value) ? html`<h6>${value}</h6>` : html``;

const _media = (
  value: string, 
  title: string
): TemplateResult =>
  check(value) ? html`
    <figure>
      <img 
        src=${value} 
        alt=${title}
      >
    </figure>
  ` : html``;

export {
  _taxonomy,
  _media
};
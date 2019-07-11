import { html, TemplateResult } from 'lit-html';
import { component } from 'haunted';

import styles from './parts.scss';

export const Center = (): TemplateResult =>
  html`
    <style>${styles}</style>
    <section>
      <slot></slot>
    </section>
  `;

export const Left = (): TemplateResult =>
  html`
    <style>${styles}</style>
    <figure>
      <slot></slot>
    </figure>
  `;

export const Right = (): TemplateResult =>
  html`
    <style>${styles}</style>
    <aside>
      <slot></slot>
    </aside>
  `;

// @ts-ignore
customElements.define('utu-navbar-center', component(Center));
// @ts-ignore
customElements.define('utu-navbar-right', component(Right));
// @ts-ignore
customElements.define('utu-navbar-left', component(Left));
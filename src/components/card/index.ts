import { html, TemplateResult } from 'lit-html';
import { classMap, ClassInfo } from 'lit-html/directives/class-map';
import { component, useState, useEffect } from 'haunted';

import { _taxonomy, _media } from './parts';

import styles from './style.scss';

interface Props {
  title: string;
  taxonomy: string;
  media: string;
  background: string;
};

export const Card = ({
  title = '',
  taxonomy = '',
  media = '',
  background = 'white'
}: Props): TemplateResult => {

  const classes :ClassInfo = {
    'white': background === 'white',
    'light': background === 'light',
  }

  return html`      
    <article 
      class="card"
    >
      ${_media(media, title)}
      <section
        class=${classMap(classes)}
      >
        ${_taxonomy(taxonomy)}
        <h3>${title}</h3>
        <p><slot></slot></p>
      </section>
    </article>
  `;
}

Card.observedAttributes = ['title', 'taxonomy', 'media', 'background'];

// @ts-ignore
customElements.define('utu-card', component(Card));
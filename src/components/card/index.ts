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
  loading: boolean;
};

export const Card = ({
  title = '',
  taxonomy = '',
  media = '',
  background = 'white',
  loading = false
}: Props): TemplateResult => {

  const classes: ClassInfo = {
    'white': background === 'white',
    'light': background === 'light',
  }

  const optimistic: ClassInfo = {
    'card': true,
    'loading': loading,
  }

  return html`
    <style>${styles}</style>      
    <article 
      class=${classMap(optimistic)}
    >
      ${_media(media, title)}
      <section
        class=${classMap(classes)}
      >
        ${_taxonomy(taxonomy)}
        <h3>${title}</h3>
        <p><slot></slot></p>

        <div class="placeholder">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </section>
    </article>
  `;
}

Card.observedAttributes = ['title', 'taxonomy', 'media', 'background', 'loading'];

// @ts-ignore
customElements.define('utu-card', component(Card));
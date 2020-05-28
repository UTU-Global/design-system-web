import { html, TemplateResult } from 'lit-html';
import { classMap, ClassInfo } from 'lit-html/directives/class-map';
import { component, useState, useEffect } from 'haunted';

import { triggerEvent } from './../../libs/utils';
import { UpdateEvent } from './../../types/events';

import styles from './style.scss';
import '@material/mwc-icon';

interface Props {
  uuid: string;
  inverse: boolean;
  state: string
};

export const Tag = function({
  uuid = '',
  inverse = false,
  state = ''
}: Props): TemplateResult {
  const classes: ClassInfo = {
    'inverse': inverse,
    'success': state === 'success',
    'error': state === 'error',
    'neutral': state === 'neutral',
    'warning': state === 'warning',
    'info': state === 'info',
  };

  const remove = (evt) => {
    evt.preventDefault();
    triggerEvent(evt.target, 'remove', { uuid })
  }

  return html`
    <style>${styles}</style>
    <span
      @click=${(event) => remove(event)}
      data-uuid=${uuid}
      class=${classMap(classes)}
    >
     <slot></slot>
     <mwc-icon>remove_circle</mwc-icon>
    </span>
  `;
}

Tag.observedAttributes = ['uuid', 'inverse', 'state'];

// @ts-ignore
customElements.define('utu-tag', component(Tag));
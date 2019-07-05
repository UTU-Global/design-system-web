import { html, TemplateResult } from 'lit-html';
import { classMap, ClassInfo } from 'lit-html/directives/class-map';
import { component, useState, useEffect } from 'haunted';

import styles from './style.scss';

interface Props {
  priority: string;
  state: string;
  disabled: boolean;
  fitted: boolean;
  nooutline: boolean;
  progress: string;
  type: string;
};

export const Button = ({
  priority = 'secondary',
  state = '',
  disabled = false,
  fitted = false,
  nooutline = false,
  progress = '',
  type = 'button'
}: Props): TemplateResult => {
  const classes :ClassInfo = {
    'fitted': fitted,
    'outline': nooutline,
    'primary': priority === 'primary',
    'secondary': priority === 'secondary',
    'tertiary': priority === 'tertiary',
    'success': state === 'success',
    'error': state === 'error',
    'neutral': state === 'neutral',
    'warning': state === 'warning',
    'info': state === 'info',
    'is-loading': progress === 'pending',
    'is-success': progress === 'success',
    'is-error': progress === 'error',
  }

  return html`
    <style>${styles}</style>
    <button
      type=${type}
      ?disabled=${disabled}
      class=${classMap(classes)}
    >
      <span class="content-loading"><amber-progress size="24" stroke="2" value="25"></amber-progress></span>
      <span class="content-success">Success</span>
      <span class="content-error">Error</span>
      <span class="content-default"><slot></slot></span>
    </button>
  `;
}

Button.observedAttributes = ['priority', 'state', 'disabled', 'fitted', 'nooutline', 'progress', 'type'];

// @ts-ignore
customElements.define('utu-button', component(Button));
import { html, TemplateResult } from 'lit-html';
import { classMap, ClassInfo } from 'lit-html/directives/class-map';
import { component, useState, useEffect } from 'haunted';
import flatpickr from 'flatpickr';

import { triggerEvent } from './../../libs/utils';

import styles from './style.scss';

interface Props {
  inline: boolean;
  disabled: boolean;
  time: boolean;
  mode: string;
  value: string;
  config: object;
  _flatpickr?: any
};

export const DatePicker = function({
  inline = false,
  disabled = false,
  time = false,
  mode = 'single',
  value = '',
  config = {},
  _flatpickr = flatpickr
}: Props):TemplateResult {
  const open = () => _flatpickr.open();
  const close = () => _flatpickr.open();

  useEffect(() => {
    // setTimeout(() => {
      const elem: HTMLElement = this.shadowRoot.querySelector('input');
      // console.log(_flatpickr);
      _flatpickr(elem, setup);
    // }, 100);
  }, []);

  const classes: ClassInfo = {
    'inline': inline,
  }

  const defaults :object = {
    appendTo: this.shadowRoot,
    inline, mode,
    enableTime: time,
    defaultDate: value,
    onChange: (selectedDates, dateStr, instance) => 
      triggerEvent(this.shadowRoot, 'change', { selectedDates, dateStr, instance })
  };

  const setup :object = {...defaults, ...config};

  return html`
    <style>${styles}</style>
    <div class=${classMap(classes)}>
      <input type="text"
        value=${value}
        ?disabled=${disabled}
      />
    </div>
  `;
}

DatePicker.observedAttributes = ['inline', 'disabled', 'time', 'mode', 'value', 'config'];

// @ts-ignore
customElements.define('utu-datepicker', component(DatePicker));

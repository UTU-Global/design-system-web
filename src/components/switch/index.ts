import { html, TemplateResult } from 'lit-html';
import { classMap, ClassInfo } from 'lit-html/directives/class-map';
import { component, useState, useEffect } from 'haunted';

import { triggerEvent } from './../../libs/utils';

import styles from './style.scss';

interface Props {
  active: boolean|null;
};

export const Switch = function ({
  active = null
}: Props): TemplateResult {
  const [getActive, setActive] = useState(active === true);

  useEffect(() => {
    setActive(active)
  }, [active]);

  const _setActive = () => {
    setActive(!getActive)
    triggerEvent(this.shadowRoot, 'change', { 'value': active });
  }

  return html`
    <style>${styles}</style>
    <span @click=${(evt) => _setActive()}>
      <input
        class="switch"
        name="switch"
        type="checkbox" 
        ?checked=${getActive}
      >
      <label for="switch">&nbsp;</label>
    </span>
  `;
}

Switch.observedAttributes = ['active'];

// @ts-ignore
customElements.define('utu-switch', component(Switch));
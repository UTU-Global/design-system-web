import { html, TemplateResult } from 'lit-html';
import { classMap, ClassInfo } from 'lit-html/directives/class-map';
import { component, useState, useEffect } from 'haunted';

import { triggerEvent } from './../../libs/utils';
import { UpdateEvent } from './../../types/events';

import styles from './style.scss';

import './tab-content';

interface Props {
  labels: string;
  active: number;
  fitted: boolean;
};

export const Tab = ({
  labels = 'First,Second',
  active = 0,
  fitted = false,
}: Props): TemplateResult => {
  const [getActive, setActive] = useState(active);

  useEffect(() => {
    // console.log(active, document, document.activeElement.shadowRoot.activeElement)
    // setActive(active);
    // _changeTab(active);
  });

  const _showTab = (index: number) => {
    const tabs: NodeList = document.querySelectorAll('utu-tab-content');
    tabs.forEach((e: HTMLElement, i: number): void => 
      i === index ? e.setAttribute('visible','') : e.removeAttribute('visible'));
  };

  const _setActive = (evt) => {
    evt.preventDefault();
    const index: number = parseInt(evt.target.dataset.index);
    _changeTab(index);
    triggerEvent(evt.target, 'change', { 'active': index });
  };

  const _changeTab = (index: number) => {
    setActive(index);
    _showTab(index);
  }

  const classes: ClassInfo = {
    'fitted': fitted
  };

  const list: Array<String> = labels.split(',') || [];

  return html`
    <style>${styles}</style>
    <section 
      class=${classMap(classes)}
    >
      <ul
        class="tabs-list"
        role="tablist">
        ${list.map((e: string, i: number): TemplateResult => html`
          <li
            class=${getActive === i ? 'active' : ''}
            role="presentation"
          >
            <a 
              href="#"
              role="tab"
              data-index=${i}
              @click=${(event) => _setActive(event)}
            >${e}</a>
          </li>
        `)}
      </ul>
      <article
        class="tabs-content"
        role="tabpanel"
      >
        <slot></slot>
      </article>
    </section>
  `;
}

Tab.observedAttributes = ['labels', 'active', 'fitted'];

// @ts-ignore
customElements.define('utu-tabs', component(Tab));
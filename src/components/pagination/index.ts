import { html, TemplateResult } from 'lit-html';
import { component, useState, useEffect } from 'haunted';

import { triggerEvent } from './../../libs/utils';
import { empty } from './../../libs/parts';
import { indexToValue, activeElement } from './utils';

import styles from './style.scss';

interface Props {
  active: string;
  start?: number;
  total: string;
  display?: number;
  noboundaries?: boolean;
  nonumbers?: boolean;
};

export const Pagination = ({
  active = '1',
  start = 1,
  total = '5',
  display = 5,
  noboundaries = false,
  nonumbers = false
}: Props): TemplateResult => {
  const [items, setItems] = useState([1]);
  const [getActive, setActive] = useState(parseInt(active) || 0);

  const _setActive = (event) => {
    event.preventDefault();
    const index: number = parseInt(event.target.dataset.index);
    setActive(index + 1);
    triggerEvent(event.target, 'change', { 'active': index });
  }

  useEffect(() => {
    const update: number[] = Array.from(Array(parseInt(total)), indexToValue);
    setItems(update);
  }, [active, total]);

  return html`
    <style>${styles}</style>
    <section
      class="pagination"
    >
      <ul>
        ${(noboundaries || nonumbers) ? empty() : html`<li>
          <span class="boundaries">&laquo;</span>
        </li>`}
        ${ items.map((e: number, i: number): TemplateResult => html`
          <li class=${activeElement(e, getActive)}>
            <span
              data-index=${i}
              @click=${(event) => _setActive(event)}
            >${e}</span>
          </li>
        `) }
        ${(noboundaries || nonumbers) ? empty() : html`<li>
          <span class="boundaries">&raquo;</span>
        </li>`}
      </ul>
    </section>
  `;
}

Pagination.observedAttributes = ['active', 'total'];

// @ts-ignore
customElements.define('utu-pagination', component(Pagination));
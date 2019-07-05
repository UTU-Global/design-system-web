import { html, TemplateResult } from 'lit-html';
import { component } from 'haunted';

import { empty } from './../../libs/parts';

interface Props {
  visible: boolean;
};

export const TabContent = ({
  visible = false,
}: Props): TemplateResult => 
  html`${visible ? html`<slot></slot>` : empty()}`;

TabContent.observedAttributes = ['visible'];

// @ts-ignore
customElements.define('utu-tab-content', component(TabContent, HTMLElement));
import { html, TemplateResult } from 'lit-html';
import { classMap, ClassInfo } from 'lit-html/directives/class-map';
import { component, useState, useEffect } from 'haunted';

import styles from './style.scss';
import './parts';

interface Props {
  
};

export const Navbar = ({}: Props): TemplateResult => 
  html`
    <style>${styles}</style>
    <nav>
      <div class="wrapper">
        <slot></slot>
      </div>
    </nav>
  `;

Navbar.observedAttributes = [];

// @ts-ignore
customElements.define('utu-navbar', component(Navbar));
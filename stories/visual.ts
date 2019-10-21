import { storiesOf } from '@storybook/polymer';
import { html, TemplateResult } from 'lit-html';
import { kitchen } from './visual/kitchen';
import { table } from './visual/table';
import { form } from './visual/form';
import { icons } from './visual/icons';

import styles from './../src/visual/index.scss';

const brand: string[] = ['#00B398', '#009681', '#1E1E20'];
const bgs: string[] = ['#1E1E20', '#666666', '#999999', '#D5D5D5', '#F5F5F5', '#FFFFFF'];
const toast: string[] = ['#008CC9', '#009681', '#FF9948', '#E33D30'];

storiesOf('Visual', module)
  .add('Colors', () => html`
    <style>${styles}</style>
    <style>
      #wrapper { padding: 30px; }
      .color-box { padding: 5px 10px;  }
      h3 { margin-top: 20px }
    </style>
    <div id="wrapper">
      <h1>Colors</h1>
      
      <h3>Brand</h3>
      ${brand.map((e: string, i: number): TemplateResult => 
        html`<div class="color-box" style="background: ${e}">${e}</div>`)}

      <h3>Background and texts</h3>
      ${bgs.map((e: string, i: number): TemplateResult => 
        html`<div class="color-box" style="background: ${e}">${e}</div>`)}

      <h3>Toast palette</h3>
      ${toast.map((e: string, i: number): TemplateResult => 
        html`<div class="color-box" style="background: ${e}">${e}</div>`)}

    </div>
  `)
  .add('Kitchen sink', () => html`
<style>${styles}</style>
<style>#wrapper { padding: 30px; }</style>
${kitchen()}
  `)
  .add('Tables', () => html`
  <style>${styles}</style>
  <style>#wrapper { padding: 30px; }</style>
  ${table()}
    `)
  .add('Form only', () => html`
    <style>${styles}</style>
    <style>
      #wrapper { padding: 30px; }
      .inline .elements {
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-column-gap: 10px;
      }
    </style>
    ${form()}
  `)
  .add('Icons', () => html`
<style>${styles}</style>
<style>#wrapper { padding: 30px; }</style>
${icons()}
  `);
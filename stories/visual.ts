import { storiesOf } from '@storybook/polymer';
import { html, TemplateResult } from 'lit-html';
import { kitchen } from './visual/kitchen';
import { table } from './visual/table';

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

      <h3>Toast pallet</h3>
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
    <style>#wrapper { padding: 30px; }</style>

    <div id="wrapper">
      <h2>Form only</h2>
      <form action="#">
    <fieldset>
      <legend>Form legend</legend>
      <div>
        <label for="f1">Text input:</label>
        <input type="text" id="f1" value="input text" placeholder="text here">
      </div>
      <div>
        <label for="pw">Password input:</label>
        <input type="password" id="pw" value="password">
      </div>
      <div>
        <label for="f2">Radio input:</label>
        <input type="radio" id="f2">
      </div>
      <div>
        <label for="f3">Checkbox input:</label>
        <input type="checkbox" id="f3">
      </div>
      <div>
        <label for="f4">Select field:</label>
        <select id="f4">
          <option>
            Option 01
          </option>
          <option>
            Option 02
          </option>
        </select>
      </div>
      <div>
        <label for="f5">Textarea:</label>
        <textarea id="f5" cols="30" rows="5">Textarea text</textarea>
      </div>
      <div>
        <label for="f6">Input Button:</label>
        <input type="button" id="f6" value="button text">
      </div>
      <div>
        <label>Button Elements: <span class="small quiet">Can use &lt;button&gt; tag or &lt;a class="button"&gt;</span></label>
        <button class="button positive"><img src="https://raw.githubusercontent.com/ericrasch/html-kitchen-sink/master/web/assets/img/icons/tick.png" alt=""> Save</button> <a class="button" href="#"><img src="https://raw.githubusercontent.com/ericrasch/html-kitchen-sink/master/web/assets/img/icons/key.png" alt=""> Change Password</a> <a href="#" class="button negative"><img src="https://raw.githubusercontent.com/ericrasch/html-kitchen-sink/master/web/assets/img/icons/cross.png" alt=""> Cancel</a>
      </div>
    </fieldset>
  </form>
    </div>
  `);
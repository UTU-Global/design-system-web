import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { html, TemplateResult } from 'lit-html';
import { component, useState, useEffect } from 'haunted';

import styles from './../src/visual/index.scss';
import './../src/components/button';


addDecorator(withKnobs);

const priorities: object = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
};

const types: object = {
  button: 'button',
  submit: 'submit',
  reset: 'reset'
};

const states: object = {
  success: 'success',
  error: 'error',
  neutral: 'neutral',
  warning: 'warning',
  info: 'info',
  default: ''
};

const progress: object = {
  // success: 'success',
  // error: 'error',
  pending: 'pending',
  default: ''
};

export const Example = (): TemplateResult => {
  const [getActive, setActive] = useState(0);
  const [getDisabled, setDisabled] = useState(0);

  const update = (selection: string) => {
    selection === 'active' ? 
      setActive(getActive + 1) : 
      setDisabled(getDisabled + 1);
  }

  return html`
    <utu-button
      @click=${() => update('active')}
    >Active</utu-button>
    <utu-button
      @click=${() => update('disabled')}
      disabled
    >Disabled</utu-button>

    <hr style="margin: 20px 0">

    <label>Active: <strong>${getActive}</strong> </label> - 
    <label>Disabled: <strong>${getDisabled}</strong> </label>
  `;
}

// @ts-ignore
customElements.define('utu-example', component(Example));

storiesOf('Button', module)
  .add('Playground',
    (): TemplateResult => html`
      <style>${styles}</style>
      <style>body { padding: 30px; } </style>
      <h3>&lt;utu-button&gt;</h3>
      <utu-button
        ?fitted=${boolean('fitted', false)}
        ?disabled=${boolean('disabled', false)}
        ?nooutline=${boolean('nooutline', false)}
        priority=${select('priority', priorities, 'primary')}
        type=${select('type', types, 'button')}
        state=${select('state', states, '')}
        progress=${select('progress', progress, '')}
      >Button</utu-button>
    `)
  .add('Interaction',
    (): TemplateResult => html`
      <style>${styles}</style>
      <style>body { padding: 30px; } </style>
      <h3>&lt;utu-button&gt;</h3>
      <p>Quick interaction test: un disabled buttons events are not fired (<i>as normally expected</i>)</p>
      <utu-example></utu-example>
   `);
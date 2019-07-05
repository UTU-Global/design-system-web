import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { html, TemplateResult } from 'lit-html';

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
  success: 'success',
  error: 'error',
  pending: 'pending',
  default: ''
};


storiesOf('Button', module)
  .add('with text',
    (): TemplateResult => html`
      <style>${styles}</style>
      <style>body { padding: 30px; } </style>
      <h3>&lt;utu-button&gt;</h3>
      <utu-button
        ?fitted=${boolean('fitted', false)}
        ?disabled=${boolean('disabled', false)}
        ?nooutline=${boolean('nooutline', false)}
        priority=${select('priority', priorities, 'secondary')}
        type=${select('type', types, 'button')}
        state=${select('state', states, '')}
        progress=${select('progress', progress, '')}
      >Button</utu-button>
    `);
import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, number, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { html, TemplateResult } from 'lit-html';

import styles from './../src/visual/index.scss';
import './../src/components/datepicker';

addDecorator(withKnobs);

const format: TemplateResult = html`
  <style>${styles}</style>
  <style>body { padding: 30px; } </style>
`;

const title = html`
  <h3>Datepicker</h3>
  <p>A simple widget that wraps the excellet 
    <a target="_blank" href="https://github.com/flatpickr/flatpickr">
      Flatpickr</a> datepicker.</p>
`;

storiesOf('Date Picker', module)
  .add('Playground', (): TemplateResult => html`
  ${title} ${format}
  <label>Default</label>
  <utu-datepicker
    value="1982-11-21"
    ?disabled=${boolean('disabled', false)}
    @change=${action('change')}
  >
  </utu-datepicker>`)

  .add('Inline', (): TemplateResult => html`
  ${title} ${format}
  <label>Inline calendar</label>
  <utu-datepicker
    inline
    @change=${action('change')}
  >
  </utu-datepicker>`)

  .add('Modes', (): TemplateResult => html`
  ${title} ${format}
  <label>Single (default)</label>
  <utu-datepicker
    @change=${action('change')}
  >
  </utu-datepicker>
  <br>
  <label>Multi selection</label>
  <utu-datepicker
    mode="multiple"
    @change=${action('change')}
  >
  </utu-datepicker>
  <br>
  <label>Range</label>
  <utu-datepicker
    mode="range"
    @change=${action('change')}
  >
  </utu-datepicker>`)

  .add('Time', (): TemplateResult => html`
  ${title} ${format}
  <label>With time picker</label>
  <utu-datepicker
    @change=${action('change')}
    time
  >
  </utu-datepicker>`);
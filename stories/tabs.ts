import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, number, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { html, TemplateResult } from 'lit-html';

import styles from './../src/visual/index.scss';
import './../src/components/tabs';

const labels: string = 'About us, Pricing, Contacts';

addDecorator(withKnobs);

storiesOf('Tabs', module)
  .add('Playground', (): TemplateResult => html`
    <style>${styles}</style>
    <style>body { padding: 30px; } </style>

    <h3>&lt;utu-tabs&gt;</h3>
    <utu-tabs
      labels=${text('labels', labels)}
      active=${number('active', 0)}
      ?fitted=${boolean('fitted', false)}
      @change=${action('change')}
    >
      <utu-tab-content>
        <h3>Just keept it simple...</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
      </utu-tab-content>
      <utu-tab-content>
        <h3>More structured content</h3>
        <ul>
          <li>foo</li>
          <li>bar</li>
          <li>baz</li>
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
      </utu-tab-content>
      <utu-tab-content>
        <h3>An embedded map</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23881.00331392085!2d103.85246623408959!3d1.3447345834659212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869cf52abf5c4!2sSingapore!5e0!3m2!1sen!2sit!4v1562603979030!5m2!1sen!2sit" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
      </utu-tab-content>
    </utu-tabs>`);
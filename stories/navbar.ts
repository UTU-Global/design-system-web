import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { html, TemplateResult } from 'lit-html';

import styles from './../src/visual/index.scss';
import './../src/components/navbar';

addDecorator(withKnobs);

storiesOf('Navbar', module)
  .add('Playground',
    (): TemplateResult => html`
      <style>${styles}</style>
      <style>body { padding: 30px; } </style>
      <h3>&lt;utu-navbar&gt;</h3>
      <utu-navbar>
        <utu-navbar-left></utu-navbar-left>
        <utu-navbar-center>
          <ul>
            <li>Element 1</li>
            <li>Element 2</li>
            <li>Element 3</li>
          </ul>
        </utu-navbar-center>
        <utu-navbar-right></utu-navbar-right>
      </utu-navbar>
    `);
# utu-design-system

![NPM](https://img.shields.io/npm/v/@utu-global/design-system)
![Build](https://github.com/UTU-Global/design-system-web/workflows/Build%20&%20deploy/badge.svg)
![NPM](https://img.shields.io/npm/l/@utu-global/design-system)

⚠️ `BETA` version of the UTU Design System Web implementation. ⚠️

🚧 **WORK IN PROGRESS:** UI/UX, documentation and APIs are subject to change until we hit a v1.0 (*pre*)release, so be sure to check out source files and Storybook builds before integrating the components or styles in your project. 🚧

This project aims to implement the UTU Design System, developed by [3forcom](https://www.3forcom.com/) in collaboration with UTU, in a browser environment using Web Components to enable developers to quickly prototype or develop web applications/sites in a company compliant way.

### How to use
Install with NPM
```bash
$ npm i @utu-global/design-system
```

Then add in your `.js` or `.ts` files:
```javascript
// Add all of the components
import '@utu-global/design-system/components';

// Add specific components
import '@utu-global/design-system/components/button';
import '@utu-global/design-system/components/card';
import '@utu-global/design-system/components/datepicker';
import '@utu-global/design-system/components/pagination';
import '@utu-global/design-system/components/switch';
import '@utu-global/design-system/components/tabs';
import '@utu-global/design-system/components/tags';
```

An up-to-date [Storybook is available](https://utu-global.github.io/design-system-web/) to explore and test the components.

Proper docs coming soon...

### License
Released unther the [MIT license](LICENSE).
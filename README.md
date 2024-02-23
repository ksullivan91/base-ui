# BaseUI Library


BaseUI is a comprehensive React UI library built on top of `@material/base`. Utilizing React, Vite, styled-components, and `@mui/system`, it provides a seamless development experience with high-performance outcomes. The library includes a range of ready-to-use, fully customizable, and accessible components.

## Table of Contents

- [Quick Start](#quick-start)
- [Usage](#usage)
- [Components](#components)
  - [Button](#button)
  - [Alert](#alert)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)
- [Documentation](#documentation)
- [Development Scripts](#development-scripts)

## 🚀 Quick Start

Install BaseUI into your React project with NPM or Yarn:

```bash
npm install base-ui
# or
yarn add base-ui
```

# 🔨 Usage
Import BaseUI components like this:

```jsx
import { Button, Alert } from 'base-ui';

function App() {
  return (
    <>
      <Button variant="primary">Press me</Button>
      <Alert severity="info">This is an informative message!</Alert>
    </>
  );
}
```

# 🧩 Components
BaseUI provides a suite of interactive and accessible components.

## Button
```jsx
<Button variant="primary">Primary Button</Button>
```
## Alert
```jsx
<Alert severity="success" message="Operation successful!" />
```
More Components
Explore more components in our Storybook.


# 💅 Customization
Extend BaseUI components using styled-components:

```jsx
import styled from 'styled-components';
import { Button } from 'base-ui';

const MyCustomButton = styled(Button)`
  background-color: palevioletred;
  color: white;
`;

<MyCustomButton>Custom Style</MyCustomButton>
```
# 🤝 Contributing
We encourage community contributions! Please check out our contribution guidelines for more information.

# 📜 License
BaseUI is open-source and available under the MIT License.

# 📘 Documentation
View detailed documentation and live examples in our Storybook.

# 🛠️ Development Scripts
npm run dev or yarn dev - Starts the development server.
npm run build or yarn build - Compiles and bundles the library.
npm run storybook or yarn storybook - Launches the Storybook for development.
npm run build-storybook or yarn build-storybook - Builds the Storybook for production.
npm run test or yarn test - Runs the test suite with Jest.
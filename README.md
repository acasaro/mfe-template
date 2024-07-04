# Micro Front End Template

This is a template for creating micro front ends in a federated React Native application using TypeScript. The template includes basic configurations for building, bundling, and deploying the MFE, along with an example component and page.

## Getting Started

### Initialize the Project

```bash
yarn install
```

### Start Development Server

```bash
yarn start
```

### Build the Project

```bash
yarn build
```

### Deploy

```bash
yarn deploy
```

### Run Tests

```bash
yarn test
```

### Final Notes

- **MFE Setup:** When you use the custom CLI to scaffold a new MFE, it will clone this template repository, which contains all the necessary files and configurations.
- **Building and Deploying:** The `build` script in `package.json` will bundle the MFE, and the `deploy` script will deploy it to Firebase Hosting.
- **Versioning:** Semantic Release is configured to automatically version the MFE and create changelogs based on commit messages.
- **Dynamic Loading:** Ensure that the `window.MFEComponent` is set correctly in the dynamic loader script to expose the MFE component(s) for the wrapper app to load.

This TypeScript template provides a solid foundation for creating and managing MFEs in a federated React Native application, ensuring consistency and ease of integration.

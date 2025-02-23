
# My Component Library

This project is a Web Component Library that provides reusable and customizable UI components. It simplifies the process of building web applications by offering pre-built, styled components that can be easily integrated into any project.

## Installation

To install the component library, run the following command in your project directory:

```bash
npm install @winstonsolutions/my-component-library@1.1.9
```

## Usage

Once installed, you can import the components into your project as follows:

```javascript
import { Dropdown } from 'my-component-library';
```

You can now use the `Dropdown` component, along with other available components from the library, in your React, Vue, or other JavaScript frameworks.

## Docker Setup

This project is also containerized using Docker. To build and run the Docker container for the project, follow these steps:

1. Build the Docker image using the following command:

    ```bash
    docker build --build-arg NPM_TOKEN=your_npm_token -t zhao_wentao_coding_assignment12 .
    ```

    Replace `your_npm_token` with your actual npm token for authentication.

2. Once the image is built, you can run the Docker container with the following command:

    ```bash
    docker run -d -p 8083:3000 --name zhao_wentao_coding_assignment12 zhao_wentao_coding_assignment12
    ```

    This will start the container in detached mode, exposing port `8083` on your local machine, which maps to port `3000` inside the container.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit pull requests with improvements or bug fixes.

## Contact

For any questions or suggestions, feel free to contact [Winston](mailto:winston@example.com).

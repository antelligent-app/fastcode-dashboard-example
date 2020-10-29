# Dashboard Example

fastcode-dashboard is a node library for sending data to fastcode's dashboard through your edge devices.

## Installation

Use the package manager [npm or yarn] to install fastcode-dashboard package.

```bash
npm install @fastcode.cloud/fastcode-dashboard
```

## Usage

```javascript
const fastcodeDashboard = require("@fastcode.cloud/fastcode-dashboard");
fastcodeDashboard.dashboard([{
  key: "temp",
  value: value,
}]);
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

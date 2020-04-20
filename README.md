# Vue Popup

> Without any plugin, clear javascript and vue !

## Installation

```bash
yarn add -D vue-popup
```

```javascript
import VPopup from 'v-boxy'

Vue.use(VPopup)
```

## Baisc Usage

```javascript
const func = async () => {
  await this.$confirm('Are you sure to exit ?')
  // do something ...
}
```

## License

[MIT](http://opensource.org/licenses/MIT)
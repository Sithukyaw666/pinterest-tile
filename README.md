## Pintertest Grid Style

### Usage

```html
<div class="wrapper">
  ...
  <div></div>
  ...
</div>
```

```js
import gridTile from "pintertest-tile";

gridTile({
  size: "small",
  selector: "wrapper",
});
```

### Options

`size:"small"`: Each container will have 200px width.

`size:"medium"`: Each container will have 250px width.

`size:"large"`: Each container will have 300px width.

`size:"custom"`: Each container will have custom choice of yours if you provide value properties. If not, will set to the default value which is medium size.

`selector:"CLASS-NAME OF PARENT GRID CONTAINER"` : Classname of the container which you want to use the gird style.

### Custom size Example

```js
gridTile({
  size: "custom",
  value: "400px",
  selector: "wrapper",
});
```

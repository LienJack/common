### API

| 参数 | 说明 | 类型 | 默认值 | 
|------|------|------|------|------|
| type | 类型，可选值为 `primary` `warning` `danger` | `String` | `default` | 
| size | 尺寸，可选值为 `large` `small` `mini` | `String` | `normal` | 
| text | 文字 | `String` |  
| tag | HTML 标签 | `String` | `button` | 
| disabled | 是否禁用按钮 | `Boolean` | `false` | 
| loading | 是否显示为加载状态 | `Boolean` | `false` | 
| block | 是否为块级元素 | `Boolean` | `false` | 
| square | 是否为方形按钮 | `Boolean` | `false` | 
| round | 是否为圆形按钮 | `Boolean` | `false` | 
| cname | 自定义class | `String` | `` | 

### Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| click | 点击按钮且按钮状态不为加载或禁用时触发 | - |
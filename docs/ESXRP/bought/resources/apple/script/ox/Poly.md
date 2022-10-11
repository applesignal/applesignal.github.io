---
sidebar_position: 5
---

# Poly

## 簡述

用於定義不同形狀的區域並測試一個點是在區域內還是在區域外

## 配置

在腳本中使用 PolyZone
```jsx title="__resource.lua 或 fxmanifest.lua"
client_scripts {
    '@PolyZone/client.lua',
    'your_scripts_client.lua',
}
```
這將允許您在腳本中創建 PolyZone，但不會導入其他區域，例如 CircleZone、BoxZone 等。所有其他區域都是額外的，需要它們自己的顯式導入。這是一個client_scripts包含所有區域的值。注意這些導入的相對順序，因為排序是必要的！許多區域相互依賴，例如 EntityZone 繼承自 BoxZone，所有區域都繼承自 PolyZone (client.lua)
```jsx title="__resource.lua 或 fxmanifest.lua"
client_scripts {
  '@PolyZone/client.lua',
  '@PolyZone/BoxZone.lua',
  '@PolyZone/EntityZone.lua',
  '@PolyZone/CircleZone.lua',
  '@PolyZone/ComboZone.lua',
  'your_scripts_client.lua'
}
```

## 文檔

有關如何使用 PolyZone 的更多信息，請查看 [wiki](https://github.com/mkafrin/PolyZone/wiki)
---
sidebar_position: 3
---

# fleeca

## 簡述

- 警察警報
- 開始搶劫和獲得戰利品時的 ```Discord``` 日誌
- 搶劫後，警察玩家使用 /pdfleeca 命令可以清理Fleeca
- 可以和你的朋友一起搶劫
- 所有搶劫與其他玩家同步

:::tip 完成搶劫位置
1291.19, -3143.2, 4.90626
:::

:::tip 清理命令
/pdfleeca
:::

## 物品

```jsx title="ox_inventory/data/items.lua"
diamond
gold
```

## 配置

更改獎勵物品，獎勵金錢和黑錢
```jsx title="config.lua"
Config['FleecaMain'].rewardItems
```

編輯的全局冷卻時間或每個 Fleeca 冷卻時間
```jsx title="config.lua"
nextRob
```

## 影片

<iframe width="560" height="315" src="https://www.youtube.com/embed/dFoHEeoCm7s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
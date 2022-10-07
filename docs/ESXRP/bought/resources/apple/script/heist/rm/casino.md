---
sidebar_position: 2
---

# casino

## 簡述

使用鑰匙卡與您的朋友在賭場屋頂開始搶劫。下降並進入賭場。殺死守衛，去地下室。去中間門並使用另一張鑰匙卡。步行到保險庫並開始激光鑽孔後。掠奪裡面的保險庫。黃金/鑽石是偶然從上鎖的盒子裡出來的。從員工門離開賭場。將戰利品交付給買家並完成搶劫
- 警察警報
- 可以和你的朋友一起搶劫（開始搶劫時他們必須和你在一起）
- 所有搶劫與搶劫朋友同步（只是繩索和過場動畫只出現在自己的客戶端中）

:::tip 開始搶劫位置
972.299, 50.9161, 120.625
:::
:::tip 繩索位置
2570.48, -253.72, -64.660
:::
:::tip 中間搶劫位置
2538.61, -274.93, -58.722

2540.50, -265.78, -58.723

2534.91, -284.13, -58.722

2534.66, -281.70, -58.722

2511.90, -275.53, -58.722

2507.68, -278.53, -60.123

2527.67, -280.25, -70.644

2488.03, -279.22, -70.694

2490.69, -263.38, -70.694

2477.92, -270.25, -70.694
:::
:::tip 夜間視力位置
2515.47, -283.91, -70.709
:::
:::tip 保險庫位置
2504.06, -239.36, -70.713
:::
:::tip 完成搶劫位置
2549.56, -269.40, -59.722
:::

## 物品

```jsx title="ox_inventory/data/items.lua"
casinokey
drill

diamond
gold
```

## 配置

- 更改所需和獎勵項目、價格、搶劫冷卻時間、所有坐標等
- 您可以使用其他賭場地圖，但需要更改所有坐標
```jsx title="config.lua"
Config['CasinoHeist'].requiredItems
```

## 影片

<iframe width="560" height="315" src="https://www.youtube.com/embed/gPJWusy1ivM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
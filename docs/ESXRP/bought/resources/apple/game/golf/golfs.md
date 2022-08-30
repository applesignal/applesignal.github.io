---
sidebar_position: 1
---

# golf

## 簡述

- 您只能選擇自己的球，並且一次只能生成一個球 （用物品再次生成球時，會刪除已經存在的球）
- 這不是一個競爭腳本，因此沒有贏得比賽或任何其他比賽的自動計算器
- 四種球類型（白色、黃色、綠色、粉色）
- 距離計算器（與所選標誌和當前擊球距離相比）
- 排行榜系統，它記錄了玩家的最長命中。
- 具有聲音和粒子效果的不同材料力
- 地形網格（如果你想檢查斜坡或上坡）
- 很少的相機設置（用於檢查所選標誌等）
- 風向和風速會修改球的運動 （默認是禁用的）
- 還有一個標記，顯示當前的風運動和強度（標記顏色會改變風的強度，使用熱圖時，所以強風是紅色的，而風如果減少它會變得更藍）



## 配置

```jsx title="config.lua"
Config.EnableWindForce 啟用/禁用風力（使球移動不同）
Config.EnableTreeLeavesHit 啟用/禁用樹葉命中（它會停止球的運動）

Config.NeedClubWeapon 高爾夫球（我不建議修改默認值）
您可以啟用/禁用默認 gta Weapon_club 的需要，它不會卡住您的腳本，但是因為我們在用球瞄準時使用附加的球桿，所以腳本會在您交互時從手中移除武器（默認禁用）

Config.GroundSlowingMS 地面減速速度
Config.RotateSpeed 播放器旋轉速度
Config.Keybinds 鍵綁定（縮放按鈕，因為它們對更改具有反應性）
Config.Toplist 排行榜啟用/禁用和命令，以及板上顯示的玩家數量（默認 10）
```

## 使用方法

```使用物品放置球
E 準清擊破
C 拾回球

1 標誌攝像機
2 頂部攝像機
3 大地圖開關
4 網格開關
5 選定旗幟
R 重置畫面

E 打出(按住)
A 向左移動
D 向右移動
Backspace 離開
```


## 影片

<iframe width="560" height="315" src="https://www.youtube.com/embed/1pzkTaQX_6A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
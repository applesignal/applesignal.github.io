---
sidebar_position: 1
---

# 3rd

## 簡述

- 定制牌組設計，全部 52 張牌
- 自定義道具
- 統計系統，它將保存：下注的籌碼數量 (全部) ，玩過的遊戲，計算勝率等
- 關於正在玩的玩家的可打開統計數據
- 遊戲事件日誌
- 可設置的頭像圖像
- 玩家無需坐在桌旁就可以觀看比賽，如果有五個玩家在玩遊戲，這是一個社區活動，那麼整個服務器都可以觀看撲克遊戲的進展情況 (只需按 E)

## 配置
```jsx title="apple_3rd_poker/config.lua"
Config.Debug 控制台中啟用調試消息
Config.TimeLeftAfter 一名玩家下注後的剩餘時間
Config.PlayerDecideTime 玩家決定時間(看我們的牌時)
Config.HowToSpeed x秒更改為下一個
Config.ShowCardsAfterReveal 顯示玩家卡片時顯示攝像頭
```

## 配置賭桌
如果您正在為您的賭場使用自定義地圖，請靠近撲克桌並鍵入 /getpokertable ，在你的客戶端控制台中會出現結果，您需要將其添加到以下檔案位置中
```jsx title="apple_3rd_poker/config.lua"
Config.Pokers
```

## 影片

<iframe width="560" height="315" src="https://www.youtube.com/embed/3o7ieRtGnnM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
---
sidebar_position: 1
---

# Admin

## 簡述

此管理面板替代以前版本的 ESX 中使用的 es_admin 和 vMenu 並保持在 0.01ms 比起 vMenu 功能更多更實用

## 功能

- 踢除玩家
- 臨時禁令
- 永久禁令
- 離線禁令
- 解除禁令
- 給現金
- 給銀行錢
- 打開玩家庫存
- 給物品
- 給武器
- 給車輛
- 傳送航點
- 帶上玩家
- 轉到玩家
- 旁觀者
- 凍結玩家
- 殺死玩家
- 復活玩家
- NoClip
- Godmode
- 公告
- 工作管理
- 權限管理
- 生成車輛
- 更改玩家工作
- 改變天氣
- 更改時間
- 停電模式
- 懲罰系統

## 配置
```jsx title="config.lua"
Config.Perms 配置每個管理組的權限
Config.DynamicWeather 是否定時轉換天氣
Config.NewWeatherTimer 轉換天氣間隔
Config.StartWeather 起始天氣
Config.Vehicles 管理面板允許叫出的車
```
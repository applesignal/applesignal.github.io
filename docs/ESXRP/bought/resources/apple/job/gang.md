---
sidebar_position: 1
---

# gang

## 簡述

為幫派系統增加了軍械庫、車輛車庫以及幫派成員搜索、給人們戴上手銬等等的能力

:::tip 指令
/gang 刷新幫派數據

/gangs 開啟管理員菜單
:::

## 功能

- 管理員創建幫派
- 管理員限制幫派成員
- 管理員為每個幫派添加過期時間
- 管理員可以為每個幫派選擇老闆行動、軍械庫、更衣室、汽車、直升機和船隻的位置
- 管理員可以為每個幫派調整防彈背心的數量
- 管理員可以為每個幫派創建對幫派操作菜單的不同訪問權限
- 幫派經理創建不同等級的能力
- 幫派工資和銀行賬戶制度
- 能夠為幫派經理調整每個級別的衣服和薪水
- 每個幫派的軍械庫、車庫、扣押室和更衣室
- 能夠搜索玩家、手銬、拖入幫派動作菜單
- 能夠打開鎖定車輛的門
- 幫派成員可以在地圖上看到彼此的位置

## 開發

| Export | 描述 | 用法 | 例子 |
| --- | --- | --- | --- |
| isOwnGangVehicle | 檢查是否與車輛相關的玩家幫派 | 用於鎖定或解鎖車門 | local vehicle = GetVehiclePedIsIn(PlayerPedId())exports['apple_gang']:isOwnGangVehicle(vehicle)|
| getGangID | 獲取玩家幫派 ID | 任何你想的地點都可以 | exports['apple_gang']:getGangID()|
| getGangGrade | 獲得玩家幫派等級 (boss為0) | 任何你想的地點都可以 | exports['apple_gang']:getGangGrade()|
| getGangName | 獲取玩家幫派名稱 | 在 HUD 或任何你想要的地方 | exports['apple_gang']:getGangName()|
| getGangGradeName | 獲取玩家幫派等級名稱 | 在 HUD 或任何你想要的地方 | exports['apple_gang']:getGangGradeName()|
---
sidebar_position: 1
---

# door

## 簡述

門管理資源，nui_doorlock 的替代品，資源使用更少，功能更多

門存儲在數據庫中以便於使用，並允許輕鬆清除或分享數據
:::tip 指令
/doorlock 
:::

## 用法

使用 `/doorlock` 打開 UI 並輸入新門的設置。
確認後，您可以使用 [qtarget](./qtarget) 選擇要使用的實體 (或多個實體)

您可以使用`編輯`作為門鎖的參數來添加 [qtarget](./qtarget) 選項以修改或刪除現有的門

## API

獲取門數據
```lua
local mrpd_locker_rooms = exports.ox_doorlock:getDoor(1)
local mrpd_locker_rooms = exports.ox_doorlock:getDoorFromName('mrpd locker rooms')
```
從服務器鎖定一扇門
```lua
TriggerEvent('ox_doorlock:setState', mrpd_locker_rooms.id, 1)
```
當門被切換時監聽事件
```lua
AddEventHandler('ox_doorlock:stateChanged', function(source, doorId, state, usedItem)
    if usedItem == 'trainticket' then
        local xPlayer = ESX.GetPlayerFromId(source)
        xPlayer.removeInventoryItem(usedItem, 1)
    end
end)
```

## 關聯插件

[oxmysql](./oxmysql)
	
mysql-async 不再受支持
- 不支持錯誤捕獲 (pcall)
- 人們使用不支持參數作為數組的舊版本
- 它沒有得到維護，並且存在永遠無法解決的問題

[ox_lib](../../lib/ox)

[qtarget](./qtarget)
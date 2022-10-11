---
sidebar_position: 2
---

# fuel

## 簡述

用於 [ox_inventory](./inv) 的簡單燃料資源

## 用法

### 獲取車輛油位

對於某些人來說，這是一項極其複雜的任務，他們經常要求 `API` 來完成這項工作

您可以使用本機函數GetVehicleFuelLevel，也可以使用狀態包
```lua
local fuel = GetVehicleFuelLevel(entity)
-- or Entity(entity).state.fuel
```
### 設置車輛油位
```lua
Entity(entity).state.fuel = fuelAmount
```

## 關聯插件

[ox_lib](../../lib/ox)
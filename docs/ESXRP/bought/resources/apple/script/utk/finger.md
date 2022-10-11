---
sidebar_position: 1
---

# finger

## 簡述

指紋黑客遊戲

它與 GTA:Online Diamond Casino Heist 非常相似，具有所有設置和主要任務

## 用法

```lua
TriggerEvent("utk_fingerprint:Start", levels, lifes, time, callback)

-- levels is how many levels you want. Max is 4, Min is 1
-- lifes is how many life player has, Max is 6, Min is 1
-- time is how much time player has in minutes, Max is 9, min is 1 (I highly recommend to set it between 3-1)
-- callback is the callback function to catch the outcome
```
例子
```lua
TriggerEvent("utk_fingerprint:Start", 4, 6, 2, function(outcome, reason)
    if outcome == true then -- reason will be nil if outcome is true
        print("Succeed")
    elseif outcome == false then
        print("Failed. Reason: "..reason)
    end
end)
```

## 關聯插件

[hack](./hack)
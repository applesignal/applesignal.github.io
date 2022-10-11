---
sidebar_position: 1
---

# xsound

## 簡述

改進的 FiveM 音頻庫

可以使用 API 交互聲音

只要確保您從交互聲音中獲取所有聲音並將它們移動到 xsound/html/sounds

## 客戶端功能

### 播放聲音

- PlayUrl(name, URL, volume, loop, options)
	將播放來自 URL 的聲音（隨處可見）
	參數循環和選項是可選的，不必使用

- PlayUrlPos(name, url, volume, Vector3 vec, loop, options)
	將在 x,y,z 位置參數循環處播放來自 url 的聲音，
	選項是可選的，不必使用
	
選項列表
- 播放開始
- 播放結束
- 加載中
- 播放暫停
- 播放簡歷

### 用聲音操縱

- Position(name, Vector3 vec)
將更新聲音的位置

- Distance(name, newDistance)
將設置新的播放距離

- Destroy(name)
會破壞聲音

- Pause(name)
會暫停聲音

- Resume(name)
將恢復聲音

- setVolume(name,volume)音量從 0.0 到 1.0
將為音量設置一個新值。應該用於非 3D 聲音

- setVolumeMax(name,volume)音量從 0.0 到 1.0
會將新值設置為最大音量。應僅用於 3D 聲音

- setTimeStamp(name, time)將設置一個新的時間戳。

- setSoundURL(name, url)將設置新的 URL 聲音（將在更改時播放）

- repeatSound(name)將再次播放保存的聲音

- destroyOnFinish(name, bool)true = 結束時銷毀 / false = 結束時不銷毀

- setSoundLoop(name, bool)將設置一個新值循環

- setSoundDynamic(name, bool) 將設置聲音是否為 3D / 3D = true

### 對聲音的影響

- fadeOut(name, time)
- fadeIn(name, time, volume)

### 事件

- onPlayStart(name, function)
此事件將在聲音
加載並開始在遊戲中播放後觸發。

- onPlayEnd(name, function)
此事件將在聲音結束後觸發。

- onLoading(name, function)
此事件將在聲音開始加載時觸發。

- onPlayPause(name, function)
每當您暫停聲音時，都會觸發此事件。

- onPlayResume(name, function)
每當您恢復聲音時，都會觸發此事件。

### 獲取有關聲音的信息

- soundExists(name)
如果聲音存在，將返回真/假

- isPaused(name)
如果歌曲暫停，將返回真/假

- isPlaying(name)
如果正在播放歌曲，將返回 true/false

- isLooped(name)
如果聲音被循環，將返回真/假

- getDistance(name)
將以整數返回距離

- getVolume(name)
將返回當前的音樂音量。

- getPosition(name)
將返回vector3

- isDynamic(name)
如果聲音是 3D 或 2D 將返回（3D = true，2D = false）

- getTimeStamp(name)
返回當前時間戳

- getMaxDuration(name)
返迴聲音的最大持續時間

- getLink(name)
將返回 url 鏈接

- isPlayerInStreamerMode()
如果播放器啟用了流媒體模式，將返回。

- getAllAudioInfo()
將返回所有聲音的數組

- isPlayerCloseToAnySound()
如果播放器靠近任何聲音，將返回 true。

- getInfo(name)
將返回一個包含聲音信息的數組...

```
{
   volume,          -- value from 0.0 to 1.0
   url ,            -- sound url
   id,              -- id 
   position,        -- will be nil if position isnt set.
   distance,        -- distance in integer
   playing,         -- true/false
   paused,          -- true/false
   loop,            -- true/false
   isDynamic,       -- true/false
   timeStamp,       -- returns current timestamp
   maxDuration,     -- returns max duration of sound
   destroyOnFinish, -- default value is true means after its finish it will destroy it self
}
```

## 伺服器端功能

### 播放聲音
- PlayUrl(source, name, URL, volume, loop)
將播放來自 URL 的聲音（隨處可見）

- PlayUrlPos(source, name, url, volume, Vector3 vec, loop)
將在 x,y,z 位置從 url 播放聲音

### 用聲音操縱

-1 也適用於源代碼

- Position(source, name, Vector3 vec)
將更新聲音的位置

- Distance(source, name, newDistance)
將設置新的播放距離

- Destroy(source, name)
會破壞聲音

- Pause(source, name)
會暫停聲音

- Resume(source, name)
將恢復聲音

- setVolume(source, name,volume)音量從 0.0 到 1.0
將為音量設置一個新值。應該用於非 3D 聲音

- setVolumeMax(source, name,volume)音量從 0.0 到 1.0
會將新值設置為最大音量。應僅用於 3D 聲音

- setTimeStamp(source ,name, time)將設置一個新的時間戳。
TIMESTAMP 僅在一秒鐘內！

展示它如何在遊戲中流式傳輸聲音

https://www.youtube.com/watch?v=zyZmF5bRSA4

https://www.youtube.com/watch?v=19Q2GVYElSE

展示使用 API 所做的事情

https://www.youtube.com/watch?v=OOf6PZFpfkI

https://www.youtube.com/watch?v=JRTVga_FwGw
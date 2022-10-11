---
sidebar_position: 2
---

# pma

## 簡述

圍繞使用 FiveM/RedM 內部 Mumble 服務器而設計的語音系統

一個 tokovoip 替代品

- 收音機(目前每個玩家一個收音機頻道)
- 無線電麥克風點擊次數
- 來電
- 說話時的面部動畫
- 電話揚聲器模式切換
- 聽到附近的電話
- 用戶界面
- 語音聊天和麥克風禁用警告消息
- 3D Proximity 基礎音頻
- 語音通道的網格系統

## 注意

這個腳本與其他語音系統不兼容(duh)，這意味著如果你有 vMenus 語音聊天，你將不得不禁用它

請不要覆蓋 `NetworkSetTalkerProximity`, `MumbleSetTalkerProximity`, `MumbleSetAudioInputDistance`, `MumbleSetAudioOutputDistance` 或 `NetworkSetVoiceActive` 在您的任何其他腳本中，因為在某些情況下它會破壞 pma-voice

## 配置

注意:僅使用其中一個音頻選項(不要同時啟用 3d 音頻和原生音頻)，還建議始終使用 voice_useSendingRangeOnly
如果要更改值，則只需要添加 `convar`

這裡的所有配置都是使用setr [voice_configOption] [boolean]

 | 控制變量 | 默認|描述 | 參數 |
 |----------|-----|-----|------|
 | voice_useNativeAudio | false |這不適用於 RedM使用遊戲原生音頻，將添加 3d 聲音、迴聲、混響等。子混音需要 |布爾值 |
 | voice_use2dAudio | false | 使用 2d 音頻，無論他們在哪裡，都會產生相同音量的聲音，直到他們離開附近 | 布爾值 |
 | voice_use3dAudio | false | 使用 3d 音頻 | 布爾值 |
 | voice_useSendingRangeOnly | false | 只允許您聽到您聽到/發送範圍內的人，防止人們連接到您的喃喃自語服務器和拖釣 | 布爾值 |

## 配置

請注意:任何鍵綁定更改只會影響新玩家，如果您想更改鍵綁定，請轉到 Key Bindings -> FiveM -> 在“pma-voice”下查找鍵綁定

所有配置都是通過 ConVars 完成的，以簡化流程

整數的使用就像布爾值一樣，0 為否，1 為是

這裡的所有配置都是使用 `setr [voice_configOption] [int]` 或 `setr [voice_configOption] "[string]"`

注意:如果 convar 默認為 1 (true)，除非您想禁用它，否則您無需再次設置它

### 常規語音設置

 | 控制變量 | 默認 | 描述 | 參數 |
 |----------|------|------|------|
 | voice_enableUi | 1 | 啟用內置用戶界面 | 整數 |
 | voice_enableProximityCycle | 1 | 啟用 F11 接近鍵，如果禁用的玩家卡在第一個接近鍵上 | 整數 |
 | voice_defaultCycle | F11 | 循環玩家接近度的默認鍵。您可以在 Cfx 文檔中找到有效密鑰的列表 | 字串 |
 | voice_defaultRadioVolume | 30 | 設置收音機的默認音量 (必須在 1 到 100 之間)注意:只有新加入的玩家才會有新的值，已經加入的玩家不會。 | 浮點型 |
 | voice_defaultCallVolume | 60 | 設置呼叫的默認音量 (必須在 1 到 100 之間)注意:只有新加入的玩家才會有新的值，已經加入的玩家不會。 | 浮點型 |
 | voice_defaultVoiceMode | 2 | 玩家加入服務器時的默認鄰近語音值 (語音模式；1:耳語，2:普通，3:喊叫) | 整數 |
 
### 通話和廣播
 | 控制變量 | 默認 | 描述 | 參數 |
 |----------|------|------|------|
 | voice_enableRadios | 1 | 啟用無線電子模塊 | 整數 |
 | voice_enableCalls | 1 | 啟用呼叫子模塊 | 整數 |
 | voice_enableSubmix | 1 | 啟用子混音，將收音機/呼叫風格的子混音添加到他們的聲音注意:子混音需要原生音頻 | 整數 |
 | voice_enableRadioAnim | 0 | 在收音機上講話時啟用(抓肩麥克風)動畫。 | 整數 |
 | voice_defaultRadio | LMENU | 使用收音機的默認鍵。您可以在 FiveM 文檔中找到有效密鑰的列表 | 字串 |
 
### 同步

 | 控制變量 | 默認 | 描述 | 參數 |
 |----------|------|------|------|
 | 語音刷新率 | 200 | UI/Proximity 的刷新頻率 | 整數 |
### 外部服務器和雜項

 | 控制變量 | 默認 | 描述 | 參數 |
 |----------|------|------|------|
 | voice_allowSetIntent | 1 | 是否允許玩家設置他們的音頻意圖(你可以在這裡查看更多) | 整數 |
 | voice_externalAddress | 沒有任何 | 用於連接到 mumble 服務器的外部地址 | 字串 |
 | voice_externalPort | 0 | 要使用的外部端口 | 整數 |
 | voice_debugMode | 0 | 1 用於基本日誌，4 用於詳細日誌 | 整數 |
 | voice_externalDisallowJoin | 0 | 禁止玩家加入服務器，僅當您使用 FXServer 作為外部 Mumble 服務器時才應使用 | 整數 |
 | voice_hideEndpoints | 1 | 在日誌中隱藏含糊地址注意:您應該只關心為外部服務器隱藏此地址 | 整數 |

### 管理
pma-voice 帶有一個內置的 /muteply (tgtPly) (duration) 命令，為了讓您的員工使用它，您必須讓他們成為管理員！

例子: `add_ace group.superadmin command.muteply allow`

這只會允許超級管理員組將玩家靜音

### 出口

#### 客戶端

##### 設定
 | 出口 | 描述 | 參數 |
 |------|------|------|
 | [setVoiceProperty](https://github.com/AvarianKnight/pma-voice/blob/main/docs/client-setters/setVoiceProperty.md) | 設置配置選項 | 字符串，任何
 | [setRadioChannel](https://github.com/AvarianKnight/pma-voice/blob/main/docs/client-setters/setRadioChannel.md) | 設置廣播頻道 | 整數
 | [setCallChannel](https://github.com/AvarianKnight/pma-voice/blob/main/docs/client-setters/setCallChannel.md) | 設置通話通道 | 整數
 | [setRadioVolume](https://github.com/AvarianKnight/pma-voice/blob/main/docs/client-setters/setRadioVolume.md) | 設置播放器的收音機音量 | 整數
 | [setCallVolume](https://github.com/AvarianKnight/pma-voice/blob/main/docs/client-setters/setCallVolume.md) | 設置播放器的通話音量 | 整數
 | [addPlayerToRadio](https://github.com/AvarianKnight/pma-voice/blob/main/docs/client-setters/setRadioChannel.md) | 設置廣播頻道 | 整數
 | [addPlayerToCall](https://github.com/AvarianKnight/pma-voice/blob/main/docs/client-setters/setCallChannel.md) | 設置通話通道 | 整數
 | [removePlayerFromRadio](https://github.com/AvarianKnight/pma-voice/blob/main/docs/client-setters/removePlayerFromRadio.md) | 從收音機中刪除播放器 | 
 | [removePlayerFromCall](https://github.com/AvarianKnight/pma-voice/blob/main/docs/client-setters/removePlayerFromCall.md) | 從通話中移除玩家 | 
 
##### 切換

 | 出口 | 描述 | 參數 |
 |------|------|------|
 | 切換靜音播放器 | 切換為本地客戶端靜音的選定播放器 | 整數 |

受 mumble-voip / toko-voip 支持

 | 出口 | 描述 | 參數 |
 |------|------|------|
 | [SetMumbleProperty](https://github.com/AvarianKnight/pma-voice/blob/main/docs/client-setters/setVoiceProperty.md) | 設置配置選項 | 字符串,任何 |
 | [SetTokoProperty](https://github.com/AvarianKnight/pma-voice/blob/main/docs/client-setters/setVoiceProperty.md) | 設置配置選項 | 字符串,任何 |
 | [SetRadioChannel](https://github.com/AvarianKnight/pma-voice/blob/main/docs/client-setters/setRadioChannel.md) | 設置廣播頻道 | 整數 |
 | [SetCallChannel](https://github.com/AvarianKnight/pma-voice/blob/main/docs/client-setters/setCallChannel.md) | 設置通話通道 | 整數 |

##### 檢查

大多數二傳手是通過玩家狀態完成的，而一小部分

 | State Bag | 描述 | 返回類型 |
 |-----------|------|----------|
 | [proximity](https://github.com/AvarianKnight/pma-voice/blob/main/docs/state-getters/stateBagGetters.md) | 返回包含模式索引、距離和模式名稱的表 | table |
 | [radioChannel](https://github.com/AvarianKnight/pma-voice/blob/main/docs/state-getters/stateBagGetters.md) | 返回玩家當前的廣播頻道，或 0 表示無 | 整數 |
 | [callChannel](https://github.com/AvarianKnight/pma-voice/blob/main/docs/state-getters/stateBagGetters.md) | 返回玩家當前通話頻道，或 0 表示無 | 整數 |

##### 事件
這些是為第三方資源整合而設計的事件。這些僅發送給當前客戶端

 | 事件 | 描述 | 事件參數 |
 |------|------|----------|
 | [pma-voice:settingsCallback](https://github.com/AvarianKnight/pma-voice/blob/main/docs/client-getters/events.md) | 發出時，它將返回當前 pma-voice 設置 | cb(語音設置) |
 | [pma-voice:radioActive](https://github.com/AvarianKnight/pma-voice/blob/main/docs/client-getters/events.md) | 當無線電被激活/停用時觸發 | 布爾值 |
 | [pma-voice:setTalkingMode](https://github.com/AvarianKnight/pma-voice/blob/main/docs/client-getters/events.md) | 使用語音模式 ID 在接近模式更改時觸發 | 整數 |

#### 服務器

##### 設定
 | 出口 | 描述 | 參數 | 
 |------|------|------|
 | [setPlayerRadio](https://github.com/AvarianKnight/pma-voice/blob/main/docs/server-setters/setPlayerRadio.md) | 設置播放器廣播頻道 | 整數，整數 | 
 | [setPlayerCall](https://github.com/AvarianKnight/pma-voice/blob/main/docs/server-setters/setPlayerCall.md) | 設置玩家通話通道 | 整數，整數 | 
 | [addChannelCheck](https://github.com/AvarianKnight/pma-voice/blob/main/docs/server-setters/addChannelCheck.md) | 向播放器廣播頻道添加頻道檢查 | 整數，函數 | 
 
##### 吸氣劑

State Bags

您可以使用以下方式訪問狀態 `Player(source).state['state bag here']`

 | State Bags | 描述 | 返回類型 |
 |------------|------|----------|
 | [proximity](https://github.com/AvarianKnight/pma-voice/blob/main/docs/state-getters/stateBagGetters.md) | 返回包含模式索引、距離和模式名稱的表 | 桌子 | 
 | [radioChannel](https://github.com/AvarianKnight/pma-voice/blob/main/docs/state-getters/stateBagGetters.md) | 返回玩家當前的廣播頻道，或 0 表示無 | 整數 | 
 | [callChannel](https://github.com/AvarianKnight/pma-voice/blob/main/docs/state-getters/stateBagGetters.md) | 返回玩家當前通話頻道，或 0 表示無 | 整數 | 
 | [voiceIntent](https://github.com/AvarianKnight/pma-voice/blob/main/docs/state-getters/stateBagGetters.md) | 返回玩家當前的語音意圖，'語音' 或 '音樂' | 字串 | 

##### exports
 | 出口 | 描述 | 參數 | 
 |------|------|------|
 | [getPlayersInRadioChannel](https://github.com/AvarianKnight/pma-voice/blob/main/docs/server-getters/getPlayersInRadioChannel.md) | 獲取廣播頻道中的當前播放器 | 整數 | 
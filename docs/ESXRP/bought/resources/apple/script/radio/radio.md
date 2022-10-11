---
sidebar_position: 1
---

# radio

## 簡述

用於給/帶玩家收音機的出口是 `exports["rp-radio"]:SetRadio(true/false)` 或事件 `Radio.Set`

## 配置

### 檢查

| exports | 描述 | 返回類型 |
|------|------|----------|
| IsRadioOpen | 檢查玩家是否拿著收音機 | 布爾 |
| IsRadioOn | 檢查收音機是否打開 | 布爾 |
| IsRadioAvailable | 檢查播放器是否有收音機 | 布爾 |
| IsRadioEnabled | 檢查無線電是否啟用 | 布爾 |
| CanRadioBeUsed | 檢查是否可以使用收音機 | 布爾 |

### 頻道

| exports | 描述 | 參數 |
|------|------|------|
| SetRadioEnabled | 設置是否啟用無線電 | 布爾 |
| SetRadio | 設置播放器是否有收音機 | 布爾 |
| SetAllowRadioWhenClosed | 關閉時允許播放器廣播 | 布爾 |
| AddPrivateFrequency | 將頻率設為私有 | 整數 |
| RemovePrivateFrequency | 公開私人頻率 | 整數 |
| GivePlayerAccessToFrequency | 授予玩家使用私人頻率的權限 | 整數 |
| RemovePlayerAccessToFrequency | 移除玩家使用私人頻率的權限 | 整數 |
| GivePlayerAccessToFrequencies | 允許玩家使用多個私人頻率 | 整數,整數,... |
| RemovePlayerAccessToFrequencies | 移除玩家使用多個私人頻率的權限 | 整數,整數,... |

### 命令

| 命令 | 描述 |
|------|------|
| /radio | 打開/關閉收音機 |
| /frequency | 選擇無線電頻率 |

### 事件

| 事件 | 描述 | 參數 |
|------|------|------|
| Radio.Toggle | 打開/關閉收音機 | 沒有任何 |
| Radio.Set | 設置播放器是否有收音機 | 布爾 |
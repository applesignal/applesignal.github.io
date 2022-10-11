---
sidebar_position: 3
---

# reader

## 簡述

適用於 HTML 的 FiveM 實時遊戲視圖

## 用法

在您的 html 文件中將此代碼放在您的 body 標記中，並確保它在您的腳本之前加載:

```js
<script type="module" src="nui://utk_render/script.js"></script>
```

## 處理截圖上傳

要處理屏幕截圖上傳請求，您可以使用以下 php 代碼：https ://github.com/melihozkara/fivem-php-img-uploader

### 功能

請求截圖

截取屏幕截圖並將其上傳到定義的 url

- 異步方法
	```js
	async function takeScreenshot() {
    let resp = await MainRender.requestScreenshot("www.exampleupload.com", "files[]");
    console.log("resp", resp);
	}
	```
- 普通方法
	```js
	MainRender.requestScreenshot("www.exampleupload.com", "files[]").then((resp) => {
		console.log("resp", resp);
	})
	```
	
將 GameView 渲染到畫布元素

可用於很多東西：視頻通話、視頻錄製、直播......

- 開始畫布渲染
	```js
	const canvas = document.getElementById("videocall-canvas");

	MainRender.renderToTarget(canvas);
	```
- 停止畫布渲染
	```js
	MainRender.stop();
	```
	
## 基本示例
- html
	```html
	<body>
		<button id="start">Start Video Call</button>
		<button id="stop" disabled>Stop Video Call</button>
		<canvas id="videocall-canvas" style="display: none; position: absolute; width: 250px; height: 575px; right: 5px; bottom: 5px; border: solid 5px red;"></canvas>

		<script type="module" src="nui://utk_render/script.js"></script>
		<script src="index.js"></script>
	</body>
	```
- index.js
	```js
	const startButton = document.getElementById("start");
	const stopButton = document.getElementById("stop");
	const canvas = document.getElementById("videocall-canvas");

	startButton.addEventListener("click", () => {
		canvas.style.display = "block"
		MainRender.renderToTarget(canvas);
		stopButton.disabled = true;
		startButton.disabled = false;
	});

	stopButton.addEventListener("click", () => {
		MainRender.stop();
		stopButton.disabled = false;
		startButton.disabled = true;
	});
	```
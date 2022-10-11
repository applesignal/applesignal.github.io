---
sidebar_position: 4
---

# oxmysql

## 簡述

Oxmysql 是未維護的 mysql-async/ghmattimysql 資源的替代品，使用node-mysql2而不是mysqljs

使用 oxmysql 的首選方法是通過 lib/MySQL，可以通過添加 `@oxmysql/lib/MySQL.lua` 到資源清單來加載。除了提供更新的導出包裝器和功能之外，該資源應該 100% 向後兼容 mysql-async 功能

- 支持 URI 連接字符串和分號分隔值
- 利用 mysql2/promises 連接池的異步查詢
- Javascript async_retval 導出支持跨資源和運行時的承諾
- 支持佔位符值 (命名和未命名) 以提高查詢速度並提高針對 SQL 注入的安全性
- 改進了佔位符和參數不匹配時的錯誤檢查
- Lua 在lib/MySQL.lua文件中承諾在等待響應時提高性能
- 支持 mysql-async 語法，同時提供更新 (更準確) 的名稱

## 用法

```jsx title="Lua"
MySQL.query('SELECT * from users WHERE identifier = ?', {identifier}, function(result)
    -- callback response
    -- same as MySQL.Async.fetchAll
end)
CreateThread(function()
    local result = MySQL.query.await('SELECT * from users WHERE identifier = ?', {identifier})
    -- await a promise to resolve
    -- same as MySQL.Sync.fetchAll
end)
```
```jsx title="Js"
exports.oxmysql.query('SELECT * from users WHERE identifier = ?', [identifier], (result) => {
  // callback response
})(async () => {
  const result = await exports.oxmysql.query_async('SELECT * from users WHERE identifier = ?', [identifier]);
  // await a promise to resolve
})();
exports.oxmysql.query_async('SELECT * from users WHERE identifier = ?', [identifier]).then((result) => {
  // utilise .then to resolve a promise like a callback
});
```

## 佔位符

這允許正確準備和轉義查詢；以下幾行是等效的。
```
"SELECT group FROM users WHERE identifier = ?", {identifier}
"SELECT group FROM users WHERE identifier = :identifier", {identifier = identifier}
"SELECT group FROM users WHERE identifier = @identifier", {['@identifier'] = identifier}
```
命名佔位符已被棄用，應盡可能避免使用
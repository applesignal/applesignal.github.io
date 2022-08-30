---
sidebar_position: 3
---

# 售後服務

## MySQL 還是 MariaDB?

FiveM 的大多數資源都設計為與 MySQL 5.7 一起使用，並且在使用 MySQL 8 時可能會遇到兼容性問題，即

- 更多保留關鍵字，如'stored' 和 'group'
- Longtext / JSON 字段不支持默認值

[強烈建議使用MariaDB](https://mariadb.org/) 以提高兼容性和性能 (在所有版本的MySQL中)

## XAMPP

XAMPP 不是數據庫，不應僅用於啟動 MySQL/MariaDB 服務。請不要使用 XAMPP
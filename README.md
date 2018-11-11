# README


* Database creation

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|text|null: false|
|password|text|null: false|

### Association
- has_many :groups
- has_many :messages



## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|
|user_id|string|null: false, foreign_key: true|

### Association
- has_many :users
- has_many :messages



## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user



## messageテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|body|text|
|image|text|

### Association
- belongs_to :group
- belongs_to :user





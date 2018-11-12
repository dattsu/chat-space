# README


* Database creation

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, add index|
|email|text|null: false|
|password|text|null: false|

### Association
- has_many :members
- has_many :groups, through: :members
- has_many :messages



## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|user_id|references|null: false, foreign_key: true|

### Association
- has_many :members
- has_many :users, through: :members
- has_many :messages




## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user



## messageテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|
|body|text|
|image|text|

### Association
- belongs_to :group
- belongs_to :user





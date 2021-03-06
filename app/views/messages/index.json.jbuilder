json.array! @new_messages do |message|
  json.id        message.id
  json.user_name message.user.name
  json.date      message.created_at.strftime('%Y/%m/%d %H:%M:%S')
  json.body      message.body
  json.image     message.image.url
end

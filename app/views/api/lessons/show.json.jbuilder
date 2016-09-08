json.extract! @lesson, :id, :user_id, :title, :subject, :grade,
:lesson_date, :image_url, :thumbnail_url, :user, :objectives,
:key_points


json.sections @lesson.sections do |section|
  json.name section.name
  json.description section.description
  json.created_at section.created_at
  json.cfus section.cfus
  json.misconceptions section.misconceptions
end

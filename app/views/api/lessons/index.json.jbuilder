json.array! (@lessons) do |lesson|
  json.partial! 'lesson', lesson: lesson
end

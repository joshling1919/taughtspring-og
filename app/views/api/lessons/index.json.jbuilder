json.array! (@lessons) do |lesson|
  json.partial! 'api/lessons/indexlesson', lesson: lesson
end

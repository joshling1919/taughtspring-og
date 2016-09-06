json.array! (@lessons) do |lesson|
  json.partial! 'indexlesson', lesson: lesson
end

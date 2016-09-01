class CreateLessons < ActiveRecord::Migration
  def change
    create_table :lessons do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.string :subject
      t.integer :grade
      t.date :lesson_date
      t.timestamps null: false
    end
    add_index :lessons, :user_id
    add_index :lessons, :title
  end
end

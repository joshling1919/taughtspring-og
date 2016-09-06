class CreateMisconceptions < ActiveRecord::Migration
  def change
    create_table :misconceptions do |t|
      t.string  :misconception
      t.integer :lesson_id, null: false
      t.timestamps null: false
    end
    add_index :misconceptions, :lesson_id
  end
end

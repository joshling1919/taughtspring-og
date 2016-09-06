class CreateCfus < ActiveRecord::Migration
  def change
    create_table :cfus do |t|
      t.string  :question
      t.integer :lesson_id, null: false
      t.timestamps null: false
    end
    add_index :cfus, :lesson_id
  end
end

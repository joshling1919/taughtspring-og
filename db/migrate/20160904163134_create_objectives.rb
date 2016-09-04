class CreateObjectives < ActiveRecord::Migration
  def change
    create_table :objectives do |t|
      t.integer :lesson_id, null: false
      t.string :description
      t.timestamps null: false
    end
    add_index :objectives, :lesson_id
  end
end

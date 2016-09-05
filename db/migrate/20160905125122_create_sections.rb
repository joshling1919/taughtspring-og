class CreateSections < ActiveRecord::Migration
  def change
    create_table :sections do |t|
      t.string :name, null: false
      t.integer :minutes, null: false
      t.text :description
      t.integer :lesson_id, null: false
      t.timestamps null: false
    end
    add_index :sections, :lesson_id
  end
end

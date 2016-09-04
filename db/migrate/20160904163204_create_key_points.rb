class CreateKeyPoints < ActiveRecord::Migration
  def change
    create_table :key_points do |t|
      t.integer :lesson_id, null: false
      t.string :point
      t.timestamps null: false
    end
    add_index :key_points, :lesson_id
  end
end

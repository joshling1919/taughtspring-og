class FixColumnsForMisconceptionAndCfu < ActiveRecord::Migration
  def change
    remove_column :misconceptions, :lesson_id, :integer
    remove_column :cfus, :lesson_id, :integer
    add_column :misconceptions, :section_id, :integer
    add_index :misconceptions, :section_id
    add_column :cfus, :section_id, :integer
    add_index :cfus, :section_id 
  end
end

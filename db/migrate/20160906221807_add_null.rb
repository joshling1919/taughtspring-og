class AddNull < ActiveRecord::Migration
  def change
    change_column_null :cfus, :section_id, false
    change_column_null :misconceptions, :section_id, false
  end
end

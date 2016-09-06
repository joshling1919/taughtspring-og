class RemoveNull < ActiveRecord::Migration
  def change
    change_column_null :sections, :name, :minutes, true
  end
end

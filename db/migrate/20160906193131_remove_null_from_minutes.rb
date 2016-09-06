class RemoveNullFromMinutes < ActiveRecord::Migration
  def change
    change_column_null :sections, :minutes, true
  end
end

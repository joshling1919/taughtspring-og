class AddColumnToCfu < ActiveRecord::Migration
  def change
    add_column :cfus, :answer, :string
  end
end

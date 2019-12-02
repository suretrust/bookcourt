class AddNullFalseToUsers < ActiveRecord::Migration[6.0]
  def change
    change_column_null :users, :email, false
  end
end

class CreateDeputados < ActiveRecord::Migration[6.0]
  def change
    create_table :deputados do |t|
      t.string :nome
      t.string :cpf
      t.string :partido
      t.integer :id_cadastro      

      t.timestamps
    end
  end
end

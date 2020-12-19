class Deputado < ApplicationRecord
    validates :nome, presence: true
    validates :cpf, presence: true
    validates :id_cadastro, presence: true
end

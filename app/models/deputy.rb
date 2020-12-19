class Deputy < ApplicationRecord
  validates :full_name, presence: true
  validates :cpf, presence: true, uniqueness: true
  validates :registered_id, presence: true

  has_many :invoices, class_name: 'Invoice'
end

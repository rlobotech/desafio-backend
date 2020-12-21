FactoryBot.define do
  factory :deputy do
    full_name { 'some_full_name' }
    cpf { 'some_cpf' }
    political_party { 'some_political_party' }
    registered_id { 1 }
  end
end

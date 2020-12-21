FactoryBot.define do
  factory :invoice do
    description { 'some_description' }
    provider { 'some_provider' }
    provider_cnpj { 'some_provider_cnpj' }
    issue_date { 'some_issue_date' }
    net_value { 100 }
    document_url { 'some_document_url' }
  end
end

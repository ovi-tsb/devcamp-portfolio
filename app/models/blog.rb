class Blog < ApplicationRecord
	extend FriendlyId
	friendly_id :title, :use => :history
end

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

3.times do |topic|
	Topic.create!(
		title: "Topic #{topic}"
		)
end

puts "3 Topics created"

10.times do |blog|
	Blog.create!(
		title: "My Blog Post #{blog}",
		body: "There are many variations of passages 
		of Lorem Ipsum available, but the majority 
		have suffered alteration in some form, by 
		injected humour, or randomised words which 
		don't look even slightly believable.",
		topic_id: Topic.last.id
		)
end

puts "10 Blogs created"

5.times do |skill|
	Skill.create!(
		title: "Rails #{skill}",
		percent_utilized: 15
		)
end

puts "5 Skills created"

8.times do |portfolio_item|
	Portfolio.create!(
		title: "Portfolip title #{portfolio_item}",
		subtitle: "Ruby on Rails",
		body: "There are many variations of passages 
		of Lorem Ipsum available, but the majority 
		have suffered alteration in some form, by 
		injected humour, or randomised words which 
		don't look even slightly believable.",
		main_image: "https://via.placeholder.com/600x400.png?%20C/O%20https://placeholder.com/",
		thumb_image: "https://via.placeholder.com/350x150.png?%20C/O%20https://placeholder.com/"
		)
end

1.times do |portfolio_item|
	Portfolio.create!(
		title: "Portfolip title #{portfolio_item}",
		subtitle: "Angular",
		body: "There are many variations of passages 
		of Lorem Ipsum available, but the majority 
		have suffered alteration in some form, by 
		injected humour, or randomised words which 
		don't look even slightly believable.",
		main_image: "https://via.placeholder.com/600x400.png?%20C/O%20https://placeholder.com/",
		thumb_image: "https://via.placeholder.com/350x150.png?%20C/O%20https://placeholder.com/"
		)
end

puts "9 Portfolio created"

3.times do |technology|
	Portfolio.last.technologies.create!(
		name: "Technology #{technology}"
		)

end

puts "3 technologies created"






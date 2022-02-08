User.create!(
	email: "1@yahoo.com",
	password: "123456",
	password_confirmation: "123456",
	name: "Admin User",
	roles: "site_admin"
)

puts "1 Admin User created"

User.create!(
	email: "2@yahoo.com",
	password: "123456",
	password_confirmation: "123456",
	name: "Regular User"
)

puts "1 Regular User created"

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
		thumb_image: "https://via.placeholder.com/350x200.png?%20C/O%20https://placeholder.com/"
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
		thumb_image: "https://via.placeholder.com/350x200.png?%20C/O%20https://placeholder.com/"
		)
end

puts "9 Portfolio created"

3.times do |technology|
	Portfolio.last.technologies.create!(
		name: "Technology #{technology}"
		)

end

puts "3 technologies created"






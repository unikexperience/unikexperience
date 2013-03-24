# This Rakefile will help managing your Jekyll site a bit easier.
# Bilaw.al made this. Oh, yes he did.

require 'rubygems'
require 'daemons'

# Thanks to: http://stackoverflow.com/questions/1302022/best-way-to-generate-slugs-human-readable-ids-in-rails
class String
	def to_slug
		#strip the string
		ret = self.strip.downcase

		#blow away apostrophes
		ret.gsub! /['`]/,""

		# @ --> at, and & --> and
		ret.gsub! /\s*@\s*/, " at "
		ret.gsub! /\s*&\s*/, " and "

		#replace all non alphanumeric, underscore or periods with underscore
		ret.gsub! /\s*[^A-Za-z0-9\.\-]\s*/, '_'  

		#convert double underscores to single
		ret.gsub! /_+/,"-"

		#strip off leading/trailing underscore
		ret.gsub! /\A[_\.]+|[_\.]+\z/,""

		ret
	end
end

# Generate content.
namespace "new" do
	task :post do
		y = Time.now.year
		m = Time.now.strftime("%m")
		d = Time.now.strftime("%d")

		print "Enter name of post: "
		post_name = STDIN.gets.chomp
		post_name = post_name || "Untitled"

		filename = "_posts/#{y}-#{m}-#{d}-#{post_name.to_slug}.markdown"

		unless File.exists?(filename) then
			f = File.new(filename, "w")
			f.puts("---")
			f.puts("layout: post")
			f.puts("title: #{post_name}")
			f.puts("categories: ['uncategorized']")
			f.puts("excerpt: ...")
			f.puts("---")
			f.close

			print "#{post_name} has been generated at '#{filename}'. Go wild!"
			puts
		else
			puts "Error: Post at '#{filename}' exists."
		end
	end

	task :page do
		print "Enter name of page: "
		page_name = STDIN.gets.chomp
		page_name = page_name || "Untitled"

		filename = "#{page_name.to_slug}.html"

		unless File.exists?(filename) then
			f = File.new(filename, "w")
			f.puts("---")
			f.puts("layout: layout")
			f.puts("title: #{page_name}")
			f.puts("---")
			f.puts("")
			f.puts("<h1>#{page_name}</h1>")
			f.close

			print "#{page_name} has been generated at '#{filename}'. Go wild!"
			puts
		else
			puts "Error: Page at '#{filename}' exists."
		end
	end
end

# About us.
desc "About the developer of Jekyll Rakefile"
task :about do
	puts "  Jekyll Rakefile built by Bilawal Hameed (bilaw.al)"
	puts "  GitHub: http://github.com/bih/bilaw.al"
	puts
end

# Install Jekyll (a.k.a. the shiz)
desc "Installs the necessary files to get started."
task :install do
	`mv .sample.gitignore .gitignore`
	puts "Hooray, you're all good to go. See _config.yml and `rake development` to get started."
	puts
end

# Open the URL if the development server is running
desc "Opens the development server URL in default browser"
task :open do
	if File.directory?('_development')
		`open http://localhost:4000`
	else
		puts "Error: You need to `rake development` to run this command."
	end
end

# Start the development server
desc "Starts the development server"
task :development do
	if File.directory?('_development') then
		puts "Error: Development server already running."
		exit
	end

	puts '>>>>> Please hold while we start your Jekyll server for development... <<<<<'

	task = Daemons.call do
		sleep(2)
		`open http://localhost:4000`
	end

	trap("SIGINT") {
		puts ''
		puts '>>>>> Cancelling development server... <<<<<'
		`rm -rf _development`
		task.stop
	}

	`jekyll . _development --server 4000 --url 'http://localhost:4000'`
end

# Generate the final site, ready for us to go!
desc "Generates the production site"
task :production do
	`jekyll . _production --no-auto`
	puts "Yay! We generated your final site in the _production folder."
	puts
end

# An unused command, ready for you to hack on.
desc "Empty command that can be used for automating publishing."
task :publish do
	# Production site is stored in _production/
	`` # Insert command to publish
	put 'This command is not configured. See Rakefile and configure ;)'
end
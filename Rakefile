# rake blog["Post Title"]
# rake work["Project Title"]
# rake deploy

# Standard library
require 'rake'
require 'yaml'
require 'fileutils'

# Load the configuration file
config = YAML.load_file("_config.yml")

# Set "rake post" as default task
task :default => :deploy


# Deploy _site to GitHub Pages (via /deploy)
# http://winstonyw.com/2013/02/24/jekyll_haml_sass_and_github_pages/
desc "Deploy"
task :deploy do
	puts "## Deploying to Github Pages..."

	deploy_dir = "deploy"
	public_dir = "_site"

	(Dir["#{deploy_dir}/*"]).each { |f| rm_rf(f) }

	puts "## Copying #{public_dir} to #{deploy_dir}"
	cp_r "#{public_dir}/.", deploy_dir

	cd "#{deploy_dir}" do
		system "git add ."
		system "git add -u"

		puts "## Commiting: Site updated at #{Time.now.utc}"
		message = "Site updated at #{Time.now.utc}"
		system "git commit -m \"#{message}\""

		puts "## Pushing generated #{deploy_dir} website"
		system "git push origin master --force"

		puts "## Deploy Complete!"
	end
end

# rake blog["Post Title"]
desc "Create a post in _posts/Blog"
task :blog, :title do |t, args|
  title     = args[:title]
  template  = config["blog"]["template"]
  extension = config["blog"]["extension"]
  editor    = config["editor"]

  if title.nil? or title.empty?
    raise "Please add a title to your post."
  end

  date     = Time.now.strftime("%Y-%m-%d")
  filename = "#{date}-#{title.gsub(/(\'|\!|\?|\:|\s\z)/,"").gsub(/\s/,"-").downcase}.#{extension}"
  content  = File.read(template)

  if File.exists?("_posts/Blog/#{filename}")
    raise "The post already exists."
  else
    parsed_content = "#{content.sub("title:", "title: \"#{title}\"")}"
    File.write("_posts/Blog/#{filename}", parsed_content)
    puts "#{filename} was created."

    if editor && !editor.nil?
      sleep 2
      system "#{editor} _posts/Blog/#{filename}"
    end
  end
end

# rake work["Project Title"]
desc "Create a post in _posts/Work"
task :work, :title do |t, args|
  title     = args[:title]
  template  = config["work"]["template"]
  extension = config["work"]["extension"]
  editor    = config["editor"]

  if title.nil? or title.empty?
    raise "Please add a title to your post."
  end

  date     = Time.now.strftime("%Y-%m-%d")
  filename = "#{date}-#{title.gsub(/(\'|\!|\?|\:|\s\z)/,"").gsub(/\s/,"-").downcase}.#{extension}"
  content  = File.read(template)

  if File.exists?("_posts/Work/#{filename}")
    raise "The post already exists."
  else
    parsed_content = "#{content.sub("title:", "title: \"#{title}\"")}"
    File.write("_posts/Work/#{filename}", parsed_content)
    puts "#{filename} was created."

    if editor && !editor.nil?
      sleep 2
      system "#{editor} _posts/Work/#{filename}"
    end
  end
end

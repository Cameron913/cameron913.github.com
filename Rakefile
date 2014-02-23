# rake blog["Post Title"]
# rake work["Project Title"]
# rake deploy
# rake watch

# Standard library
require 'rake'
require 'yaml'
require 'fileutils'
# others
require 'guard'

# Load the configuration file
config = YAML.load_file("_config.yml")

# Set "deploy" as default task
task :default => :deploy

# rake blog["Post Title"]
desc "Create a post in _posts/Blog"
task :blog, :title do |t, args|
  title     = args[:title]
  template  = config["blog"]["template"]
  extension = config["blog"]["extension"]

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

    sleep 2
    system "open _posts/Blog/#{filename}"
  end
end

# rake work["Project Title"]
desc "Create a post in _posts/Work"
task :work, :title do |t, args|
  title     = args[:title]
  template  = config["work"]["template"]
  extension = config["work"]["extension"]

  if title.nil? or title.empty?
    raise "Please add a title to your post."
  end

  date     = Time.now.strftime("%Y-%m-%d")
  filename = "#{date}-#{title.gsub(/(\'|\!|\?|\:|\s\z)/,"").gsub(/\s/,"-").downcase}.#{extension}"
  content  = File.read(template)

  # define image directory
  dirname  = "#{date}-#{title.gsub(/(\'|\!|\?|\:|\s\z)/,"").gsub(/\s/,"-").downcase}"

  if File.exists?("_posts/Work/#{filename}")
    raise "The post already exists."
  else
    parsed_content = "#{content.sub("title:", "title: \"#{title}\"")}"
    File.write("_posts/Work/#{filename}", parsed_content)
    puts "#{filename} was created."

    # make image directory
    Dir::mkdir("assets/img/work/#{dirname}") unless File.exists?("assets/img/work/#{dirname}")

    sleep 2
    system "open _posts/Work/#{filename}"
    system "open assets/img/work/#{dirname}"
  end
end

# Deploy _site to GitHub Pages (via /deploy)
# http://winstonyw.com/2013/02/24/jekyll_haml_sass_and_github_pages/
desc "Deploy"
task :deploy do
  puts "## Deploying to Github Pages..."

  deploy_dir = "_deploy"
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

# rake watch
desc "Starts Guard and runs Jekyll server with watch option"
task :watch do
  puts "## Running Guard and Jekyll..."

  run_guard = Process.spawn("guard --no-bundler-warning")
  run_jekyll = Process.spawn("jekyll serve -w")

  trap("INT") {
    [run_guard, run_jekyll].each { |pid| Process.kill(9, pid) rescue Errno::ESRCH }
    exit 0
  }
  [run_guard, run_jekyll].each { |pid| Process.wait(pid) }
end


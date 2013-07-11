# Deploy _site to GitHub Pages
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

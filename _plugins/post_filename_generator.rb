## allow Jekyll to access page url
## http://stackoverflow.com/questions/13243469/how-can-a-jekyll-page-access-its-filename
module Jekyll

  class PagePathGenerator < Generator
    safe true
    ## See post.dir and post.base for directory information.
    def generate(site)
      site.posts.each do |post|
        post.data['path'] = post.name
      end

    end
  end

end

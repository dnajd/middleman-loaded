# -------------------------------------------------------------------
# EXTENSIONS
# -------------------------------------------------------------------

# custom
require 'lib/extensions/custom_urls.rb'
activate :custom_urls

# gems
activate :livereload
activate :directory_indexes
activate :automatic_image_sizes
activate :syntax # code highlighting

# github userpages deploy
#activate :deploy do |deploy|
  #deploy.method = :git
  #deploy.build_before = true
  #deploy.branch   = "master"
  #deploy.remote   = "git@github.com:username/username.github.io.git"
#end

# github project pages deploy
#activate :deploy do |deploy|
#  deploy.method = :git
#  deploy.build_before = true # default: false
#end

# markdown settings
set :markdown

# directories
set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascripts'
set :images_dir, 'assets/images'
set :fonts_dir, 'assets/fonts'
set :data_dir, 'source/data'
set :layouts_dir,  '_layouts'
set :helpers_dir, 'lib/helpers'
#set :partials_dir, '_partials'

# -------------------------------------------------------------------
# MISC
# -------------------------------------------------------------------

# _vendor support for Sprockets
after_configuration do
  sprockets.append_path File.join "#{root}", 'source/assets/_vendor'
end

# Ignore files/paths
ignore '.idea/*'

# -------------------------------------------------------------------
# Build-specific config
# -------------------------------------------------------------------

configure :build do
  activate :minify_css
  activate :minify_javascript
  # activate :relative_assets
  # activate :cache_buster
  activate :asset_hash

  # Favicon generator
  # https://github.com/follmann/middleman-favicon-maker
=begin
  activate :favicon_maker do |f|
    f.template_dir  = File.join(root, 'source/assets/img')
    f.output_dir    = File.join(root, 'build')
    f.icons = {
      "favicon.ico" => [
        { icon: "favicon.ico", size: "32x32,16x16" },
      ]
    }
  end
=end
  # Alt image path
  # set :http_prefix, "/Content/images/"
end

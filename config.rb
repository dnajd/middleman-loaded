# -------------------------------------------------------------------
# EXTENSIONS
# -------------------------------------------------------------------

require 'lib/extensions/custom_urls.rb'
activate :custom_urls

activate :livereload
activate :directory_indexes
activate :automatic_image_sizes
activate :syntax # code highlighting

set :css_dir, 'assets/scss'
set :js_dir, 'assets/js'
set :images_dir, 'assets/img'
set :fonts_dir, 'assets/fonts'

set :data_dir, 'source/data'
#set :partials_dir, '_partials'
set :layouts_dir,  '_layouts'
set :helpers_dir, 'lib/helpers'

# gh-pages relative path
activate :relative_assets
#set :relative_links, true

# Markdown settings
set :markdown

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

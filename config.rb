# Page options, layouts, aliases and proxies
# -------------------------------------------------------------------

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

activate :livereload
activate :directory_indexes
activate :automatic_image_sizes

set :css_dir, 'assets/scss'
set :js_dir, 'assets/js'
set :images_dir, 'assets/img'
set :data_dir, 'source/_templates/data'
set :partials_dir, '_templates/partials'
set :layouts_dir,  '_templates/layouts'
# set :fonts_dir
# set :helpers_dir

# Markdown settings
set :markdown, parse_block_html: true

# Bower support for Sprockets
after_configuration do
  @bower_config = JSON.parse(IO.read("#{root}/.bowerrc"))
  sprockets.append_path File.join "#{root}", @bower_config["directory"]
end

# Custom helpers
# Methods defined in the helpers block are available in templates
helpers do

  # Sample
  # def some_helper
  #   "Helping"
  # end

end # / helpers do

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
  activate :favicon_maker do |f|
    f.template_dir  = File.join(root, 'source/assets/img')
    f.output_dir    = File.join(root, 'build')
    f.icons = {
      "favicon.ico" => [
        { icon: "favicon.ico", size: "32x32,16x16" },
      ]
    }
  end

  # Alt image path
  # set :http_prefix, "/Content/images/"
end

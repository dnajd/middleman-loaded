require 'middleman-gh-pages'

# warning: this will overwrite changes to bitters
task :refresh_bitters do

  current_dir = File.dirname(__FILE__)
  bitters_dest = File.join(current_dir, '/source/assets/scss')

  sh 'cd ' + bitters_dest + ' && bundle exec bitters install '

end

# User pages are hosted at username.github.io
# You'll need to develop in a branch
# And publish to master using this task
task :deploy_gh_user do
	`bundle exec rake publish REMOTE_NAME=master`
end

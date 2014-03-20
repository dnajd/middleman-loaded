require 'json'

task :install_gems_packages do

  puts 'Installing Ruby Gems'
  sh    "bundle install --path=vendor"

  puts 'Installing Bower packages'
  sh    'bower install'

end

# warning: this will overwrite changes to bitters
task :refresh_bitters do

  current_dir = File.dirname(__FILE__)
  bitters_dest = File.join(current_dir, '/source/assets/scss')

  sh 'cd ' + bitters_dest + ' && bundle exec bitters install '
end

require 'json'

task :install_gems_packages do

  puts 'Installing Ruby Gems'
  sh    "bundle install --path=vendor"

  puts 'Installing Bower packages'
  sh    'bower install'

end

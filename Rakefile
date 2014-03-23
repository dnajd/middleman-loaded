
# warning: this will overwrite changes to bitters
task :refresh_bitters do

  current_dir = File.dirname(__FILE__)
  bitters_dest = File.join(current_dir, '/source/assets/scss')

  sh 'cd ' + bitters_dest + ' && bundle exec bitters install '
end


desc "Init gh-pages & deployment strategy"
task :init_gh_pages do

	#https://help.github.com/articles/creating-project-pages-manually
	#git checkout --orphan gh-pages

	deploy_dir = '_deploy'

	# make directory
	Dir.mkdir(deploy_dir) unless Dir.exists?(deploy_dir)

	# copy repo in
	sh "cp -rf .git #{deploy_dir}/.git"

	# reset
	sh 'cd ' + deploy_dir + ' && git reset --hard HEAD && git clean -f -d'

	# create gh-pages, add & commit
	sh 'cd ' + deploy_dir + ' && git checkout --orphan gh-pages && git add . && git commit -am "first commit"'

	# remove everything
	sh 'cd ' + deploy_dir + ' && git rm -rf . && git add . && git commit -am "clean house"'

	# push
	sh 'cd ' + deploy_dir + ' && git push origin gh-pages'

end

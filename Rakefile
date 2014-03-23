
# warning: this will overwrite changes to bitters
task :refresh_bitters do

  current_dir = File.dirname(__FILE__)
  bitters_dest = File.join(current_dir, '/source/assets/scss')

  sh 'cd ' + bitters_dest + ' && bundle exec bitters install '
end


###########################
# gh-pages

deploy_dir = '_deploy'

desc "Init gh-pages & deployment strategy"
task :init_gh_pages do

	#https://help.github.com/articles/creating-project-pages-manually
	#git checkout --orphan gh-pages

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


desc "Checkout existing gh-pages"
task :checkout_gh_pages do

	# make directory
	Dir.mkdir(deploy_dir) unless Dir.exists?(deploy_dir)

	# copy repo in
	sh "cp -rf .git #{deploy_dir}/.git"

	# reset
	sh 'cd ' + deploy_dir + ' && git reset --hard HEAD'

	# create gh-pages, add & commit
	sh 'cd ' + deploy_dir + ' && git checkout -b gh-pages origin/gh-pages'

end


desc "Deploy gh-pages"
task :deploy_gh_pages do

	# build middleman
	sh 'bundle exec middleman build'

	# remove everything
	sh 'cd ' + deploy_dir + ' && git rm -rf .'  unless Dir[File.join(deploy_dir, '/*')].empty?

	# copy build into _deploy
	sh 'cd build && cp -R * ../' + deploy_dir

	# deploy
	sh 'cd ' + deploy_dir + ' && git add . && git commit -am "new build" && git push'

end

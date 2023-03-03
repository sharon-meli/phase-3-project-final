require_relative "config/environment"
require 'sinatra/activerecord/rake'

desc 'Pry console'
task :console do
    Pry.start
end

desc "Launch Server"
task :server do
    exec "bundle exec rerun -b 'rackup config.ru'"
end

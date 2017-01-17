FROM ruby:2.3.1

# Cache Bundle Install
ADD Gemfile /docs/Gemfile
ADD Gemfile.lock /docs/Gemfile.lock
WORKDIR /docs
RUN bundle install

# Add Repository
ADD . /docs/

# Build 
RUN bundle exec jekyll build

EXPOSE 4000
CMD bundle exec jekyll serve

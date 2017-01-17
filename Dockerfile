FROM ruby:2.3.1
ENV LANG C.UTF-8

# Add Node.js
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash
RUN apt-get update && apt-get install nodejs

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

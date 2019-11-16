FROM ruby:2.5
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client
RUN mkdir /nick
WORKDIR /nick
COPY Gemfile /nick/Gemfile
COPY Gemfile.lock /nick/Gemfile.lock
RUN bundle install
COPY . /nick
EXPOSE 3000

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]

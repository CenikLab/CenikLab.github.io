FROM jekyll/jekyll

COPY --chown=jekyll:jekyll Gemfile .
COPY --chown=jekyll:jekyll Gemfile.lock .

#RUN bundle install --quiet --clean
EXPOSE 4000
CMD ["jekyll", "build", "--watch"]
CMD ["jekyll", "serve", "--port", "4000"]

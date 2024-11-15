FROM python AS server
COPY ./src /app
WORKDIR /app
RUN pip install  \
    flask  \
    flask-cors \
    requests
EXPOSE 5000
ENTRYPOINT ["flask","run", "--host=0.0.0.0"]
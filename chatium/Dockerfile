FROM ubuntu:latest

COPY . /app

# activate virtual environment 

# install dependencies 
RUN apt update && \ 
    apt -y install python3 && \
    apt-get -y install python3-pip  && \
    apt-get -y install libpq-dev gcc  && \
    pip install psycopg2 && \
    pip install -r app/requirements.txt 

# change directory
WORKDIR /app

EXPOSE 8000
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"] 
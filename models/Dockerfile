FROM tensorflow/serving:latest

WORKDIR /

COPY models.config /models/models.config
COPY ds_salaries_model /models/ds_salaries_model

CMD ["--model_config_file=/models/models.config"]

#docker run -it -p 8500:8500 -p 8501:8501 --name ds_salaries --model_name=model
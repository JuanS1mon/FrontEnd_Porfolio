FROM python:3.12-alpine

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Ejecutar pruebas unitarias
RUN python -m unittest discover -s . -p "test_*.py"

CMD ["python", "reflex_config.py"]
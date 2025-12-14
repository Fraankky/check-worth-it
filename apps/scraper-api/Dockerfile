FROM python:3.11-slim                    
# Pakai Python 3.11 sebagai base

WORKDIR /app                             
# Set working directory

# Install dependencies sistem (gcc untuk compile, postgresql-client, cron)
RUN apt-get update && apt-get install -y \
    gcc \
    postgresql-client \
    cron \
    && rm -rf /var/lib/apt/lists/*

# Copy file requirements
COPY apps/scraper-api/requirements.txt ./apps/scraper-api/

# Install Python packages
RUN pip install --no-cache-dir -r apps/scraper-api/requirements.txt

# Copy kode aplikasi
COPY apps/scraper-api ./apps/scraper-api
COPY packages ./packages

# Setup crontab
COPY apps/scraper-api/crontab /etc/cron.d/scrape-cron
RUN chmod 0644 /etc/cron.d/scrape-cron && crontab /etc/cron.d/scrape-cron

EXPOSE 8000                              
# Expose port 8000

# Jalankan aplikasi FastAPI
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
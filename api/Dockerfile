# Use a slim Python base image for a smaller final image size
FROM python:3.11-slim-bookworm

# Set environment variables to prevent Python from writing bytecode files
# and to ensure output is unbuffered
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set the working directory inside the container
WORKDIR /api

# Copy the requirements file and install dependencies first to leverage Docker's build cache
COPY requirements.txt .
RUN --mount=type=cache,target=/root/.cache/pip \
    pip install -r requirements.txt

# Copy the entire application code into the container
COPY . .

# Expose the port Uvicorn will listen on
EXPOSE 8000

# Command to run the Uvicorn server
# Replace 'main:app' with the correct module and application object if different
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
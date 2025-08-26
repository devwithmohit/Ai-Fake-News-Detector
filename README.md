# 📰 AI News App

AI News App is a full-stack project that fetches, analyzes, and serves news articles with AI-powered insights.This tool helps users critically evaluate news content through AI-powered analysis. 
It consists of:

- **Frontend** → React (TypeScript + TailwindCSS)
- **Backend** → Flask (Python) with AI model (ONNX/PyTorch (for ML model))
- **Deployment Ready** → Docker, Docker Compose, and Kubernetes (Minikube or Cloud)

---

## ✨ Features

-  Fetches latest news articles from APIs
-  Uses Model to analyze and generate insights
- Provides summaries, trends, and categorization
-  Fully containerized with Docker
- REST API Well-structured endpoints for news analysis
- Evaluates the emotional tone of news articles
-  Kubernetes Ready Production-grade deployment configurations
-  Can be deployed on Render, Fly.io, Vercel (frontend), or custom cloud infra

---

## 🛠️ Tech Stack

- **Frontend** → React, TypeScript, TailwindCSS  
- **Backend** → Python Flask, ONNX Runtime, REST API  
- **Database** → (Optional: MongoDB / PostgreSQL depending on needs)  
- **Containerization** → Docker, Docker Compose  
- **Orchestration** → Kubernetes (tested on Minikube, Docker Desktop K8s)  

---

## ⚙️ Local Development

### 1. Clone Repo
```bash
git clone https://github.com/yourusername/ai-news-app.git
cd ai-news-app
```

### 2. Backend Setup
```bash
cd backend

# Create and activate virtual environment
python -m venv venv
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the serve
python app.py
```

Runs on: `http://localhost:5000`

### 3. Frontend Setup
```bash
cd clients
npm install
npm run dev
```

Runs on: `http://localhost:5173`

---

## 🐳 Docker Setup

### Build and Run Backend
```bash
cd backend
docker build -t ai-news-backend:01 .
docker run -d -p 5000:5000 --name backend ai-news-backend:01
```

### Build and Run Frontend
```bash
cd frontend
docker build -t ai-news-frontend:01 .
docker run -p 3000:3000 --name frontend ai-news-frontend:01 
```

### Using Docker Compose
```bash
docker-compose up -d
```

This will start both frontend and backend containers and set up the necessary networking between them.

---

## ☸️ Kubernetes (Minikube / Cloud)

### 1. Start Minikube
```bash
minikube start --docker=driver
```

### 2. Apply Manifests
```bash
kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/frontend-deployment.yaml
kubectl apply -f k8s/services.yaml
```

### 3. Check Deployments Status
```bash
kubectl get pods
kubectl get services
```
### 3. Access Services
```bash
minikube service frontend-service
```

Frontend will automatically talk to backend via service DNS.

---

## 🚀 Deployment Options

- **Vercel** → Perfect for frontend only  
- **Render / Fly.io** → Good for backend (Flask + Docker)  
- **Kubernetes Cluster (EKS/GKE/AKS)** → Production-grade scalability  
- **Docker Compose** → Simple local development setup  

---

## 🧩 Future Improvements

- Implement authentication (JWT/OAuth)  
-User accounts and saved analysis history
-Mobile application version
- Add caching layer (Redis)  
- Scale with Horizontal Pod Autoscaler (K8s)  
- Add CI/CD pipelines (GitHub Actions + ArgoCD)  

---

## 📜 License
MIT License – free to use, modify, and distribute.

© 2025 fake News Detector

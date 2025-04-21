# 📝 Dockerized ToDo List App

A simple, minimal ToDo List web application built with **Node.js** and **Express**, styled with CSS, and deployed using **Docker**. Easily manage your tasks with a clean UI and smooth animations.

## 🚀 Live Demo
Hosted on Render using Dockerized deployment.
👉 [Live Render](https://todo-app-latest-xarj.onrender.com)

---

## 📁 Project Structure
![Screenshot 2025-04-21 140434](https://github.com/user-attachments/assets/6b8431ed-4bdb-4642-a89f-b5eb5920c021)



## ✨ Features

- Add and remove tasks
- Mark tasks as done
- Smooth entry and exit animations
- Fully containerized using Docker
- Responsive and clean UI

---

## ⚙️ Tech Stack

- **Frontend:** HTML, CSS, Vanilla JavaScript
- **Backend:** Node.js, Express
- **Deployment:** Docker, Render

---
## 🛠️ Build the Docker Image
![Screenshot 2025-04-21 140159](https://github.com/user-attachments/assets/bae6686a-565d-4907-b484-b2e9ec321307)
## 🧾 Basic Usage
docker ps
---
![Screenshot 2025-04-21 140251](https://github.com/user-attachments/assets/d885a28c-36f7-4126-abd6-33f6287482e9)
----
### 🚀Docker Image 
![Screenshot 2025-04-21 140340](https://github.com/user-attachments/assets/b7937d33-bfbe-4020-b361-edeac1e2b4f4)
-----
🐳 🚀 Running Locally with Docker
## ![Screenshot 2025-04-21 140811](https://github.com/user-attachments/assets/62cd8661-dc4d-4991-8c43-c09147c6d882)
----
## Docker Hub

![Screenshot 2025-04-21 140935](https://github.com/user-attachments/assets/3c151e83-9753-47b5-b676-4b8b97739f95)

----


## Deploy 🚀 

![Screenshot 2025-04-21 141030](https://github.com/user-attachments/assets/1afcdc52-008d-4d06-98c3-d45587adf3c6)

-------------

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/madhankumar-2131/Docker-todo-list.git
cd Docker-todo-list

# 2. Build the Docker image
docker build -t todo-app .

# 3. Run the container (local port 3000 mapped to container's 5000)
docker run -p 3000:5000 todo-app

# 4. Open in browser
http://localhost:3000

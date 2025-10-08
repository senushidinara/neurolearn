# 🧠 NeuroLearn Gaia
*Empowering Ethical Learning through Emotional AI & Global Impact Simulation*

<p align="center">
<img src="https://placehold.co/800x200/22c55e/ffffff?text=NeuroLearn+Gaia+--+Ethical+Learning" alt="NeuroLearn Gaia Banner">
</p>

---

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)  
[![GitHub Issues](https://img.shields.io/github/issues/your-username/NeuroLearn-Gaia)](https://github.com/your-username/NeuroLearn-Gaia/issues)  
[![GitHub Stars](https://img.shields.io/github/stars/your-username/NeuroLearn-Gaia?style=social)](https://github.com/your-username/NeuroLearn-Gaia/stargazers)  

---

<details open>
<summary>✨ Project Overview & Vision</summary>

NeuroLearn Gaia is a cutting-edge **educational platform** tackling **ethical decision-making in the age of advanced technology**.  

- **Gaia Globe**: Simulated 3D environment to manage global scenarios (Smart Cities, AgriTech, Sustainability)  
- **Emotional AI (E-AI)**: Monitors user emotional states (**Focus, Distress, Joy, Neutral**) in real-time  
- **Goal**: Train users to make **sustainable ethical decisions** while maintaining **cognitive and emotional focus**

</details>

---

<details>
<summary>💡 Core Concepts & Features</summary>

### 🌍 Emotional Learning Score (ELS)
Tracks ethical and emotional performance:

| Metric | Description |
|--------|-------------|
| Quality of Decision | Did the student choose the long-term sustainable solution? |
| Emotional State | Was the student in a "Focus" state during the decision? |

✅ High ELS = ethical + emotionally regulated decisions  

### 🌐 Interactive Gaia Globe
- 3D simulation using **Three.js**  
- Shows **Global Impact Score** & **Critical Zones**  
- Clicking zones triggers **Scenario Cards**  

### 🤖 Emotional AI Pipeline
- Simulated with Python in `ml_simulator/`  
- API-ready for **TensorFlow / PyTorch** integration  
- Real-time emotion inference guides decision scoring  

</details>

---

<details>
<summary>⚙️ Architecture</summary>

### Frontend (`src/`)
React + Tailwind CSS | Modular & scalable

| Component/Page | Description |
|----------------|------------|
| Navbar.jsx | Sticky header with Gaia Coins |
| EmotionMeter.jsx | Shows live mood & ELS |
| GaiaGlobe.jsx | 3D globe with interactive zones |
| ScenarioCard.jsx | Modal for ethical decision-making |
| Home.jsx | Landing page & demo launcher |
| Dashboard.jsx | Globe, Impact Score, Emotion Meter |
| Profile.jsx | Historical performance & badges |
| Modules.jsx | Learning module catalog |

**Custom Hooks:**  
- `useEmotion.js` → simulate emotion detection  
- `useGlobeData.js` → manage globe stress data  
- `useScenario.js` → scenario logic & state  

**Services:**  
- `EmotionAI.js` → TensorFlow Lite simulation  
- `ModuleAPI.js` → CRUD module & score API  

---

### Backend (`backend/`)
Node.js / Express server

| File | Purpose |
|------|---------|
| server.js | Express app & middleware setup |
| routes/emotionRoutes.js | `/api/emotion/train` & `/api/emotion/status` |
| models/User.js | User profiles, ELS & Gaia Coins schema |
| utils/dataProcessing.js | ELS & backend calculation utilities |

</details>

---

<details>
<summary>🛠️ Setup & Installation</summary>

### Prerequisites
- Node.js (LTS)
- npm or yarn
- Python 3.x (optional for ML simulation)

### Clone Repository
```bash
git clone https://github.com/your-username/NeuroLearn-Gaia.git
cd NeuroLearn-Gaia# 🧠 NeuroLearn Gaia
*Empowering Ethical Learning through Emotional AI & Global Impact Simulation*

<p align="center">
<img src="https://placehold.co/800x200/22c55e/ffffff?text=NeuroLearn+Gaia+--+Ethical+Learning" alt="NeuroLearn Gaia Banner">
</p>

---

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)  
[![GitHub Issues](https://img.shields.io/github/issues/your-username/NeuroLearn-Gaia)](https://github.com/your-username/NeuroLearn-Gaia/issues)  
[![GitHub Stars](https://img.shields.io/github/stars/your-username/NeuroLearn-Gaia?style=social)](https://github.com/your-username/NeuroLearn-Gaia/stargazers)  

---

<details open>
<summary>✨ Project Overview & Vision</summary>

NeuroLearn Gaia is a cutting-edge **educational platform** tackling **ethical decision-making in the age of advanced technology**.  

- **Gaia Globe**: Simulated 3D environment to manage global scenarios (Smart Cities, AgriTech, Sustainability)  
- **Emotional AI (E-AI)**: Monitors user emotional states (**Focus, Distress, Joy, Neutral**) in real-time  
- **Goal**: Train users to make **sustainable ethical decisions** while maintaining **cognitive and emotional focus**

</details>

---

<details>
<summary>💡 Core Concepts & Features</summary>

### 🌍 Emotional Learning Score (ELS)
Tracks ethical and emotional performance:

| Metric | Description |
|--------|-------------|
| Quality of Decision | Did the student choose the long-term sustainable solution? |
| Emotional State | Was the student in a "Focus" state during the decision? |

✅ High ELS = ethical + emotionally regulated decisions  

### 🌐 Interactive Gaia Globe
- 3D simulation using **Three.js**  
- Shows **Global Impact Score** & **Critical Zones**  
- Clicking zones triggers **Scenario Cards**  

### 🤖 Emotional AI Pipeline
- Simulated with Python in `ml_simulator/`  
- API-ready for **TensorFlow / PyTorch** integration  
- Real-time emotion inference guides decision scoring  

</details>

---

<details>
<summary>⚙️ Architecture</summary>

### Frontend (`src/`)
React + Tailwind CSS | Modular & scalable

| Component/Page | Description |
|----------------|------------|
| Navbar.jsx | Sticky header with Gaia Coins |
| EmotionMeter.jsx | Shows live mood & ELS |
| GaiaGlobe.jsx | 3D globe with interactive zones |
| ScenarioCard.jsx | Modal for ethical decision-making |
| Home.jsx | Landing page & demo launcher |
| Dashboard.jsx | Globe, Impact Score, Emotion Meter |
| Profile.jsx | Historical performance & badges |
| Modules.jsx | Learning module catalog |

**Custom Hooks:**  
- `useEmotion.js` → simulate emotion detection  
- `useGlobeData.js` → manage globe stress data  
- `useScenario.js` → scenario logic & state  

**Services:**  
- `EmotionAI.js` → TensorFlow Lite simulation  
- `ModuleAPI.js` → CRUD module & score API  

---

### Backend (`backend/`)
Node.js / Express server

| File | Purpose |
|------|---------|
| server.js | Express app & middleware setup |
| routes/emotionRoutes.js | `/api/emotion/train` & `/api/emotion/status` |
| models/User.js | User profiles, ELS & Gaia Coins schema |
| utils/dataProcessing.js | ELS & backend calculation utilities |

</details>

---

<details>
<summary>🛠️ Setup & Installation</summary>

### Prerequisites
- Node.js (LTS)
- npm or yarn
- Python 3.x (optional for ML simulation)

### Clone Repository
```bash
git clone https://github.com/your-username/NeuroLearn-Gaia.git
cd NeuroLearn-Gaia

# 🧠 NeuroLearn Gaia
*Empowering Ethical Learning through Emotional AI & Global Impact Simulation*

<p align="center">
<img src="https://placehold.co/800x200/22c55e/ffffff?text=NeuroLearn+Gaia+-+Empowering+Ethical+Learning" alt="NeuroLearn Gaia Banner">
</p>

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)  
[![GitHub Issues](https://img.shields.io/github/issues/senushidinara/neurolearn)](https://github.com/senushidinara/neurolearn/issues)  
[![GitHub Stars](https://img.shields.io/github/stars/senushidinara/neurolearn?style=social)](https://github.com/senushidinara/neurolearn/stargazers)  

---

<details open>
<summary>✨ Project Overview & Vision</summary>

NeuroLearn Gaia is an innovative **educational platform** addressing ethical decision-making in the age of advanced technology. Users navigate a **3D simulated globe (Gaia Globe)**, managing complex global scenarios like Smart Cities, AgriTech, and Sustainability.  

The platform integrates **Emotional AI (E-AI)** to monitor real-time user emotional states (**Focus, Distress, Joy, Neutral**) while making high-stakes ethical decisions.

**Objective:** Train users to maintain **cognitive focus under pressure**, earning higher **Emotional Learning Scores (ELS)** when making sustainable choices while emotionally regulated.

</details>

---

<details>
<summary>💡 Core Concepts & Features</summary>

### 🌍 Emotional Learning Score (ELS)
Measures performance based on:  
- **Decision Quality:** Sustainable, long-term solutions?  
- **Emotional State:** Was the user in a “Focus” state during the decision?  

High ELS = ethical + emotionally regulated decisions.

### 🌐 Interactive Gaia Globe
- Real-time 3D simulation using **Three.js**  
- Displays **Global Impact Score** & **Critical Zones**  
- Clicking zones triggers **Scenario Cards** for decision-making  

### 🤖 Emotional AI Pipeline
- Simulated with Python backend (`ml_simulator/`)  
- API-ready for **TensorFlow / PyTorch** integration  
- Real-time emotion inference guides decision scoring  

</details>

---

<details>
<summary>⚙️ Full-Stack Architecture</summary>

### Frontend (`src/`)
React + Tailwind CSS | Modular & scalable

| Component/Page | Description |
|----------------|-------------|
| `Navbar.jsx`   | Sticky header with Gaia Coins |
| `EmotionMeter.jsx` | Live mood & ELS gauge |
| `GaiaGlobe.jsx` | 3D globe with interactive zones |
| `ScenarioCard.jsx` | Modal for ethical decision-making |
| `Home.jsx` | Landing page & demo launcher |
| `Dashboard.jsx` | Globe, Impact Score, Emotion Meter |
| `Profile.jsx` | Historical performance & badges |
| `Modules.jsx` | Learning module catalog |

**Hooks:** `useEmotion.js`, `useGlobeData.js`, `useScenario.js`  
**Services:** `EmotionAI.js`, `ModuleAPI.js`  

---

### Backend (`backend/`)
Node.js / Express server

| File | Purpose |
|------|---------|
| `server.js` | Express app entry & middleware setup |
| `routes/emotionRoutes.js` | `/api/emotion/train` & `/api/emotion/status` endpoints |
| `models/User.js` | User schema with ELS & Gaia Coins |
| `utils/dataProcessing.js` | Backend utilities for ELS calculation |

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
git clone https://github.com/senushidinara/neurolearn.git
cd neurolearn

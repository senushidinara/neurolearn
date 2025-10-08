# 🧠 NeuroLearn Gaia
*Empowering Ethical Learning through Emotional AI & Global Impact Simulation*

<p align="center">
<img src="https://placehold.co/800x200/22c55e/ffffff?text=NeuroLearn+Gaia+--+Empowering+Ethical+Learning" alt="NeuroLearn Gaia Banner">
</p>

---

## ✨ 1. Project Overview & Vision
NeuroLearn Gaia is a cutting-edge **educational platform** designed to tackle one of the most critical challenges of our time: **ethical decision-making in the age of advanced technology**.  

The platform features a **simulated global environment**—the **Gaia Globe**—where students manage complex real-world scenarios like **Smart Cities, AgriTech, and Sustainability**.  

The **core innovation** is the integration of an **Emotional AI (E-AI)** model, which monitors the user's emotional state in real-time (**Focus, Distress, Joy, Neutral**) during high-stakes ethical decision-making.

**Goal:** Train users to maintain cognitive focus under pressure, earning a higher **Emotional Learning Score (ELS)** for making sustainable and ethical decisions while emotionally regulated.

---

## 💡 2. Core Concepts & Key Features

### 🌍 Emotional Learning Score (ELS)
The **primary metric of success** in NeuroLearn Gaia:

| Metric | Description |
|--------|-------------|
| Quality of Decision | Did the student choose the sustainable, long-term solution? |
| Emotional State | Was the student in a "Focus" state (as determined by the E-AI)? |

✅ **High ELS scores** reward users who consistently make ethical decisions while maintaining emotional regulation, demonstrating their ability to perform under cognitive load.

### 🌐 Interactive Gaia Globe
- Real-time 3D simulation using **Three.js**
- Displays **Global Impact Score** (e.g., planet's stress level)
- Highlights **Critical Zones** (City Grid, AgriTech Farms)
- Clicking a zone triggers **Scenario Cards** for decision-making

### 🤖 Emotional AI Pipeline
- Simulated via Python backend (`ml_simulator/`)
- API-ready for integration with **TensorFlow** or **PyTorch**
- Real-time emotional inference for ethical decision assessment

---

## ⚙️ 3. Full-Stack Architecture Breakdown

NeuroLearn Gaia is a **MERN-adjacent stack application** with a dedicated ML simulation layer.  

### A. Frontend (`src/`)

| Path | Purpose | Key Tech |
|------|---------|---------|
| `src/App.jsx` | Application entry & router | React Router |
| `src/index.js` | React DOM rendering | React DOM |
| `src/styles/` | Global/component styles | Tailwind CSS, SCSS |

#### Components (`src/components/`)

| Component | Description |
|-----------|-------------|
| Navbar.jsx | Sticky header & Gaia Coins display |
| EmotionMeter.jsx | Real-time mood & ELS gauge |
| GaiaGlobe.jsx | 3D planet & critical zones visualization |
| ScenarioCard.jsx | Modal for ethical decision scenarios |

#### Pages (`src/pages/`)

| Page | Description |
|------|-------------|
| Home.jsx | Landing page with "Launch Live Demo" button |
| Dashboard.jsx | Main interactive hub: Globe, Impact Score, Emotion Meter |
| Profile.jsx | Historical performance, ELS trends, achievement badges |
| Modules.jsx | Catalog of learning modules (e.g., Smart City Ethics) |

#### Hooks (`src/hooks/`)

| Hook | Description |
|------|-------------|
| useEmotion.js | Simulates live emotion detection & manages state |
| useGlobeData.js | Fetches & manages Gaia Globe stress data |
| useScenario.js | Handles Scenario Card logic & user input |

#### Services (`src/services/`)

| Service | Description |
|---------|------------|
| EmotionAI.js | Simulates TensorFlow Lite model for emotion prediction |
| ModuleAPI.js | Handles module progress & score submission via backend |

---

### B. Backend (`backend/`)

| Path | Purpose |
|------|---------|
| server.js | Express server entry point, middleware, route loader |
| routes/emotionRoutes.js | `/api/emotion/train` & `/api/emotion/status` endpoints |
| models/User.js | Database schema for users, ELS, and Gaia Coins |
| utils/dataProcessing.js | Utilities for backend calculations like final ELS |

---

## 🛠️ 4. Local Setup & Installation

### Prerequisites
- Node.js (LTS)
- npm or yarn
- Python 3.x (optional for ML simulation)

### Step 1: Clone Repository
```bash
git clone https://github.com/your-username/NeuroLearn-Gaia.git
cd NeuroLearn-Gaia

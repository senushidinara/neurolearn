🧠 NeuroLearn Gaia: Emotional AI and Global Impact Simulation Platform
<p align="center">
<img src="https://www.google.com/search?q=https://placehold.co/800x200/22c55e/ffffff%3Ftext%3DNeuroLearn%2BGaia%2B--%2BEmpowering%2BEthical%2BLearning" alt="NeuroLearn Gaia Banner">
</p>
✨ 1. Project Overview & Vision
NeuroLearn Gaia is a cutting-edge educational platform built to tackle one of the most critical challenges of our time: ethical decision-making in the age of advanced technology. It provides a simulated environment—the Gaia Globe—where students must manage complex global scenarios (Smart Cities, AgriTech, Sustainability).
The core innovation is the integration of an Emotional AI (E-AI) model. This model, running inference in real-time, analyzes the user's emotional state (simulated: Focus, Distress, Joy, Neutral) as they make high-stakes ethical choices.
The Goal: To train the user to maintain cognitive focus under pressure, rewarding them with a higher Emotional Learning Score (ELS) when they make sustainable choices while in a focused state. This teaches emotional regulation as a critical skill for ethical leadership.
💡 2. Core Concepts and Key Features
🌍 The Emotional Learning Score (ELS)
The ELS is the primary metric of success. It is calculated based on:
 * Quality of Decision: Did the student choose the sustainable, long-term solution?
 * Emotional State at Decision Time: Was the student in a "Focus" state (as determined by the E-AI)?
High ELS scores are achieved by consistently making ethical decisions while maintaining emotional regulation, proving the student can perform under cognitive load.
🌐 Interactive Gaia Globe
The Dashboard features a real-time, three-dimensional simulation of the planet (using Three.js). This globe displays:
 * Global Impact Score: The planet's current "stress level" (72% in the demo).
 * Critical Zones: Hotspots (e.g., City Grid, AgriTech Farms) that require immediate intervention. Clicking a zone triggers a Scenario Card.
🤖 Emotional AI Pipeline
The E-AI is simulated using a separate Python backend structure (found in ml_simulator/). This architecture allows for seamless integration with real-world ML platforms (TensorFlow, PyTorch) via API endpoints defined in the Node.js backend.
⚙️ 3. Full-Stack Architecture Breakdown
NeuroLearn Gaia is a MERN-adjacent stack application (React Frontend, Node/Express Backend) with a crucial ML Simulation Layer.
A. Frontend (src/ directory)
Built with React and styled using Tailwind CSS for rapid, responsive development.
| Path | Purpose | Key Technologies |
|---|---|---|
| src/App.jsx | Application Entry/Router. Defines the overall application structure, global context providers, and handles all client-side routing using react-router-dom. | React Router |
| src/index.js | ReactDOM rendering point. | React DOM |
| src/styles/ | Global and component styling definitions. | Tailwind CSS, SCSS |
1. Components (src/components/)
Reusable UI elements designed to be scalable and maintain consistency across the platform.
| Component | Description |
|---|---|
| Navbar.jsx | Sticky top header with navigation links and the RewardBadge (Gaia Coins). |
| EmotionMeter.jsx | A real-time visual gauge reflecting the user's instantaneous mood and ELS score. |
| GaiaGlobe.jsx | The Three.js container that renders the 3D planet visualization and interactive critical zones. |
| ScenarioCard.jsx | Modal component triggered by clicking a Globe zone, forcing the student to make an ethical decision. |
2. Pages (src/pages/)
The main views of the application, responsible for pulling data from hooks and services and assembling components.
| Page | Description |
|---|---|
| Home.jsx | Landing page—the first view, introducing the project and containing the "Launch Live Demo" button. |
| Dashboard.jsx | The main interactive hub. Displays the Globe, Impact Score, Emotion Meter, and AI model status. |
| Profile.jsx | Displays the user's historical performance, ELS trends, and achievement badges. |
| Modules.jsx | Catalog of learning modules (e.g., Smart City Ethics, Sustainable Energy Grids). |
3. Hooks (src/hooks/)
Custom React Hooks abstracting complex logic and managing state lifecycle.
| Hook | Description |
|---|---|
| useEmotion.js | The critical hook responsible for simulating live emotion detection, managing the currentEmotion state, and handling the model training lifecycle. |
| useGlobeData.js | Fetches and manages the real-time stress data for the Gaia Globe visualization markers. |
| useScenario.js | Handles the state and logic for triggering and processing user input within the Scenario Cards. |
4. Services (src/services/)
Abstraction layer for API communication, state calculation, and TensorFlow Lite inference.
| Service | Description |
|---|---|
| EmotionAI.js | Frontend ML Integration. This service simulates loading a pre-trained TensorFlow Lite model and executing the predictEmotion() function based on simulated biometric inputs. |
| ModuleAPI.js | Handles all CRUD operations related to module progress, scenario completion, and score submission to the backend. |
B. Backend (backend/ directory)
The Node.js/Express server that acts as the API gateway, managing persistent data, user accounts, and initiating heavy server-side processes.
| Path | Purpose |
|---|---|
| server.js | The Express application entry point. Configures middleware (CORS, JSON parsing) and loads all route modules. |
| routes/emotionRoutes.js | Defines API endpoints for /api/emotion/train (queuing the ML training job) and /api/emotion/status (checking live model health). |
| models/User.js | Database schema definition for student profiles, ELS, and Gaia Coins. |
| utils/dataProcessing.js | Contains utility functions for complex backend calculations, like calculating the final ELS from decision logs. |
🛠️ 4. Local Setup and Installation
Prerequisites
You will need the following software installed:
 * Node.js (LTS version)
 * npm (or yarn)
 * Python 3.x (for the optional ML simulation)
Step 1: Clone the Repository
git clone [https://github.com/your-username/NeuroLearn-Gaia.git](https://github.com/your-username/NeuroLearn-Gaia.git)
cd NeuroLearn-Gaia

Step 2: Frontend Installation (src/)
The frontend is a standard React application.
# Navigate to the root directory
npm install
npm run dev 
# The app should be accessible at http://localhost:3000

Step 3: Backend Installation (backend/)
The backend provides the necessary API for the frontend to communicate with.
cd backend
npm install
npm run start 
# The API will start on http://localhost:5000

Step 4 (Optional): Running the ML Simulation
To see the underlying Python model architecture, you can execute the simulated training script.
# Install Python dependencies (ensure you have numpy and scikit-learn installed)
pip install -r requirements.txt

# Run the simulated training pipeline
python3 ml_simulator/train_script.py

This script will output the simulated model accuracy and save a dummy .pkl file, mimicking a successful production training run.
🛣️ 5. Future Roadmap & Contribution
We believe NeuroLearn Gaia has massive potential in EdTech and ethical AI research. Here are some immediate next steps we plan to pursue:
 * Real Biometric Integration: Replace the useEmotion.js simulation with actual input from a biometric sensor API (e.g., EEG or GSR data).
 * Persistent Storage: Implement a Firestore or MongoDB database to make user profiles and leaderboard scores persistent.
 * Advanced Gamification: Introduce more complex module scenarios, collaborative missions, and a marketplace for Gaia Coins.
 * MLOps Pipeline: Integrate the ml_simulator scripts into a robust MLOps workflow (e.g., using GitHub Actions, Kubeflow, or Vertex AI) to automate model re-training and deployment on the backend.
Want to contribute? We welcome pull requests! Feel free to dive into the GaiaGlobe.jsx to enhance the Three.js visualization or contribute a new scenario to src/data/scenarios.json (a file yet to be created!).
⚖️ License
This project is licensed under the MIT License - see the LICENSE file for details.# neurolearn

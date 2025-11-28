export const RESUME_DATA = {
    name: "Nimish Vijay Vadgaonkar",
    role: "AI & Data Science Engineer",
    contact: {
        email: "nimishvadgaonkar@zohomail.in",
        github: "https://github.com/TensorTorch777",
        linkedin: "https://www.linkedin.com/in/nimishvadgaonkar",
        portfolio: "https://nimishvadgaonkarportfolio.vercel.app",
        mobile: "+91 8766816208",
        address: "Mumbai, India"
    },
    summary: "Results-driven Deep Learning & AI Enthusiast with expertise in defense applications, computer vision, and reinforcement learning. Skilled in designing, training, and optimizing advanced AI models for military systems including predictive maintenance, cybersecurity, satellite imagery analysis, missile guidance, and strategic planning. Proficient in leveraging cutting-edge AI frameworks to drive innovation in defense technology.",
    experience: [
        {
            company: "Aminuteman Technologies",
            role: "Data Science Intern (Remote)",
            duration: "May 2025 - Present",
            highlights: [
                "Satellite Image Object Detection: Developed advanced object detection models for satellite imagery using triplet loss and hard negative mining techniques to improve model discrimination capability.",
                "Spectral-Aware NMS: Implemented Non-Maximum Suppression (NMS) with spectral awareness to handle overlapping detections in multi-spectral satellite data.",
                "Multi-Scale Indexing: Built multi-scale feature indexing system using FAISS for efficient similarity search across different resolution levels.",
                "DIVOV2 Model Architecture: Utilized and fine-tuned DIVOV2 model for dense object detection in aerial and satellite imagery.",
                "Small Language Model (SLM) Development: Contributed to development of specialized small language models for defense documentation and report analysis."
            ]
        },
        {
            company: "K.J. Somaiya College of Engineering",
            role: "Deep Learning Intern (Mumbai, India)",
            duration: "Jan 2025 - Apr 2025",
            highlights: [
                "Dataset Curation & Cleaning: Preprocessed and cleaned dermatological disease image datasets; removed irrelevant classes and performed lesion segmentation.",
                "Transfer Learning & Fine-Tuning: Applied Transfer Learning using ResNet, DenseNet, and EfficientNet, achieving enhanced feature extraction for skin disease classification.",
                "Vision Transformer and Hybrid Architectures: Developed and fine-tuned Vision Transformer (ViT) models and created a custom ViT-CNN hybrid architecture for improved accuracy.",
                "Data Augmentation and Balancing: Engineered heavy augmentation pipelines to balance underrepresented classes, achieving a uniform dataset of 5,000 images per class.",
                "Optimization Techniques: Implemented regularization strategies including Dropout, L2 Regularization, Early Stopping, and Learning Rate Schedulers to reduce overfitting.",
                "Research Contribution: Contributed to a research paper covering the complete workflow from dataset preparation to model optimization and evaluation."
            ]
        }
    ],
    projects: [
        {
            title: "NotesQuest - LLM Microservice for Educational Content",
            description: "Developed a FastAPI LLM microservice for generating summaries, MCQs, flashcards, and chat with true Server-Sent Events (SSE) using Qwen2.5-7B model.",
            link: "https://notes-quest.vercel.app/",
            github: "https://github.com/TensorTorch777/NotesQuest",
            details: [
                "Document Processing: Supports PDF, TXT, DOCX, MD with OCR for scanned files; robust ingestion pipeline with PyMuPDF and python-docx.",
                "AI Summarization: Map-reduce approach for long documents with token-aware chunking and Markdown formatting support.",
                "Quiz & Flashcards: Generates exam-quality MCQs with multiple difficulty levels and interactive flashcards with flip animations.",
                "AI Chat: Real-time token streaming with chat history, title auto-generation, and thinking process display.",
                "Performance: Shared model instance with tuned budgets reduced median latency by 38% and GPU memory by 22%; sustained 110-150 tok/s on RTX 5080 GPU."
            ],
            tools: ["Python", "FastAPI", "Qwen2.5-7B", "PyTorch", "Chroma", "SentenceTransformers", "MongoDB", "Node.js", "React", "Server-Sent Events"]
        },
        {
            title: "Predictive Maintenance for Military Vehicles",
            description: "Developed LSTM-based model to predict Remaining Useful Life (RUL) of military vehicle components using NASA Turbofan dataset.",
            github: "https://github.com/TensorTorch777/FLEET-MINDS-Military-Predictive-Maintenance-System",
            details: [
                "RUL Prediction Dashboard: Real-time sensor data visualization with interactive prediction controls and mission readiness indicators.",
                "Transfer Learning Engine: Cross-domain knowledge transfer (MRAP → Tank → Helicopter) with performance improvement tracking.",
                "Mission Impact Assessment: Calculates mission success probability and evaluates risk levels with specific recommendations.",
                "Uncertainty Quantification: Bayesian uncertainty estimation distinguishing between epistemic and aleatoric uncertainty for confidence-based decisions.",
                "Fleet Overview: Multi-vehicle health monitoring and cross-fleet transfer learning for maintenance optimization."
            ],
            tools: ["Python", "TensorFlow", "LSTM Networks", "NASA Turbofan Dataset", "Transfer Learning", "Bayesian Methods", "Docker", "Kubernetes"]
        },
        {
            title: "AI-Powered Market Trend Analysis",
            description: "Developed machine learning models to analyze and predict financial market trends using historical price data and technical indicators.",
            github: "https://github.com/TensorTorch777/DHAN-ANUMAAN-AI-MARKET-RESEARCH-ANALYSIS",
            details: [
                "Multi-source Data Collection: Fetches data from Yahoo Finance, Alpha Vantage, and other sources for comprehensive analysis.",
                "Technical Analysis: Implements RSI, MACD, Bollinger Bands, and Moving Averages for in-depth market insight.",
                "Machine Learning Models: Utilizes Random Forest, XGBoost, LightGBM, and LSTM for robust trend prediction.",
                "Interactive Visualizations: Features beautiful charts and graphs using Matplotlib, Seaborn, and Plotly within a Streamlit dashboard.",
                "Trading Signals: Generates actionable buy/sell signals based on combined technical and ML analysis."
            ],
            tools: ["Python", "Scikit-learn", "XGBoost", "LightGBM", "LSTM", "Pandas", "Plotly", "Streamlit", "Yahoo Finance API"]
        }
    ],
    publications: [
        {
            title: "Skin Disease Classification with CNN and Vision Transformer Architectures",
            year: "2025",
            description: "Contributed to data preprocessing, segmentation, model development, transfer learning, hybrid ViT-CNN architectures, regularization techniques, and hyperparameter tuning."
        }
    ],
    education: [
        {
            institution: "K.J. Somaiya College of Engineering",
            degree: "B.Tech in Electronics and Computer Engineering",
            location: "Mumbai, India",
            duration: "Oct 2022 - Present"
        },
        {
            institution: "Indian Institute of Technology, Ropar",
            degree: "Minor in Artificial Intelligence",
            location: "Online",
            duration: "Nov 2024 - Present"
        }
    ],
    skills: {
        languages: ["Python"],
        deepLearning: ["TensorFlow", "Keras", "PyTorch", "Transformers"],
        machineLearning: ["Scikit-Learn", "Pandas", "NumPy", "OpenCV"],
        llm_nlp: ["Qwen2.5", "FastAPI", "LangChain", "Sentence Transformers", "RAG"],
        computerVision: ["Object Detection", "YOLO", "Vision Transformers", "Siamese Networks"],
        reinforcementLearning: ["PPO", "DQN", "Stable Baselines3", "PyGame"],
        specializedTechniques: ["Triplet Loss", "Negative Mining", "NMS", "FAISS", "Knowledge Graphs", "Map-Reduce Pipelines"],
        vectorDatabases: ["Chroma", "FAISS", "HNSW", "Similarity Search"],
        databases: ["MongoDB", "Neo4j", "MySQL", "SQLite"],
        platforms: ["Jupyter", "PyCharm", "VS Code", "Google Colab", "Streamlit", "FastAPI"],
        documentProcessing: ["PyMuPDF", "python-docx", "Text Normalization", "Sliding Window Processing"],
        softSkills: ["Problem-Solving", "Critical Thinking", "Stakeholder Management", "System Architecture"],
        knownLanguages: ["English (Professional Proficiency)", "Hindi (Native)", "Marathi (Native)"]
    },
    certifications: [
        "Google Data Analytics (Google)",
        "Python for Data Science, AI & Development",
        "Data Analysis with Python",
        "IBM Machine Learning",
        "Deep Learning and Reinforcement Learning"
    ],
    miscellaneous: [
        "Represented Aminuteman Technologies at Surya Dronathon 2025, Indian Army initiative in Sumdo, Himachal Pradesh.",
        "Pitched the Ankesha A next-generation kamikaze drone to senior Indian Army officials including Lieutenant General, Brigadiers, and Majors.",
        "Ankesha A: Long-range (1,000-1,200 km) AI-powered loiter munition with 6-hour endurance and 30,000 ft operational altitude.",
        "Advanced capabilities: On-board AI Edge Computing, swarm operations, and detachable FPV attack drones.",
        "Demonstrated indigenous defense technology innovation as part of Make in India initiative.",
        "Successfully showcased AI-powered drone systems for strengthening India's military capabilities."
    ]
};

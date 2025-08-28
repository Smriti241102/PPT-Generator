# PowerPoint Generator

This project generates PowerPoint presentations (`.pptx`) automatically from text input using OpenAI or other APIs.  
It creates a clean deck where:
- The **first slide** uses the title layout.
- All **subsequent slides** use a uniform content layout.
- Speaker notes can be included.
- Template slides are removed after generation.

---

## 🚀 Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/ppt-generator.git
cd ppt-generator

### 2. Create a virtual environment
python -m venv venv
source venv/bin/activate   # Linux / macOS
venv\Scripts\activate      # Windows

### 3. Install dependencies
pip install -r requirements.txt

### 4. Run the app
uvicorn app.main:app 

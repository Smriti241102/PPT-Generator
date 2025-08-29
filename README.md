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


## Info
The PPT-Generator app transforms input text into structured PowerPoint presentations by leveraging natural language processing (NLP) and the python-pptx library.

Text Parsing and Slide Mapping

Upon receiving input, the app processes the text to identify key components such as titles, headings, subheadings, and bullet points. This parsing ensures that each segment is appropriately mapped to individual slides. The first slide is designated as the title slide, while subsequent slides follow a uniform content layout. The app also supports the inclusion of speaker notes, enhancing the presentation's utility.

Template Application and Asset Integration

The app utilizes predefined slide layouts to maintain consistency and professionalism. It removes any template slides post-generation to ensure a clean final product. Visual elements such as fonts, colors, and background designs are applied to align with the selected template, ensuring a cohesive aesthetic throughout the presentation.

Technical Implementation

Developed in Python, the app employs the python-pptx library for PowerPoint file creation and manipulation. Dependencies are managed via a virtual environment, and the setup process is streamlined through a requirements.txt file. The application is designed to be extensible, allowing for future enhancements and customization.

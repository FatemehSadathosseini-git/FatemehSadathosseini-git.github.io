# Computational Linguistics — Skills Research

> Researched: 2026-09-25
> Sources: Coursera (What Is Computational Linguistics? Career Guide), AACT / WebScribble Computational Linguist Job Description 2026, University of Florida MELD Lab "Getting Started with Computational Linguistics".
> Goal: align Fatemeh Sadat Hosseini's resume site with real hiring requirements for Computational Linguist / NLP roles.

## 1. What employers ask for (synthesis)

### A. Core Linguistics (must-have)
- General linguistics + language structure (phonetics/IPA, morphology, morphosyntax, syntax, semantics, pragmatics)
- Formal semantics / logic (quantification, predicate/propositional/first-order logic)
- Psycholinguistics / cognitive science, corpus linguistics
- Linguistic data work: annotation, corpora & lexicon creation, IPA transcription (esp. for speech tech)

### B. Programming (must-have)
- **Python fluency is mandatory** (dominant for NLP/AI) — CS50 / Python for Linguists path
- Data structures & algorithms (efficient Python)
- Second language bonus: Java / C# / C++ (boosts job prospects)
- Version control: Git & GitHub, Jupyter Notebooks, Linux/CLI basics
- Web basics for portfolio/demos: HTML, CSS, JavaScript/TypeScript

### C. NLP Libraries & Frameworks
- NLTK, spaCy (explicitly listed in job descriptions)
- Hugging Face Transformers, scikit-learn, Gensim, Stanza
- Regex, text preprocessing, information extraction / text mining

### D. Machine Learning / Data Science
- Machine learning frameworks: PyTorch or TensorFlow
- Statistical modeling & data analysis: statistics, probability (esp. Bayes Theorem), logistic regression
- Linear algebra (vectors/matrices), calculus basics (incl. partial derivatives), information theory (Markov chains, entropy)
- Training / optimizing / evaluating models (MT, sentiment analysis, chatbots), data manipulation (pandas/numpy), SQL basics
- Cloud computing platforms for scalable processing (AWS/GCP/Azure basics)

### E. Applied CL Tasks (what linguists actually do on the job)
- Machine translation, speech recognition/synthesis, sentiment analysis
- Chatbots / conversational AI / LLMs, knowledge extraction, question answering
- Dataset creation for ML, testing & evaluating language systems for accuracy/efficiency
- UX principles for language tech, ethical considerations in AI/NLP

### F. Professional / Academic
- MSc/PhD in Computational Linguistics, Linguistics, Computer Science or related (in progress: MSc Linguistics, Potsdam)
- Independent research + scientific publications, staying current with research
- Collaboration with software engineers, communication, teaching/curriculum skills transfer well to annotation-guideline writing

## 2. Gap analysis vs. current resume (src/resume.data.json)

Existing strengths: Semantics, Psycholinguistics, Computational Linguistics, NLP, Language Technology, Python (basic), Teaching, Translation, trilingual (EN C1 / FA native / DE B2).

Gaps to close (added as "in progress / learning" where honest, not as expert claims):
- Python fluency path, Git/GitHub, Jupyter, Regex, Linux/CLI
- NLTK, spaCy, Hugging Face, scikit-learn
- Statistics, probability, linear algebra basics
- Corpus creation/annotation, evaluation metrics
- PyTorch/TensorFlow awareness, cloud basics, AI ethics

## 3. How this repo applies the research

- `src/resume.data.json`: new `skillGroups` array (6 categories above) + expanded flat `skills` for chips/ATS.
- `src/Resume.tsx`: renders grouped skills with icons + level labels (Proficient / Intermediate / Learning) so the site stays honest while showing direction.
- Grouping helps ATS + recruiters scan in <10s, per job-description keywords.

## Sources
1. https://www.coursera.org/articles/computational-linguistics
2. https://aact.webscribble.com/career/computational-linguist/job-descriptions
3. https://meld.lin.ufl.edu/about/getting-started-with-computational-linguistics/

# Digital Banking App

Ce projet est une application **Digital Banking** développée avec **Java Spring Boot** pour le backend et (indiquer ici le frontend utilisé : Angular / React / Flutter…).  
L’objectif est de gérer les opérations bancaires numériques de manière sécurisée et facile à utiliser.

---

## 📦 Composants

- **Backend** : Java Spring Boot  
- **Frontend** : (Angular / React / Flutter / …)  
- **Base de données** : (MySQL / PostgreSQL / H2 / …)  

---

## ⚙️ Prérequis

Avant de lancer le projet, assurez-vous d’avoir :

- Java 17 ou supérieur  
- Maven  
- Une base de données (selon la configuration)  
- Variables d’environnement pour les secrets :
```powershell
setx JWT_SECRET "votre_jwt_secret"
setx OPENAI_API_KEY "votre_openai_api_key"
🚀 Lancer le projet

Cloner le projet :

git clone https://github.com/laanayachouaib/Projet_en_groupe.git
cd digital-banking-app-main


Configurer les variables d’environnement (JWT et OpenAI Key) :

setx JWT_SECRET "votre_jwt_secret"
setx OPENAI_API_KEY "votre_openai_api_key"


Lancer le backend :

cd backend
mvn spring-boot:run


Lancer le frontend (selon le framework utilisé) :

# Exemple Angular
cd frontend
npm install
ng serve

🗂️ Structure du projet
digital-banking-app-main/
├─ backend/                  # Backend Spring Boot
│  ├─ src/main/java/
│  ├─ src/main/resources/
│  └─ pom.xml
├─ frontend/                 # Frontend (Angular / React / Flutter)
└─ README.md

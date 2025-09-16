# Recipibot-protoype

This repository contains the demonstration of running the tools that are used to build Recipibot

- **Backend:** Node.js + Express + Axios
- **Frontend:** React + Axios
- **API:** [Groq API](https://console.groq.com/)

The app allows users to enter a prompt in a React frontend, which is sent to an Express server. The server forwards the prompt to the Groq API and returns the generated text back to the client.


## Requirements

- **Operating System:** Tested on Windows 11
- **Dependencies:** express, cors, axios, dotenv, React
- **FrameWork:** React
- **API:** express

Ensure you have

Ensure you have [Node.js](https://nodejs.org/) and npm installed by running:

```bash
node -v
npm -v
```

1. Cloning the Repository
Clone the Repo to run the application locally

git clone https://github.com/Arwin-j/Recipibot-prototype.git
cd Recipibot-prototype

2. Setup Environment Variable
This application connects to Groq Cloud to connect the Application with a LLM, so for that we are required with a key.
 - Go to https://console.groq.com/keys to create an unique key
 - Then copy that key and paste it in .env file present in the backend folder
          -  GROQ_API_KEY=ENTER_YOUR_GROQ_API_KEY_HERE
          -  Input your key after the equal sign

3. Starting up the Server
Enter the following commands in the terminal after making sure the current directory is the root directory:
  cd backend
  npm start
  You should see Server is running on port 5000

4. Starting up the Client
Start up a new terminal and Enter the following commands also making sure the current directory is the root directory (if not and present inside the backend directory go one step back by ``` cd .. ```)
  cd frontend
  npm start
  The react development server will start and it will pop up or else visit http://localhost:3000/

5. Usage
   Enter a text prompt in the text box
   Click generate
   Generated text will be displayed below
  


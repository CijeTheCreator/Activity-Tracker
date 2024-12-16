# Penpot Activity Tracker: Private Insights into Your Workflow

![Penpot Activity Tracker: Private Insights into Your Workflow](/.github/images/thumb.png "Penpot Activity Tracker: Private Insights into Your Workflow")
**Rest API at [Activity Tracker Backend](https://github.com/CijeTheCreator/activity-tracker-backend)**

## 🛠️ Getting Started  

Follow these steps to set up and run the frontend for Activity Tracker:  

1. **Install Prerequisites**  
   - Ensure **Git** and **Node.js** are installed on your system.  

2. **Clone the Repository**  
   - Clone this repository to your local machine using:  
     ```bash  
     git clone https://github.com/CijeTheCreator/Activity-Tracker
     ```  

3. **Set Up the REST API**  
   - Follow the instructions in the [Activity Tracker Backend README](https://github.com/CijeTheCreator/activity-tracker-backend/blob/main/README.md) to set up the REST API.  

4. **Configure the Environment**  
   - In the root folder, create a `.env` file (if not already present). Set the `ADDRESS` variable to the base URL of your REST API (e.g., `http://localhost:3000`).  

     Example `.env` file:  
     ```env  
     ADDRESS=http://localhost:3000  
     ```  

5. **Install Dependencies and Start the Frontend**  
   - Run the following commands to install the required packages and start the development server:  
     ```bash  
     npm install && npm run dev  
     ```  

6. **Install the Plugin (For Local Development)**  
   - If you're running the frontend on `localhost`, install the plugin using the following URL:  
     ```  
     http://localhost:4402/manifest.json  
     ```

## Description

The Penpot Activity Tracker plugin offers a privacy-focused way to monitor your design workflow. This tool allows you to track time spent on projects, view detailed activity logs, and gain insights into team collaborations. All activity data is decrypted locally for enhanced privacy before being securely synced with the server.

1. **Activity Logs**:

   - Track time spent on each project and task.
   - Access detailed logs to analyze productivity and trends.

2. **Collaboration Insights**:
   - View contributions and collaborative activities across your team.
   - Gain visibility into shared projects and joint efforts.

## Features

1. **Private Activity Tracking**: Monitor time, projects, and collaborations with secure local decryption.
2. **Detailed Logs**: Access comprehensive activity data for better decision-making.
3. **Collaboration Metrics**: Gain insights into team efforts and shared projects.
4. **Streamlined Syncing**: Securely sync your activity data to the server for safe storage.

## :camera: Screenshots

![Screenshot](/.github/images/ActivityTracker1.png "Track time spent and projects worked on")  
![Screenshot](/.github/images/ActivityTracker2.png "Visualize collaboration insights and contributions")
![Screenshot](/.github/images/ActivityTracker3.png "Visualize collaboration insights and contributions")
![Screenshot](/.github/images/ActivityTracker4.png "Visualize collaboration insights and contributions")

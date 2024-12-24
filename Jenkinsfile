pipeline {
    agent any

    environment {
        IMAGE_NAME = "project4:latest"
        CONTAINER_NAME = "project4-container"
        GIT_REPO = "https://github.com/M4tth3w-u/Project4.git"
    }

    stages {
        stage('Clone Repository') {
            steps {
                // Clone repository dari GitHub
                git branch: 'main', url: "${GIT_REPO}"
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${IMAGE_NAME} FILE"
                }
            }
        }
        stage('Deploy to Docker') {
            steps {
                script {
                    // Run the container
                    sh """
                    docker run -d --name ${CONTAINER_NAME} -p 9898:80 ${IMAGE_NAME}
                    """
                }
            }
        }
    }
}

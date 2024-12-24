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
                git branch: 'master', url: "${GIT_REPO}"
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${IMAGE_NAME} ."
                }
            }
        }
        stage('Deploy to Docker') {
            steps {
                script {
                    // Run the container
                    sh """
                    docker stop ${CONTAINER_NAME} || true
                    docker rm ${CONTAINER_NAME} || true
                    docker run -d --name ${CONTAINER_NAME} -p 8681:80 ${IMAGE_NAME}
                    """
                }
            }
        }
    }
}

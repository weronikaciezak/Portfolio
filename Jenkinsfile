pipeline {
    agent any
    options {
        skipDefaultCheckout()
    }

    environment {
        FRONTEND_IMAGE = 'portfolio-weronikaciezak:latest'
    }

    stages {
        stage('Download repository') {
            steps {
                git url: 'https://github.com/weronikaciezak/portfolio.git',
                    branch: 'master'
            }
        }

        stage('Delete existing frontend image') {
                    steps {
                        sh 'docker rmi $(docker images "portfolio" -f "dangling=true" -q) 2>/dev/null || true'
                    }
                }

        stage('Build frontend') {
            steps {
                sh 'docker build -t $FRONTEND_IMAGE .'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker compose down'
                sh 'docker compose up --build -d'
            }
        }
    }

    post {
        always {
            script {
                sh 'docker compose logs'
            }
        }
    }
}

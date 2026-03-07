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
                    branch: 'resizing'
            }
        }

        stage('Build frontend') {
            steps {
                sh 'docker build -t $FRONTEND_IMAGE .'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker-compose down'
                sh 'docker-compose up -d'
            }
        }
    }

    post {
        always {
            script {
                sh 'docker-compose logs'
            }
        }
    }
}

pipeline {
    agent any
    environment {
        HOME = '.'
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
                sh 'npm install'
                sh 'npm run webdriver-manager update'
                sh 'npm test'
            }
        }
    }
    post {
        always {
            junit '**/reports/**/*.xml'
        }
    }
}

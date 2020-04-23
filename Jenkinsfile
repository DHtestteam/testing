pipeline {
    agent { docker { image 'node:12.16.2' } }
    environment {
        HOME = '.'
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
                sh 'npm install'
                sh 'protractor conf.js'
            }
        }
    }
    post {
        always {
            junit 'build/reports/**/*.xml'
        }
    }
}

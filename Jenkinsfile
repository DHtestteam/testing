pipeline {
    agent any
    environment {
        HOME = '.'
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
                sh 'npm install --slient'
                sh './node_modules/protractor/bin/webdriver-manager update'
                sh './node_modules/.bin/protractor conf.js'
            }
        }
    }
    post {
        always {
            junit './reports/*.xml'
        }
    }
}

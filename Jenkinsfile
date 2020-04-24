pipeline {
    agent { docker { image 'node:latest' } }
    environment {
        HOME = '.'
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
                sh 'npm install --slient'
                sh 'npm uninstall -g chromedriver'
                sh 'npm install -g chromedriver'
                sh './node_modules/.bin/protractor conf.js'
            }
        }
    }
    post {
        always {
            junit 'build/reports/**/*.xml'
        }
    }
}

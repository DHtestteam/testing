pipeline {
    agent { docker { image 'node:10.16.0' } }
    stages {
        stage('Test') {
            steps {
                sh 'npm install'
                sh 'node --version'
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

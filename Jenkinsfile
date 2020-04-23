Jenkinsfile (Declarative Pipeline)
pipeline {
    agent { docker { image 'node:6.3' } }
    stages {
        stage('Test') {
            steps {
                sh 'npm --version'
            }
        }
    }
    post {
        always {
            junit 'build/reports/**/*.xml'
        }
    }
}

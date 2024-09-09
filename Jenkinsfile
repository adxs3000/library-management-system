pipeline {
    agent { docker { image 'node:20.17.0-alpine3.20' } }
    stages {
        stage('Install Dependencies') {
            steps {
                // Display Node.js version to verify the environment
                sh 'node --version'
                
                // Display NPM version to verify the environment
                sh 'npm --version'
                
                // Install project dependencies
                sh 'npm install'
            }
        }
        stage('Build React Application') {
            steps {
                // Build the React application
                sh 'npm run build'
            }
        }
    }
    post {
        always {
            // Archive the build output (optional)
            archiveArtifacts artifacts: 'build/**', allowEmptyArchive: true
        }
    }
}

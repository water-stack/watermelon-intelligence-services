@echo off
echo Setting up GitHub repository for Watermelon Intelligence Services
echo.

REM Replace these with your actual GitHub username and repository name
set GITHUB_USERNAME=water-stack
set REPO_NAME=watermelon-intelligence-services

echo Adding remote origin...
git remote add origin https://github.com/%GITHUB_USERNAME%/%REPO_NAME%.git

echo Renaming branch to main...
git branch -M main

echo Pushing to GitHub...
git push -u origin main

echo.
echo Repository setup complete!
echo Your repository will be available at: https://github.com/%GITHUB_USERNAME%/%REPO_NAME%
echo.
pause
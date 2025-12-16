#!/bin/bash

# Exit on error
set -e

# Build the project
npm run build

# Export the project
npm run export

# Deploy to GitHub Pages
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main

# Publish to gh-pages branch
npm run deploy

echo "Deployment completed successfully!"
echo "Your site will be live shortly at: https://hcaglar32.github.io/dogum-gunun-kutlu-olsun-sevgilim"

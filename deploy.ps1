# Build the project
Write-Host "Building the project..." -ForegroundColor Green
npm run build

# Export the project
Write-Host "Exporting the project..." -ForegroundColor Green
npm run export

# Add all changes to git
Write-Host "Adding changes to git..." -ForegroundColor Green
git add .

# Commit changes
Write-Host "Committing changes..." -ForegroundColor Green
git commit -m "Deploy to GitHub Pages"

# Push changes to main branch
Write-Host "Pushing to main branch..." -ForegroundColor Green
git push origin main

# Deploy to GitHub Pages
Write-Host "Deploying to GitHub Pages..." -ForegroundColor Green
npm run deploy

Write-Host "`nDeployment completed successfully!" -ForegroundColor Green
Write-Host "Your site will be live shortly at: https://hcaglar32.github.io/dogum-gunun-kutlu-olsun-sevgilim" -ForegroundColor Cyan

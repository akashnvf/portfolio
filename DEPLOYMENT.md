# Vercel Deployment Guide

This project is configured for direct deployment to **Vercel** with the App Router, TypeScript, and security headers configured via `vercel.json`.

---

## Method 1: Deploy via GitHub (Recommended)

1. **Push your repository to GitHub:**
   ```powershell
   git remote add origin https://github.com/<your-username>/akash-portfolio.git
   git branch -M master
   git push -u origin master
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
   - Click **Add New...** > **Project**.
   - Select your `akash-portfolio` repository and click **Import**.

3. **Configure Environment Variables (in Vercel Dashboard):**
   Add these under **Settings** > **Environment Variables**:
   - `NEXT_PUBLIC_SITE_URL` : `https://your-domain.vercel.app` (or your custom domain)
   - `RESEND_API_KEY` *(optional)* : your Resend API key for contact form emails
   - `CONTACT_TO_EMAIL` *(optional)* : `akash.nvf@gmail.com`
   - `CONTACT_FROM_EMAIL` *(optional)* : `Portfolio Contact <onboarding@resend.dev>`

4. **Deploy:**
   - Click **Deploy**. Vercel will automatically build and publish your website with SSL.
   - Any future commits pushed to `master` will trigger automatic deployments.

---

## Method 2: Deploy directly via Vercel CLI

If you want to deploy directly from your terminal:

1. **Run the Vercel CLI command:**
   ```powershell
   npx.cmd vercel
   ```
2. Follow the interactive prompts:
   - *Set up and deploy?* **Y**
   - *Which scope?* (Select your account)
   - *Link to existing project?* **N**
   - *What's your project's name?* **akash-portfolio**
   - *In which directory is your code located?* **./**
   - *Want to modify settings?* **N**

3. **Deploy to Production:**
   ```powershell
   npx.cmd vercel --prod
   ```

---

## Configuration Files Added

- [`vercel.json`](file:///c:/Users/Echelon/OneDrive%20-%20Echelon%20Edge%20Private%20Limited/Documents/protfolio/vercel.json): Framework definition, build commands, caching policies for CV and images, and HTTP security headers.
- [`.github/workflows/ci.yml`](file:///c:/Users/Echelon/OneDrive%20-%20Echelon%20Edge%20Private%20Limited/Documents/protfolio/.github/workflows/ci.yml): Automated GitHub Actions pipeline to run linting, type checks, and build on every push.


# Website Migration Plan & Checklist

This document details the step-by-step procedure to migrate the **Uplift Foundation** Next.js website, Vercel hosting, Supabase backend, and Google OAuth configurations from developer/intern personal accounts to company-owned accounts.

---

## 📋 Pre-Migration Checklist

Before initiating the migration, ensure you have the following resources:
- [x] **Source Code**: Verified local workspace copy is up-to-date.
- [x] **Configuration**: Known list of environment variables.
- [ ] **Domain Control**: Credentials for your domain registrar (to update DNS records later).
- [ ] **Access Credentials**: Owner/Admin access to any existing Supabase instance (if needed to retrieve legacy configurations/data).

---

## 🛠️ Step-by-Step Migration Procedure

### Phase 1: Establish Company Accounts
To eliminate dependencies on personal/intern accounts, register new accounts using a central company email (e.g., `admin@upliftfoundation.org`):
1. **GitHub**: Create a GitHub organization or professional account.
2. **Supabase**: Create a company Supabase account and organization.
3. **Vercel**: Create a company Vercel account or team.
4. **Google Cloud Console**: Set up Google Cloud Platform under your company's Google Admin console.

---

### Phase 2: Configure Google OAuth Client
Since the app supports Google login, you must create a new OAuth client in a company-controlled Google Cloud project:
1. Log in to the **[Google Cloud Console](https://console.cloud.google.com)**.
2. Create a new project: **"Uplift Foundation Web"**.
3. Navigate to **APIs & Services** > **OAuth consent screen**:
   - Set User Type to **External**.
   - Input App Name (e.g., *Uplift Foundation*) and user support email.
   - Add your company domain under **Authorized domains**.
4. Go to **Credentials** > **Create Credentials** > **OAuth client ID**:
   - Application type: **Web application**.
   - Name: **"Uplift Web Client"**.
   - *Authorized Redirect URIs*: Leave this empty for now (we will obtain the callback URL from Supabase in the next phase).
5. Click **Create** and safely copy the **Client ID** and **Client Secret**.

---

### Phase 3: Provision & Configure New Supabase Project
1. Log in to the new company **[Supabase Dashboard](https://supabase.com)**.
2. Click **New Project**, select your organization, and configure:
   - **Name**: `Uplift Foundation`
   - **Database Password**: Generate a strong password and save it securely.
   - **Region**: Select the server region closest to your users.
3. Go to **Project Settings** > **API** and copy these environment variables:
   - `Project URL` (corresponds to `NEXT_PUBLIC_SUPABASE_URL`)
   - `anon public` (corresponds to `NEXT_PUBLIC_SUPABASE_ANON_KEY`)
   - `service_role` (corresponds to `NEXT_SUPABASE_SERVICE_ROLE_KEY`)
4. Go to **Authentication** > **Providers** > **Google**:
   - Enable the Google provider toggle.
   - Paste the **Client ID** and **Client Secret** obtained in Phase 2.
   - Copy the provided **Redirect URL** (e.g., `https://<your-project-id>.supabase.co/auth/v1/callback`).
5. Return to the **Google Cloud Console**, edit your OAuth client ID credentials, and paste the Supabase callback URL under **Authorized Redirect URIs**.

---

### Phase 4: Local Update & Testing
Verify everything works locally with the new company credentials:
1. Open the local `.env.local` file.
2. Update the environment variables with your new values:
   ```env
   # New Supabase variables
   NEXT_PUBLIC_SUPABASE_URL=https://<your-new-project-id>.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-new-anon-key>
   NEXT_SUPABASE_SERVICE_ROLE_KEY=<your-new-service-role-key>

   # Site Configuration
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```
3. Run the seed script to create initial admin and test users in your new database:
   ```bash
   # Make sure dependencies are installed
   npm install

   # Run the seed script
   npx tsx seed.ts
   ```
4. Start the local development server:
   ```bash
   npm run dev
   ```
5. Test functionality locally:
   - Navigate to `http://localhost:3000/login`
   - Test login with email/password (using one of the seeded accounts like `john.doe@example.com` / `password123`)
   - Test sign up of a new user
   - Test Google Sign-In button

---

### Phase 5: Push Code to GitHub
1. Initialize the git repository (if not already initialized):
   ```bash
   git init
   ```
2. Check your `.gitignore` to ensure `.env.local` and other sensitive environment files are excluded.
3. Commit and push the codebase:
   ```bash
   git add .
   git commit -m "chore: setup project code for company account deployment"
   git remote add origin https://github.com/<your-company-org>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```

---

### Phase 6: Deploy to Vercel
1. Log in to the company **[Vercel Dashboard](https://vercel.com)**.
2. Click **Add New** > **Project** and import your GitHub repository.
3. In the Configuration screen, expand the **Environment Variables** section and add:
   - `NEXT_PUBLIC_SUPABASE_URL` = `<your-new-supabase-url>`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `<your-new-anon-key>`
   - `NEXT_SUPABASE_SERVICE_ROLE_KEY` = `<your-new-service-role-key>`
   - `NEXT_PUBLIC_SITE_URL` = `https://<your-vercel-domain>.vercel.app` (You will update this to your custom domain later)
   - `NEXT_PUBLIC_BASE_URL` = `https://www.upliftfoundation.org`
4. Click **Deploy** and wait for the build to complete. Verify that the build completes successfully and check the Vercel-generated preview URL.

---

### Phase 7: Configure Custom Domain & Update Production Settings
1. On Vercel, navigate to **Project Settings** > **Domains**.
2. Add your custom domain (e.g., `upliftfoundation.org` and `www.upliftfoundation.org`).
3. Log in to your domain registrar (GoDaddy, Namecheap, etc.) and configure the DNS settings provided by Vercel:
   - For apex domain (`upliftfoundation.org`): `A` record pointing to `76.76.21.21`.
   - For subdomain (`www.upliftfoundation.org`): `CNAME` record pointing to `cname.vercel-dns.com`.
4. Once DNS propagates, go back to Vercel and update your Vercel Environment Variables:
   - Set `NEXT_PUBLIC_SITE_URL` = `https://www.upliftfoundation.org`
5. Redeploy your main branch on Vercel to pick up the updated domain variables.
6. Under your Supabase project, go to **Authentication** > **URL Configuration** and update:
   - **Site URL**: `https://www.upliftfoundation.org`
   - **Redirect URLs**: Add `https://www.upliftfoundation.org/**` and `https://www.upliftfoundation.org/auth/callback` to ensure redirect permissions.

---

## 🚦 Final Verification Plan

Run through this checklist on the production website to confirm migration was successful:

- [ ] **Home Page**: Verify assets (images, CSS styles, animations) load correctly on mobile and desktop.
- [ ] **DNS Verification**: Confirm `https://www.upliftfoundation.org` resolves correctly and has a valid SSL certificate.
- [ ] **Email Sign-Up**: Register a new user account. Verify that the user is correctly created in the Supabase user dashboard.
- [ ] **Email Login / Logout**: Log in with credentials and successfully log out.
- [ ] **Google OAuth Login**: Log in using Google Authentication. Confirm it logs you in and redirects to the landing page correctly.
- [ ] **Session Middleware**: Try to access protected routes when signed out to confirm proper route protection middleware behavior.

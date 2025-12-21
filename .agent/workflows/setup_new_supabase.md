---
description: How to set up a brand new Supabase project for GOSSIP
---
# Supabase Fresh Setup Guide

Follow these steps exactly when creating a new Supabase project for the GOSSIP app.

## 1. Create Project

1. Go to [database.new](https://database.new) and create a new project.
2. Wait for the database to finish provisioning.

## 2. Get API Keys

1. Go to **Settings** -> **API**.
2. Copy the **Project URL**.
3. Copy the **anon / public** key.

## 3. Update Local Environment

1. Open your project in VS Code.
2. Open the `.env.local` file (create it if it doesn't exist).
3. Update the values with your NEW keys:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_new_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_new_anon_key
   ```

4. **Restart your local server** (`Ctrl+C`, then `npm run dev`).

## 4. Run Setup Script

1. In VS Code, open `sql_scripts/fresh_setup.sql`.
2. Copy the entire contents of the file.
3. Go to your Supabase Dashboard -> **SQL Editor**.
4. Paste the code and click **Run**.
   - This will create all tables, functions, storage buckets, and enable realtime.

## 5. Verify Setup

1. Go to **Table Editor**. You should see tables like `profiles`, `messages`, `rooms`, etc.
2. Go to **Storage**. You should see buckets `gossip-avatars` and `chat-attachments`.
3. Go to **Replication** (under Database) or verify usually the script enables it automatically.

## 6. Create Test User

1. Go to your app (`localhost:3000`).
2. Sign up with a new account.
3. Check `profiles` table in Supabase to confirm the user was created.

Your backend is now fully ready!

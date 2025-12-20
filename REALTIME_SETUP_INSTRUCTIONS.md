# Critical Realtime Setup Instructions

## ⚠️ IMPORTANT: You MUST enable Realtime in Supabase Dashboard

The SQL scripts alone are not enough. You need to **manually enable Realtime** in your Supabase project:

### Step 1: Go to Supabase Dashboard

1. Open your Supabase project at <https://supabase.com/dashboard>
2. Navigate to **Database** → **Replication** (in the left sidebar)

### Step 2: Enable Realtime for Tables

You need to enable Realtime for these tables:

- ✅ `profiles`
- ✅ `connections`
- ✅ `rooms`
- ✅ `room_participants`
- ✅ `messages`
- ✅ `calls`
- ✅ `ice_candidates`
- ✅ `statuses`

**How to enable:**

1. Find each table in the list
2. Toggle the switch next to it to **ON** (it will turn green)
3. Click **Save** at the bottom

### Step 3: Verify

After enabling, you should see all tables listed under "Realtime enabled tables"

### Step 4: Restart Your App

After enabling Realtime in the dashboard, restart your Expo app completely.

---

## Why This Is Needed

Supabase Realtime is a **separate service** that needs to be enabled in the dashboard. The SQL scripts only set up the database structure, but the Realtime API itself must be turned on manually.

The error `400 Bad Request` means Realtime is trying to connect but the service is not enabled for your project.

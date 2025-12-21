-- Run this in Supabase SQL Editor to manually confirm all pending users
-- This allows you to log in immediately without waiting for the email.

UPDATE auth.users
SET email_confirmed_at = now()
WHERE email_confirmed_at IS NULL;

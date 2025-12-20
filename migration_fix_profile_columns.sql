-- Migration to add missing columns to profiles table
alter table public.profiles 
add column if not exists age integer,
add column if not exists phone text,
add column if not exists gender text;

-- Update the handle_new_user function to include these if they come from metadata
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, username, full_name, avatar_url, age, phone, gender)
  values (
    new.id,
    new.raw_user_meta_data ->> 'username',
    new.raw_user_meta_data ->> 'full_name',
    new.raw_user_meta_data ->> 'avatar_url',
    (new.raw_user_meta_data ->> 'age')::integer,
    new.raw_user_meta_data ->> 'phone',
    new.raw_user_meta_data ->> 'gender'
  );
  return new;
end;
$$;

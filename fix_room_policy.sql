-- ADD UPDATE POLICY FOR ROOMS
CREATE POLICY "Room owner/creator update" ON public.rooms 
FOR UPDATE USING (auth.uid() = created_by);

-- Ensure all room participants can view room details
DROP POLICY IF EXISTS "Room visibility" ON public.rooms;
CREATE POLICY "Room visibility" ON public.rooms 
FOR SELECT USING (
  EXISTS (SELECT 1 FROM public.room_participants WHERE room_id = public.rooms.id AND user_id = auth.uid())
);

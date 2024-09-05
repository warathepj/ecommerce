// app/test1/page.js
   'use client';
   import { useSession } from 'next-auth/react';
   import Loading from '@/app/components/Loading';

   function ClientComponent() {
       const { data: session, status } = useSession();

       if (status === 'loading') {
           return <Loading/>;
       }

       if (status === 'authenticated') {
           return (
               <div>
                   <p>Welcome, {session.user.name}!</p>
                   {/* Display other user information or protected content */}
               </div>
           );
       }

       return <p>Please log in.</p>; 
   }

   export default ClientComponent;

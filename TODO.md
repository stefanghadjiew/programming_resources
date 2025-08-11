#08.09.2025
[ ] Create user schema
[ ] Create resource schema
[X] Add Better auth
[ ] Add email/password login with socials
[X] Github
[ ] Facebook
[ ] Google
[ ] Integrate Better auth with convex ( probably need to create a DB adapter to handle automatic storage in Convex from Better auth)
[X] Create login form ( maybe see shadcn ui )
[X] Create signup form ( maybe see shadcn ui )
[X] Create login page
[ ] Create signup page
[ ] Create ProtectedLayout client component to redirect to login/signup if user is not authenticated
[ ] Create main navigation component ( still need to think about what we need there , since the sidebar will handle going through different resources by type )
[ ] Create Footer component
[X] Create sign out flow
[X] Create 404 not found page
[ ] Create OnThisPage component with contents of the current page
[X] Extract login Button for providers in a separate component and handle logic there
[X] Extract form in separate component with prop of type = login/signup and encapsulate ui + action in that component
[X] Fix issue where clicking on ProviderLoginButton triggers form validation
[ ] In server actions (auth) persist the created user in DB once DB adapter is done
[ ] Add link between Login and Signup pages
[ ] Sign up form has wrong footer ( needs a link to log in )
[ ] Create landing page and redirect to /resources when there is an active session
[ ] Add Back To Home from login page and sign up page (maybe crete BackToHomeButton)

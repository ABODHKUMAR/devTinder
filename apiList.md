# DevTinder APIs

authRouter
- POST /signup
- POST /logout
- GET /profile
- PATCH /profile

profileRouter
- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/password

connectionRequestRouter
- POST /request/send/intereted/:userId
- POST /request/send/ignored/:userId
- POST /request/review/accepted/:requestId
- POST /request/review/rejected/:requestId

userRouter
- GET user/connection
- GET user/request
- GET user/feed - Gets you profile of othre users on platform


Status : ignore , interested, accepted, rejected


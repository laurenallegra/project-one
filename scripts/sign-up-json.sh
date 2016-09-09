#!/bin/bash

#curl "http://localhost:3000/sign-up" \
curl "http://httpbin.org/post" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data ""

# Below is example brian sent out in slack channel - replace with hard-coded
# stuff and paste into terminal
  curl "http://httpbin.org/post" \
   --include \
   --request POST \
   --header "Content-Type: application/json" \
   --data "{
     \"credentials\": {
       \"email\": \"${EMAIL}\",
       \"password\": \"${PASSWORD}\",
       \"password_confirmation\": \"${PASSWORD}\"
     }
   }"

# hard-coded example
   curl --include --request POST http://localhost:3000/sign-up \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "test@test.com",
      "password": "123",
      "password_confirmation": "123"
    }
  }'

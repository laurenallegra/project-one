#!/bin/bash

# curl "http://localhost:3000/sign-out/$ID" \
curl --include --request DELETE http://localhost:3000/sign-out/$ID \
  --header "Authorization: Token token=$TOKEN"

curl --include --request DELETE http://localhost:3000/sign-out/5 \
    --header "Authorization: Token token=BAhJIiU1YTExNGUzNTEzYjBkNWU2YzYxOTU4NGZiM2ZjM2Y1ZAY6BkVG--c89d5d0306781ab23065b73a650f9eed6745585d"

# GET request for an authenticated resource
curl --include --request GET http://localhost:3000/users/6 \
--header "Authorization: Token token=BAhJIiUxMzUzZTU1MTY1ODM5ODU2YmVmODMwNWIxZGI2OTlkYwY6BkVG--604453f27dc0a927a6d4fd0c19e720243b108b14" \
--header "Content-Type: application/json"

# data output from curl doesn't have a trailing newline
echo

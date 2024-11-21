## Copy the files to ../mailsender as dist after building the project
npm run build

rm -rf ../mailsender/dist


cp -r dist ../mailsender

echo "Deployed to ../mailsender/dist"

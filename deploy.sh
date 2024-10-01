# build with to run build then deploy to codigomorga.es
#
# Usage: ./deploy.sh
#
echo "Building and deploying to codigomorga.es"
npm run build

if [ $? -ne 0 ]; then
    echo "Build failed"
    exit 1
fi

echo "Build successful"

# Remove old portfolio folder
rm -rf portfolio

# Rename dist folder to portfolio
mv dist portfolio

USER=morgade
SERVER=codigomorga.es
REMOTE_DIR="/var/www/html"

echo "Deleting old files on $SERVER"

ssh $USER@$SERVER "rm -rf $REMOTE_DIR/portfolio"

echo "Deploying to $SERVER"
# Copy the folder to the server
scp -r portfolio $USER@$SERVER:$REMOTE_DIR

if [ $? -ne 0 ]; then
    echo "Deploy failed"
    exit 1
fi

echo "Deploy successful"


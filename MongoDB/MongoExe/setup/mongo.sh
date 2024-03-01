#!/bin/bash

# Function to check if MongoDB is installed
is_mongodb_installed() {
    dpkg -l | grep -q "mongodb-org"
}

# Check if MongoDB is already installed
if is_mongodb_installed; then
    echo "MongoDB is already installed."
else
    # Update the package list and install required dependencies
    sudo apt update
    sudo apt install -y gnupg wget

    # Import the MongoDB GPG key and add the MongoDB APT repository
    wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
    echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list

    # Download libssl1.1_1.1.1f-1ubuntu2_amd64.deb
    wget http://archive.ubuntu.com/ubuntu/pool/main/o/openssl/libssl1.1_1.1.1f-1ubuntu2_amd64.deb

    # Install libssl1.1
    sudo dpkg -i libssl1.1_1.1.1f-1ubuntu2_amd64.deb
    sudo apt install -f  # Install any missing dependencies

    # Update the package list again to include MongoDB packages
    sudo apt update

    # Install MongoDB 4.4
    sudo apt install -y mongodb-org
fi

# Start MongoDB if it's not already running
if ! systemctl is-active --quiet mongod; then
    sudo systemctl start mongod
fi

# Enable MongoDB to start on boot
sudo systemctl enable mongod

# Check the status of MongoDB to ensure it's running
if systemctl is-active --quiet mongod; then
    echo "MongoDB 4.4 is running."
else
    echo "MongoDB installation or startup failed. Please check the error messages above."
fi

# Clean up by removing the downloaded file
rm -f libssl1.1_1.1.1f-1ubuntu2_amd64.deb


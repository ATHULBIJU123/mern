#!/bin/bash

# Function to check if MongoDB is installed
is_mongodb_installed() {
    dpkg -l | grep -q "mongodb-org"
}

# Check if MongoDB is installed
if is_mongodb_installed; then
    # Stop the MongoDB service if it's running
    if systemctl is-active --quiet mongod; then
        sudo systemctl stop mongod
    fi

    # Remove MongoDB packages
    sudo apt remove -y mongodb-org*

    # Remove MongoDB data and configurations (Use with caution!)
    sudo apt purge -y mongodb-org*

    # Clean up MongoDB related directories
    sudo rm -r /var/log/mongodb
    sudo rm -r /var/lib/mongodb

    echo "MongoDB 4.4 has been uninstalled."
else
    echo "MongoDB is not installed."
fi

# Check if libssl1.1 is installed
if dpkg -l | grep -q "libssl1.1"; then
    # Remove libssl1.1 package
    sudo apt remove -y libssl1.1

    echo "libssl1.1 has been uninstalled."
else
    echo "libssl1.1 is not installed."
fi


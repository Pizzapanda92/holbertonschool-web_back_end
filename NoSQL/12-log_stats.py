#!/usr/bin/env python3
"""Log stats from collection in MongoDB."""
from pymongo import MongoClient

METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE"]


def log_stats(mongo_collection):
    """
    Script that provides stats about Nginx logs stored in MongoDB.
    """
    # Count total number of logs
    total_logs = mongo_collection.count_documents({})
    print(f"{total_logs} logs")

    # Count number of logs for each HTTP method
    print("Methods:")
    for method in METHODS:
        method_count = mongo_collection.count_documents({"method": method})
        print(f"\tmethod {method}: {method_count}")

    # Count number of logs for GET method with path "/status"
    status_check = mongo_collection.count_documents(
        {"method": "GET", "path": "/status"})
    print(f"{status_check} status check")


if __name__ == "__main__":
    # Connect to the MongoDB instance and select the collection
    client = MongoClient('mongodb://127.0.0.1:27017')
    nginx_collection = client.logs.nginx
    log_stats(nginx_collection)
"use client";

import SiteLayout from "@/components/custom/layout/site/SiteLayout";
import React from "react";
import { Divider, Typography } from "antd";

const { Title, Paragraph, Text, Link } = Typography;

const page = () => {
  return (
    <SiteLayout>
      <div className="flex flex-col my-4 max-w-5xl w-full">
        <Typography>
          <Title>API Documentation: Accessing Datasets</Title>
          <Title level={2}>Overview</Title>
          <Paragraph>
            Welcome to the dataset access API documentation. This guide will
            help developers integrate with our API to access public datasets and
            dataset statistics. Ensure you have your API key ready, as it is
            required for authentication.
          </Paragraph>
          <Title level={2}>Base URL</Title>
          <Paragraph>All API endpoints are relative to the base URL:</Paragraph>
          <Text code copyable>
            https://municonnect.render.com/api
          </Text>
          <Title level={2}>Authentication</Title>
          <Paragraph>
            Authentication is performed using an API key, which must be included
            in the x-api-key header for each request. Getting an API Key
          </Paragraph>
          <Paragraph>To obtain an API key:</Paragraph>
          <Paragraph>
            <ul>
              <li>
                <Link href="/sign-in">Sign in to your account.</Link>
              </li>
              <li>
                <Link href="/overview">
                  Navigate to the API Key section on your dashboard.
                </Link>
              </li>
              <li>Copy the Key</li>
            </ul>
          </Paragraph>
          <Title level={2}>Endpoints</Title>
          <Title level={3}>
            Get Public Datasets Retrieve a list of public datasets.
          </Title>
          <Paragraph>Endpoint:</Paragraph>
          <Text code copyable>
            GET /api/datasets/public
          </Text>
          <Paragraph>Headers:</Paragraph>
          <Text code copyable>
            x-api-key: YOUR_API_KEY
          </Text>
          <Paragraph>Response:</Paragraph>
          <Paragraph>
            <ul>
              <li>
                <Text type="success" code>
                  200 OK
                </Text>
                <Paragraph className="p-2" code copyable>
                  {`
            "datasets": [
              {
                "_id": "dataset_id",
                "name": "Dataset Name",
                "owner": "Owner Name",
                "releaseDate": "2023-01-01T00:00:00.000Z",
                "lastModified": "2023-01-01T00:00:00.000Z",
                "licence": "License Type",
                "description": "Description of the dataset",
                "tags": ["tag1", "tag2"],
                "fields": [
                  {
                    "name": "Field Name",
                    "type": "Field Type",
                    "desc": "Field Description"
                  }
                ],
                "files": {
                  "mainFile": "url_to_main_file",
                  "otherFiles": ["url_to_other_file1", "url_to_other_file2"]
                },
                "numRows": 1000,
                "numColumns": 10,
                "fileSize": 1024,
                "associatedArticles": ["article1", "article2"],
                "domain": "Domain Name",
                "ratings": [5, 4, 3],
                "language": "Language",
                "isPrivate": false,
                "isApproved": true,
                "reasonForRemoval": null,
                "summary": "Summary of the dataset",
                "downloads": 100,
                "featured": false,
                "averageRating": 4.0
              }
            ]
            `}
                </Paragraph>
              </li>
              <li>
                <Text type="danger" code>
                  401 Unauthorized
                </Text>
                <Text>Invalid or missing API key.</Text>
              </li>
            </ul>
          </Paragraph>
          <Title level={3}>Get Dataset Statistics</Title>
          <Paragraph>Retrieve statistics about datasets.</Paragraph>
          <Paragraph>Endpoint:</Paragraph>
          <Text code copyable>
            GET /api/datasets/statistics
          </Text>
          <Paragraph>Headers:</Paragraph>
          <Text code copyable>
            x-api-key: YOUR_API_KEY
          </Text>
          <Paragraph>Response:</Paragraph>
          <Paragraph>
            <ul>
              <li>
                <Text type="success" code>
                  200 OK
                </Text>
                <Paragraph code copyable>
                  {`
            {
              "stats": {
                "totalDatasets": 100,
                "totalDownloads": 5000,
                "totalUsers": 200,
                "totalMessages": 150
              }
            }
            
            `}
                </Paragraph>
              </li>
              <li>
                <Text type="danger" code>
                  401 Unauthorized
                </Text>
                <Text>Invalid or missing API key.</Text>
              </li>
            </ul>
          </Paragraph>
          <Title level={2}>Error Handling</Title>
          <Paragraph>Common error responses include:</Paragraph>
          <Paragraph>
            <ul>
              <li>
                <Text type="danger" code>
                  400 Bad Request
                </Text>
                : The request is malformed or missing required parameters.
              </li>
              <li>
                <Text type="danger" code>
                  401 Unauthorized
                </Text>
                : The API key is invalid or missing.
              </li>
              <li>
                <Text type="danger" code>
                  404 Not Found
                </Text>
                : The requested resource does not exist.
              </li>
              <li>
                <Text type="danger" code>
                  500 Internal Server Error
                </Text>
                : An unexpected error occurred on the server.
              </li>
            </ul>
          </Paragraph>
          <Title level={2}>Rate Limiting</Title>
          <Paragraph>
            To ensure fair usage, the API enforces rate limits. If you exceed
            these limits, you will receive a 429 Too Many Requests response.
          </Paragraph>
          <Title level={2}>Example Requests</Title>
          <Paragraph>Curl Example: Get Public Datasets</Paragraph>
          <Text code copyable>
            curl -H "x-api-key: YOUR_API_KEY"
            https://municonnect.render.com/api/dev/get-municonnect-datasets
          </Text>
          <Paragraph>Curl Example: Get Dataset Statistics</Paragraph>
          <Text code copyable>
            curl -H "x-api-key: YOUR_API_KEY"
            https://api.yourplatform.com/api/get-municonnect-datasets-stats
          </Text>
          <Title level={2}>Contact and Support</Title>
          <Paragraph>
            If you encounter any issues or have questions, please contact our
            support team at support@yourplatform.com.
          </Paragraph>
          <Title level={2}>Conclusion</Title>
          <Paragraph>
            With this guide, you should be able to easily integrate with our API
            and access the datasets and statistics you need. Happy coding!
          </Paragraph>
        </Typography>
      </div>
    </SiteLayout>
  );
};

export default page;

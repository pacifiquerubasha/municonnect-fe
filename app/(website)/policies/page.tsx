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
          <Title>Data Governance</Title>
          <Paragraph>
            Data governance is a critical framework that ensures the proper
            management, security, and utilization of data within an
            organization. It encompasses the policies, procedures, and
            technologies that enable data to be managed as a valuable asset,
            ensuring its integrity, security, and availability for authorized
            use.
          </Paragraph>
          <Title level={3}>Access Controls</Title>
          <Paragraph>
            We have implemented robust access controls to safeguard your
            information. Only authorized individuals can access and manipulate
            data, with permissions assigned based on their roles. Additionally,
            audit logs keep track of who accessed data and when, ensuring
            accountability and security.
          </Paragraph>
          <Title level={3}>Data Policies</Title>
          <Paragraph>
            Our data policies are designed to protect and manage your data
            consistently and in compliance with legal requirements. We
            categorize data based on its sensitivity, ensuring that personal and
            sensitive information is protected in line with privacy laws like
            GDPR and CCPA. Our data retention policies outline how long data is
            stored and when it is deleted or archived, maintaining only what is
            necessary and ensuring data is accurate and reliable.
          </Paragraph>
          <Title level={3}>Collaboration</Title>
          <Paragraph>
            Collaboration is key to maximizing the value of data, and we promote
            effective data sharing across teams while maintaining control and
            security. Data stewards are responsible for managing data assets,
            and we have data sharing agreements in place to govern how data is
            shared between parties. Our collaborative platforms facilitate
            communication and data sharing, while training programs ensure that
            everyone is aware of data governance policies and best practices.
          </Paragraph>
          <Title level={3}>Data Security</Title>

          <Paragraph>
            To protect your data from unauthorized access and breaches, we use
            encryption and data masking techniques. Continuous security
            monitoring helps us identify and address potential threats, and we
            have a detailed incident response plan to handle any data breaches
            swiftly and effectively.
          </Paragraph>
          <Title level={3}>Compliance</Title>

          <Paragraph>
            Compliance with relevant laws and regulations is a cornerstone of
            our data governance practices. We adhere to regulatory requirements
            such as GDPR, HIPAA, and CCPA, and conduct regular internal audits
            to ensure compliance. Detailed documentation and reporting support
            these efforts, helping us demonstrate compliance and prepare for
            audits.
          </Paragraph>
          <Title level={3}>Data Lifecycle Management</Title>
          <Paragraph>
            Our data governance framework also includes data lifecycle
            management, covering everything from data creation to disposal. We
            ensure data is created accurately, stored securely, used ethically,
            archived safely when no longer in active use, and disposed of
            securely in compliance with retention policies.
          </Paragraph>
        </Typography>
      </div>
    </SiteLayout>
  );
};

export default page;

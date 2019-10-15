#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { AwsCdkSsmSampleStack } from '../lib/aws-cdk-ssm-sample-stack';

const app = new cdk.App();
new AwsCdkSsmSampleStack(app, 'AwsCdkSsmSampleStack', {
  env: {
    region: 'ap-northeast-1',
    account: '<YOUR ACCOUNT ID>',
  }
});

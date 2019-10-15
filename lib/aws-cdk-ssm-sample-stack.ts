import cdk = require('@aws-cdk/core');
import ssm = require('@aws-cdk/aws-ssm');
import s3 = require("@aws-cdk/aws-s3");

export class AwsCdkSsmSampleStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const BUCKET_NAME = ssm.StringParameter.valueFromLookup(this, 'BUCKET_NAME');
    new s3.Bucket(this, BUCKET_NAME);
  }
}

import * as cdk from 'aws-cdk-lib/core';
import { Template } from 'aws-cdk-lib/assertions';
import { FabricStack } from '../lib/fabricStack';

const baseProps = {
  appName: 'test-fabric',
  environment: 'test',
};

test('FabricStack creates EventBridge bus and DynamoDB tables', () => {
  const app = new cdk.App();
  const stack = new FabricStack(app, 'TestFabricStack', baseProps);
  const template = Template.fromStack(stack);

  template.resourceCountIs('AWS::Events::EventBus', 1);
  template.resourceCountIs('AWS::DynamoDB::Table', 3);
});

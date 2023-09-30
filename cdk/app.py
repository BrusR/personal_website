#!/usr/bin/env python3

import aws_cdk as cdk

from cdk.cdk_stack import PersonalWebsite

app = cdk.App()
account_id = app.node.try_get_context("account_id")


PersonalWebsite(
    app,
    "portfolio-web-stack",
    certificate_arn=f'arn:aws:acm:us-east-1:{account_id}:certificate/b27da0fa-5d58-4c34-b5b9-d0bd804f9d61',
    domain_name="www.brusrojas.com",
)

app.synth()

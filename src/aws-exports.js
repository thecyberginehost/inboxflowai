// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "us-east-1",
    "aws_cognito_identity_pool_id": "us-east-1:7f5611da-e16e-4856-8193-c0ffdcc679e1",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_ux7mhKVMF",
    "aws_user_pools_web_client_id": "7rn409257bnqfcq7kkjf64he8l",
    "oauth": {
        "domain": "inboxflowai.auth.us-east-1.amazoncognito.com",
        "scope": ["email", "openid", "profile"],
        "redirectSignIn": "https://inboxflowai.com/confirmation-success",
        "redirectSignOut": "https://inboxflowai.com",
        "responseType": "code"
    },
    "aws_cognito_username_attributes": [
        "EMAIL"
    ],
    "aws_cognito_social_providers": [],
    "aws_cognito_signup_attributes": [
        "EMAIL",
        "NAME"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ],
    "aws_content_delivery_bucket": "inboxflowai-20250224135945-hostingbucket-dev",
    "aws_content_delivery_bucket_region": "us-east-1",
    "aws_content_delivery_url": "https://inboxflowai.com"
};

export default awsmobile;

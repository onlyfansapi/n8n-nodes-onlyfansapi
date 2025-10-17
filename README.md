# n8n-nodes-onlyfansapi
![Example workflow](/images/example.png)

This is an n8n community node. It lets you use OnlyFans API in your n8n workflows.

OnlyFans API is an unofficial API for OnlyFans, a popular content subscription service, to automate your workflows with ease.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Usage](#usage)
[Resources](#resources)
[Version history](#version-history)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

This node supports the following resources and operations:

### Account
- **Get Account** - Get OnlyFans Profile details for an Account
- **Get Many** - List many connected OnlyFans accounts
- **Get Model Start Date** - Get the start date of the model (the date+time monetization was enabled)
- **Disconnect Account** - Disconnect an OnlyFans account

### API Key
- **Whoami** - Get details about the currently used API Key & the relevant Team

### Banking
- **Get Account Country Details** - Returns the account owner's country details for banking
- **Get Bank Payout Details** - Returns the account owner's bank payout details
- **Get DAC7 Form Details** - Returns the account owner's DAC7 form information required for tax reporting
- **Get Legal and Tax Status** - Returns the account owner's legal and tax status required for banking
- **Get Legal Form Details** - Returns the account owner's legal form details for banking
- **List Available Payout Systems** - Returns a list of available payout systems for the account
- **List Countries** - Returns a list of countries available for banking configuration

### Chargeback
- **Calculate Chargeback Ratio** - Calculate the chargeback ratio (chargebacks vs total payments)
- **Get Many** - Retrieve a list of chargebacks within a specified date range
- **List Chargeback Statistics** - List chargeback counts & amounts per hour, day or month

### Chat
- **Get Many** - Get the list of chats for an Account
- **List Chat Media (Gallery)** - List media files shared in a specific chat
- **Mute Chat Notifications** - Mute notifications for a specific chat
- **Start Typing Indicator** - Start the typing indicator for a specific chat
- **Unmute Chat Notifications** - Unmute notifications for a specific chat

### Chat Message
- **Delete Message** - Delete a message from a chat (only messages sent less than 24 hours ago)
- **Get Many** - Get messages from a specific chat
- **Like Message** - Like a chat message
- **Pin Message** - Pin a message from a chat
- **Send Message** - Send a new message to a chat
- **Unlike Message** - Unlike a chat message
- **Unpin Message** - Unpin a message from a chat

### Client Session
- **Create Client Session** - Create Client Session Token for later use in embedded auth components

### Connect OnlyFans Account
- **Poll Authentication Status** - Poll the status of the authentication process
- **Re-Authenticate Account** - Trigger account reauthentication without the need to submit email & password again
- **Start Authentication** - Start the authentication process for a new account
- **Submit 2FA** - Submit the 2FA code for the authentication process

### Fan
- **List Active Fans** - Get a paginated list of active fans for an Account
- **List All Fans** - Get a paginated list of all fans for an Account
- **List Expired Fans** - Get a paginated list of expired fans for an Account
- **List Latest Fans** - Get a paginated list of latest fans for an Account
- **Set Custom Name** - Change the fan's custom name shown in OnlyFans

### Following
- **List Active Followings** - Get a paginated list of active followings for an Account
- **List All Followings** - Get a paginated list of all followings for an Account
- **List Expired Followings** - Get a paginated list of expired followings for an Account

### Free Trial Link
- **Create Free Trial Link** - Create a free trial link for the account
- **Delete Free Trial Link** - Delete a free trial link by its ID
- **Get Many** - List many free trial links for the account, including the details and statistics
- **List Free Trial Link Spenders** - Only available if we already scraped subscribers and calculated revenue per fan
- **List Free Trial Link Subscribers** - Get list of subscribers who joined through a Free Trial Link

### Mass Messaging
- **Get Mass Message** - Get the content of a mass message
- **List Mass Message Queue** - List the pending or recently sent mass messages in the message queue
- **List Mass Message Statistics** - List mass messaging statistics, showing the send count and view count
- **Send Mass Message** - Send a mass message to lists and/or users
- **Unsend/Delete Mass Message** - Unsend a recently sent mass message, or delete a scheduled/saved message
- **Update Mass Message** - Update a mass message

### Media
- **Scrape Media From The OnlyFans CDN** - Scrapes a https://cdn*.onlyfans.com/* URL and uploads it to the OnlyFans API CDN (max file size: 500MB)

### Media Vault
- **Delete Vault Media** - Delete one or multiple media from your vault
- **Get Many** - List media items stored in your vault

### Media Vault List
- **Add Media To List** - Add one or multiple media to a list
- **Create Vault List** - Create a new Vault list
- **Delete Vault List** - Delete a Vault list
- **Get Many** - List your Vault lists (categories)
- **Remove Media From List** - Remove one or multiple media from a list
- **Rename Vault List** - Rename a Vault list
- **Show Vault List** - Show a Vault list

### Notification
- **Get Many** - List many notifications for the account
- **Get Notification Counts** - Get a quick overview of all unread notification types
- **Get Notification Tabs Order** - Get the order of an account's notification tabs
- **Mark All Notifications As Read** - Mark all notifications of this account as read
- **Search Users In Notifications** - Search users that have appeared in your notifications
- **Update Notification Tabs Order** - Update the order of an account's notification tabs

### Payout
- **Get Account Balances** - Get the current available and pending balances for the account
- **Get Earning Statistics** - Get total and monthly time-series earning statistics for the account
- **Get Eligibility** - Get the eligibility details for receiving payouts
- **List Payout Requests** - List all payout requests for the account
- **List Transactions (Earnings)** - List all transactions for the account
- **Request Manual Withdrawal** - Request a payout withdrawal, if the frequency is set to manual
- **Update Payout Frequency** - Update the payout frequency for the account (Manual, Weekly or Monthly)

### Post
- **Archive Post** - Archive a post from your account
- **Delete Post** - Delete a post from your account
- **Get** - Retrieve details of a post from your account
- **Get Many** - Get posts from your OnlyFans account
- **Pin/Unpin Post** - Pin or unpin a post to your account
- **Send Post** - Compose and send a new post to your OnlyFans account
- **Show Post Statistics** - Get statistics for a specific post
- **Unarchive Post** - Unarchive a post from your account
- **Update Post** - Update a posted, queued, or "saved for later" post

### Post Comment
- **Create Comment** - Create a comment on one of your posts
- **Delete Comment** - Delete a comment on one of your posts
- **Get Many** - Get comments from one of your posts
- **Like Comment** - Like a comment on one of your posts
- **Pin Comment** - Pin a comment on one of your posts
- **Unlike Comment** - Unlike a comment on one of your posts
- **Unpin Comment** - Unpin a comment from one of your posts

### Post Label
- **Create Label** - Create a new post label
- **Get Many** - List the labels that you can use to organize your posts

### Public Profile
- **Get** - Get profile details by username
- **Search** - Full-text search for profiles with filters

### Queue
- **Count Items** - Count posts and messages in the queue
- **Get Many** - List posts and messages in the queue
- **Publish Item** - Publish a queue item or "saved for later" item immediately

### Saved For Later Message
- **Disable Automatic Messaging** - Disable automatic messaging of Saved For Later messages
- **Enable Automatic Messaging** - Enable or update automatic messaging of Saved For Later messages
- **Get Many** - List many messages that are marked as "Save For Later"
- **Get Settings** - Get the Saved For Later message settings

### Saved For Later Post
- **Disable Automatic Posting** - Disable automatic posting of Saved For Later posts
- **Enable Automatic Posting** - Enable or update automatic posting of Saved For Later posts
- **Get Many** - List many posts that are marked as "Save For Later"
- **Get Settings** - Get the Saved For Later post settings

### Setting
- **Check Username Availability** - Check if a username is taken
- **Get Settings** - Returns the account settings
- **Update Profile** - Update the account profile

### Statistic
- **Calculate Total Transactions** - Calculate the total transactions and amounts
- **Get Earnings** - Get the earnings for a given period
- **Get Profile Visitors** - Get the number of profile visitors for a given period
- **Get Subscriber Metrics** - Get subscriber metrics for a given period
- **Get Subscriber Statistics** - Get subscriber statistics for a given period
- **Overview** - Get an overview of statistics

### Tracking Link
- **Create** - Create a new tracking link
- **Delete** - Delete a tracking link
- **Get Many** - List many tracking links for the account with revenue data
- **Get Spenders** - Get list of spenders who made purchases through a tracking link
- **Get Subscribers** - Get list of subscribers who joined through a tracking link

### Transaction
- **Get Many** - Get a paginated list of transactions for an account (newest first)

### User
- **Get** - Get OnlyFans profile details for a given username

### User List
- **Add Users to User List** - Add multiple Users To OnlyFans User List
- **Create User List** - Create a OnlyFans User List
- **Delete User List** - Delete a OnlyFans User List
- **Get** - Get a single user list
- **Get Many** - Get a list of OnlyFans Collections - User Lists
- **Get Users in List** - Get all users in a OnlyFans user list
- **Remove User From a User List** - Remove User from OnlyFans User List
- **Update User List** - Update a OnlyFans User List

### Webhook
- **Create** - Create a new webhook for your team
- **Delete** - Delete an existing webhook

## Credentials

To make use of the OnlyFans API node, you must have an OnlyFans API account. Follow these simple steps:
1. Sign up for an account at [OnlyFans API](https://app.onlyfansapi.com)
2. Go to the OnlyFans API console -> API Keys
    ![API Keys navigation item](/images/api-keys/api-keys-nav-item.png)
3. Create a new API key
    ![Create API Key button](/images/api-keys/create-api-key-button.png)
4. Give it a name, and press "Add"
    ![API Key creation form](/images/api-keys/api-key-creation-form.png)
5. Copy the API key to your clipboard
    ![Save API Key](/images/api-keys/save-api-key.png)
6. In n8n, create a new credential for the OnlyFans API node, and paste the API key into the "API Key" field.

## Compatibility
Tested with n8n version 1.115.0 and above. Earlier versions may work but are not officially supported.

## Usage
### Getting Started with n8n

If you're new to n8n, check out the [Try it out](https://docs.n8n.io/try-it-out/) documentation to help you get started with the basics of building workflows.

### Understanding OnlyFans API

Before using this node, we recommend familiarizing yourself with the [OnlyFans API documentation](https://docs.onlyfansapi.com/introduction) to understand:

- What OnlyFans API is and what it offers
- The available features and capabilities
- How to work with OnlyFans accounts
- Best practices for API usage

The OnlyFans API platform provides a comprehensive REST API that allows you to interact with OnlyFans without needing to build your own proxy management system or reverse engineer the API. With this n8n node, you can easily integrate these capabilities into your automated workflows.

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
* [OnlyFans API introduction](https://docs.onlyfansapi.com/introduction)
* [Connecting an OnlyFans account](https://docs.onlyfansapi.com/introduction/guides/connect-onlyfans-account)
* [OnlyFans API credit structure](https://docs.onlyfansapi.com/introduction/essentials/credits)
* [API reference](https://docs.onlyfansapi.com/api-reference)
* [Webhooks](https://docs.onlyfansapi.com/webhooks)
* [FAQ](https://docs.onlyfansapi.com/faq)

## Version history
### 0.1
- Initial release with support for all OnlyFans API resources and operations.
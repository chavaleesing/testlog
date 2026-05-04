# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

--------------

This is backend for line messaging api

Please Setup project for manage data from LINE messaging api
- Choose Node.js OR Python with FastAPI for backend
- This is docs about LINE messaging API 
```# Messaging API overview

Use the Messaging API to build bots to provide personalized experiences on LINE to your users.

<!-- tip start -->

**What is LINE Official Account**

If you are unfamiliar with LINE Official Account, visit the comprehensive learning platform, [LY Marketing Campus](https://lymcampus.jp/) (only available in Japanese).

<!-- tip end -->

## How the Messaging API works 

With the Messaging API, a bot server can send and receive data to and from the LINE Platform. Requests are sent over HTTPS in JSON. The communication flow between a bot server and the LINE Platform is as follows:

1. A user sends a message to a LINE Official Account.
1. The LINE Platform sends a webhook event to the webhook URL of the bot server.
1. The bot server checks the webhook event and responds to the user through the LINE Platform.

![](https://developers.line.biz/media/messaging-api/overview/messaging-api-architecture.png)

## Try the demo 

Try using the demo to experience Messaging API for yourself. You can view the demo on your smartphone. Scan the QR code to add the LINE Official Account for the demo as a friend.

![](https://developers.line.biz/media/messaging-api/demo/messaging-api-demo-qr-code-en.png)

<!-- note start -->

**Data the Demo App Retrieves**

The LINE Official Account for the demo has a function to send your device's location information. If you do not wish to send this information, turn off the location sharing function on your device before using the service. We will also collect some of your profile information (user ID) from your LINE account. However, this information isn't stored on the server. Please understand the above before using this service.

<!-- note end -->

## What you can do with the Messaging API 

Here are the things you can do with the Messaging API.

### Send reply messages 

With the Messaging API, you can send reply messages to users who added your LINE Official Account as a friend. For more information, see [Sending messages](https://developers.line.biz/en/docs/messaging-api/sending-messages/).

### Send messages at any time 

With the Messaging API, you can send messages directly to users at all times. For more information, see [Sending messages](https://developers.line.biz/en/docs/messaging-api/sending-messages/).

### Send different message types 

With the Messaging API, you can send different types of messages to users as listed below. For more information about the specification of these messages, see [Message types](https://developers.line.biz/en/docs/messaging-api/message-types/).

- [Text message](https://developers.line.biz/en/docs/messaging-api/message-types/#text-messages)
- [Text message (v2)](https://developers.line.biz/en/docs/messaging-api/message-types/#text-messages-v2)
- [Sticker message](https://developers.line.biz/en/docs/messaging-api/message-types/#sticker-messages)
- [Image message](https://developers.line.biz/en/docs/messaging-api/message-types/#image-messages)
- [Video message](https://developers.line.biz/en/docs/messaging-api/message-types/#video-messages)
- [Audio message](https://developers.line.biz/en/docs/messaging-api/message-types/#audio-messages)
- [Location message](https://developers.line.biz/en/docs/messaging-api/message-types/#location-messages)
- [Coupon message](https://developers.line.biz/en/docs/messaging-api/message-types/#coupon-messages)
- [Imagemap message](https://developers.line.biz/en/docs/messaging-api/message-types/#imagemap-messages)
- [Template message](https://developers.line.biz/en/docs/messaging-api/message-types/#template-messages)
- [Flex Message](https://developers.line.biz/en/docs/messaging-api/message-types/#flex-messages)

### Get content sent by users 

With the Messaging API, you can get images, videos, audio, and files sent by users. Content that users send is automatically deleted after a period of time. For more information, see [Get content](https://developers.line.biz/en/reference/messaging-api/#get-content) in the Messaging API reference.

### Get user profiles 

With the Messaging API, you can get profile information of a user who interacts with your LINE Official Account, in one-on-one and group chats. The types of profile information you can get are user's display name, language, profile image and status message. For more information, see [Get profile](https://developers.line.biz/en/reference/messaging-api/#get-profile) in the Messaging API reference.

### Join group chats 

With the Messaging API, you can send messages in group chats and get information of the group chat members. For more information, see [Group chats and multi-person chats](https://developers.line.biz/en/docs/messaging-api/group-chats/).

### Use rich menus 

With the Messaging API, you can set and customize a rich menu in a chat. Rich menus help users find how they can interact with your LINE Official Account. Users can use this menu from the chat at all times. For more information, see [Use rich menus](https://developers.line.biz/en/docs/messaging-api/using-rich-menus/).

### Use beacons 

With LINE Beacon, you can set your LINE Official Account to interact with the user who enters a beacon region. For more information, see [Use beacons with LINE](https://developers.line.biz/en/docs/messaging-api/using-beacons/).

### Use account link 

With the Messaging API, you can securely link user accounts in your service to their LINE accounts, if they friended your LINE Official Account. For more information, see [User account linking](https://developers.line.biz/en/docs/messaging-api/linking-accounts/).

### Get the number of sent messages 

With the Messaging API, you can get the number of messages you sent from your LINE Official Account. The API returns only the number of messages sent through the Messaging API, not LINE Official Account Manager. For more information, see the following references:

- [Get the target limit for sending messages this month](https://developers.line.biz/en/reference/messaging-api/#get-quota)
- [Get number of messages sent this month](https://developers.line.biz/en/reference/messaging-api/#get-consumption)
- [Get number of sent reply messages](https://developers.line.biz/en/reference/messaging-api/#get-number-of-reply-messages)
- [Get number of sent push messages](https://developers.line.biz/en/reference/messaging-api/#get-number-of-push-messages)
- [Get number of sent multicast messages](https://developers.line.biz/en/reference/messaging-api/#get-number-of-multicast-messages)
- [Get number of sent broadcast messages](https://developers.line.biz/en/reference/messaging-api/#get-number-of-broadcast-messages)

## Messaging API pricing 

You can get started with the Messaging API for free. Anyone can use the Messaging API to send a message from a LINE Official Account.

You can send a certain number of messages each month for free. The number of free messages depends on the [subscription plan](https://www.lycbiz.com/jp/service/line-official-account/plan/) (only available in Japanese) of your LINE Official Account. The subscription plan may vary by country or region. See your region's subscription plan for more information.

For more information on Messaging API pricing, see [Messaging API pricing](https://developers.line.biz/en/docs/messaging-api/pricing/).

## Next steps 

As the next step, [get started with the Messaging API](https://developers.line.biz/en/docs/messaging-api/getting-started/) to create a bot. First, create a LINE Official Account. Once you've created a LINE Official Account, you can create a Messaging API channel for that LINE Official Account.

## Learn more 

- [Messaging API development guidelines](https://developers.line.biz/en/docs/messaging-api/development-guidelines/)
- [LINE Messaging API SDKs](https://developers.line.biz/en/docs/messaging-api/line-bot-sdk/)
- [Messaging API reference](https://developers.line.biz/en/reference/messaging-api/)
```

```# Message types

With the Messaging API, you can make your bot send these types of messages. To make a message interactive, you can specify an action on a message for users to trigger. For the specification of each message type, see [Message objects](https://developers.line.biz/en/reference/messaging-api/#message-objects) in the Messaging API reference.

- [Text message](https://developers.line.biz/en/docs/messaging-api/message-types/#text-messages)
- [Text message (v2)](https://developers.line.biz/en/docs/messaging-api/message-types/#text-messages-v2)
- [Sticker message](https://developers.line.biz/en/docs/messaging-api/message-types/#sticker-messages)
- [Image message](https://developers.line.biz/en/docs/messaging-api/message-types/#image-messages)
- [Video message](https://developers.line.biz/en/docs/messaging-api/message-types/#video-messages)
- [Audio message](https://developers.line.biz/en/docs/messaging-api/message-types/#audio-messages)
- [Location message](https://developers.line.biz/en/docs/messaging-api/message-types/#location-messages)
- [Coupon message](https://developers.line.biz/en/docs/messaging-api/message-types/#coupon-messages)
- [Imagemap message](https://developers.line.biz/en/docs/messaging-api/message-types/#imagemap-messages)
- [Template message](https://developers.line.biz/en/docs/messaging-api/message-types/#template-messages)
- [Flex Message](https://developers.line.biz/en/docs/messaging-api/message-types/#flex-messages)

## Text message 

Text messages contain text, including emojis. To send a text message, add the text in the [message object](https://developers.line.biz/en/reference/messaging-api/#message-objects) you send with the Messaging API. For more information, see [Text message](https://developers.line.biz/en/reference/messaging-api/#text-message) in the Messaging API reference.

![Text message](https://developers.line.biz/media/messaging-api/messages/text.png)

You can use LINE emojis and Unicode emojis in text messages. Check a list of [LINE emojis](https://developers.line.biz/en/docs/messaging-api/emoji-list/) you can send with the Messaging API.

![Emoji](https://developers.line.biz/media/messaging-api/messages/emoji.png)

<!-- tip start -->

**Text decoration and resizing**

To decorate or resize your text, use [Flex Messages](https://developers.line.biz/en/reference/messaging-api/#flex-message).

<!-- tip end -->

## Text message (v2) 

You can send text by using text messages (v2). Unlike [text messages](https://developers.line.biz/en/docs/messaging-api/message-types/#text-messages), you can substitute strings enclosed in `{` and `}` with mentions and emojis. For more information, see [Text message (v2)](https://developers.line.biz/en/reference/messaging-api/#text-message-v2) in the Messaging API reference.

![](https://developers.line.biz/media/messaging-api/messages/text-v2.png)

You can continue to use text messages that we've been providing up until now. However, we may only add new features to text messages (v2) from now on.

## Sticker message 

Stickers help you to make your bot more appealing and enjoyable to users. To send a sticker with the Messaging API, specify the sticker's package ID and sticker ID in the [message object](https://developers.line.biz/en/reference/messaging-api/#message-objects). Check a list of available [stickers](https://developers.line.biz/en/docs/messaging-api/sticker-list/) you can send. For more information, see the [Sticker message](https://developers.line.biz/en/reference/messaging-api/#sticker-message) in the Messaging API reference.

![Sticker message](https://developers.line.biz/media/messaging-api/messages/sticker.png)

## Image message 

Image messages deliver a single image file to users. When you send an image, specify two URLs in the [message object](https://developers.line.biz/en/reference/messaging-api/#message-objects). One is for the original image and one is for preview. The preview image is the image displayed in a chat, so specify an image smaller than the original image.

When the user taps the preview image, the full image is displayed as shown below. Make sure the URLs have the HTTPS (TLS 1.2 or later) protocol. For more information, see the [Image message](https://developers.line.biz/en/reference/messaging-api/#image-message) in the Messaging API reference.

![Image message](https://developers.line.biz/media/messaging-api/messages/image.png) ![Full image message](https://developers.line.biz/media/messaging-api/messages/image-full.png)

## Video message 

Video messages deliver a single video file to users. When you send a video message, specify two URLs in the [message object](https://developers.line.biz/en/reference/messaging-api/#message-objects), one for the video file and one for the preview.

LINE plays the video when the user taps the preview. Make sure the URLs have the HTTPS (TLS 1.2 or later) protocol. For more information, see the [Video message](https://developers.line.biz/en/reference/messaging-api/#video-message) in the Messaging API reference.

![Video message](https://developers.line.biz/media/messaging-api/messages/video.png)

## Audio message 

Audio messages deliver a single audio file to users. To send an audio file, specify a URL to the file and the duration in the [message object](https://developers.line.biz/en/reference/messaging-api/#message-objects).

Make sure the URL has the HTTPS (TLS 1.2 or later) protocol. For more information, see [Audio message](https://developers.line.biz/en/reference/messaging-api/#audio-message) in the Messaging API reference.

![Audio message](https://developers.line.biz/media/messaging-api/messages/audio.png)

## Location message 

Location messages deliver location information to users. Specify in the [message object](https://developers.line.biz/en/reference/messaging-api/#message-objects) the title, address, latitude coordinate, and longitude coordinate. For more information, see [Location message](https://developers.line.biz/en/reference/messaging-api/#location-message) in the Messaging API reference.

![Location message](https://developers.line.biz/media/messaging-api/messages/location-en.png)

## Coupon message 

Coupon messages deliver coupons to users by specifying a coupon ID.

![](https://developers.line.biz/media/messaging-api/coupon/several-coupons.jpg)

For more information, see [Coupon message](https://developers.line.biz/en/reference/messaging-api/#coupon-message) in the Messaging API reference.

## Imagemap message 

Imagemap messages are messages with an image that has multiple tappable areas. You can set a tappable area to open a webpage or send a message on the user's behalf. You can also set to play a video over the image and display a link text when the playback is finished. For more information, see [Imagemap message](https://developers.line.biz/en/reference/messaging-api/#imagemap-message) in the Messaging API reference.

![Imagemap message](https://developers.line.biz/media/messaging-api/messages/imagemap.png)

## Template message 

Template messages have predefined layouts that help you create richer experiences for your users. Use [actions](https://developers.line.biz/en/docs/messaging-api/actions/) to make users to interact with your bot. A tap is all that is required for users to trigger an action. This is much simpler than having to type in a message.

Available templates are:

- [Buttons](https://developers.line.biz/en/docs/messaging-api/message-types/#buttons-template)
- [Confirm](https://developers.line.biz/en/docs/messaging-api/message-types/#confirm-template)
- [Carousel](https://developers.line.biz/en/docs/messaging-api/message-types/#carousel-template)
- [Image carousel](https://developers.line.biz/en/docs/messaging-api/message-types/#image-carousel-template)

For more information about template messages, see [Template messages](https://developers.line.biz/en/reference/messaging-api/#template-messages) in the Messaging API reference. In addition, if you want to send messages with more flexible layouts, use [Flex Message](https://developers.line.biz/en/docs/messaging-api/message-types/#flex-messages).

### Buttons template 

Buttons templates contain slots for an image, title, text and [action](https://developers.line.biz/en/docs/messaging-api/actions/) buttons. In addition to buttons, you can set an action also on image, title, or text area. An action is triggered when a user taps the entity set with an action. For more information, see [Buttons template](https://developers.line.biz/en/reference/messaging-api/#buttons) in the Messaging API reference.

![Buttons template message](https://developers.line.biz/media/messaging-api/messages/buttons.png)

### Confirm template 

Confirm templates contain slots for text and two buttons. For more information, see [Confirm template](https://developers.line.biz/en/reference/messaging-api/#confirm) in the Messaging API reference.

![Confirm template message](https://developers.line.biz/media/messaging-api/messages/confirm.png)

### Carousel template 

Carousel templates contain multiple columns that users can cycle through. In addition to buttons, you can set an [action](https://developers.line.biz/en/docs/messaging-api/actions/) in each column object.

An action is triggered when a user taps anywhere in the image, title, or text area of a column object. For more information, see [Carousel template](https://developers.line.biz/en/reference/messaging-api/#carousel) in the Messaging API reference.

![Carousel template message](https://developers.line.biz/media/messaging-api/messages/carousel.png)

### Image carousel template 

Image carousel templates contain multiple images that users can cycle through. For more information, see [Image carousel template](https://developers.line.biz/en/reference/messaging-api/#image-carousel) in the Messaging API reference.

![Image carousel template message](https://developers.line.biz/media/messaging-api/messages/image-carousel.png)

## Flex Message 

Flex Messages are messages with a customizable layout. You can customize the layout within the boundary of the [CSS Flexible Box (CSS Flexbox)](https://www.w3.org/TR/css-flexbox-1/) specification. For more information, see [Send Flex Messages](https://developers.line.biz/en/docs/messaging-api/using-flex-messages/) and [Flex Message](https://developers.line.biz/en/reference/messaging-api/#flex-message) in the Messaging API reference.

![Flex Message examples](https://developers.line.biz/media/messaging-api/using-flex-messages/bubbleSamples-Update1.png)

## Common features 

This feature is applicable on all message types.

### Quick reply 

Quick reply buttons are available on all message types and displayed at the bottom of a chat. Users can tap one of the buttons to reply to your bot. For more information, see [Use quick replies](https://developers.line.biz/en/docs/messaging-api/using-quick-reply/), and [Quick reply](https://developers.line.biz/en/reference/messaging-api/#quick-reply) in the Messaging API reference.

![Quick reply sample](https://developers.line.biz/media/messaging-api/using-quick-reply/quickReplySample.png)

## Related pages 

Learn more about the Messaging API:

- [Sending messages](https://developers.line.biz/en/docs/messaging-api/sending-messages/)
- [Message objects](https://developers.line.biz/en/reference/messaging-api/#message-objects)
- [Actions](https://developers.line.biz/en/docs/messaging-api/actions/)
```

```# Get started with the Messaging API

To use the Messaging API, you must have a channel. To create a channel, create a [LINE Official Account](https://developers.line.biz/en/glossary/#line-official-account) and enable the use of Messaging API for your LINE Official Account.

This page describes how to create a Messaging API channel using the two steps described below:

1. [Create a LINE Official Account](https://developers.line.biz/en/docs/messaging-api/getting-started/#create-oa)
1. [Enable the Messaging API for your LINE Official Account](https://developers.line.biz/en/docs/messaging-api/getting-started/#using-oa-manager)

To enable the Messaging API for an existing LINE Official Account, see step 2.

<!-- tip start -->

**What is a channel?**

A **channel** is a communication path for providers to use the LINE Platform's features such as Messaging API and LINE Login in their services. To use the LINE Platform, you must have a channel. Then you can use functions of the Messaging API, with the channel's information such as access token.

![](https://developers.line.biz/media/messaging-api/getting-started/channel.png)

<!-- tip end -->

## 1. Create a LINE Official Account 

To use the Messaging API, you must first create a LINE Official Account. LINE Official Accounts can be created by following the steps below:

- [Step 1-1. Register for Business ID](https://developers.line.biz/en/docs/messaging-api/getting-started/#create-oa-business-id)
- [Step 1-2. Fill in the entry form](https://developers.line.biz/en/docs/messaging-api/getting-started/#create-oa-entry-form)
- [Step 1-3. Check your LINE Official Account](https://developers.line.biz/en/docs/messaging-api/getting-started/#create-oa-check)

### Step 1-1. Register for Business ID 

To create a LINE Official Account, you need to register for [Business ID](https://account.line.biz/signup?redirectUri=https://entry.line.biz/form/entry/unverified). You can register for Business ID using your LINE account or email address.

![](https://developers.line.biz/media/messaging-api/getting-started/sign-up-business-id-en.png)

### Step 1-2. Fill in the entry form 

Once you've registered for Business ID, the [entry form](https://entry.line.biz/form/entry/unverified) for a LINE Official Account will appear. Fill in the required information on this form. Once you've completed the form, your LINE Official Account will be created.

![](https://developers.line.biz/media/messaging-api/getting-started/oa-entry-form-en.png)

### Step 1-3. Check your LINE Official Account 

The above steps will create your LINE Official Account. You can check the created LINE Official Account on the [LINE Official Account Manager](https://manager.line.biz/).

![](https://developers.line.biz/media/messaging-api/getting-started/oa-manager-list-en.png)

Once you have confirmed that your LINE Official Account has been created, proceed to step 2.

## 2. Enable the Messaging API for your LINE Official Account 

By enabling the use of the Messaging API for the LINE Official Account you created, a Messaging API channel will be created. Follow the steps below to enable the use of the Messaging API from the [LINE Official Account Manager](https://manager.line.biz/):

- [Step 2-1. Enable the use of the Messaging API](https://developers.line.biz/en/docs/messaging-api/getting-started/#step-one-enable-use-of-messaging-api)
- [Step 2-2. Log in to the LINE Developers Console](https://developers.line.biz/en/docs/messaging-api/getting-started/#step-two-log-in-to-line-developers-console)
- [Step 2-3. Check that you have a channel](https://developers.line.biz/en/docs/messaging-api/getting-started/#step-three-confirm-channel)

### Step 2-1. Enable the use of the Messaging API 

When enabling the use of the Messaging API in the [LINE Official Account Manager](https://manager.line.biz/), a Messaging API channel is created. For more information, see [Messaging API](https://www.lycbiz.com/jp/manual/OfficialAccountManager/account-settings_messaging_api/) (only available in Japanese) in LINE for Business.

If your account used to login on the [LINE Official Account Manager](https://manager.line.biz/) is never used on the [LINE Developers Console](https://developers.line.biz/console/), a screen for registering developer information will appear. Enter your name and email to create a developer account.

![](https://developers.line.biz/media/messaging-api/getting-started/developer-registration-en.png)

Next, select a provider to manage your LINE Official Account. If you plan to integrate your LINE Official Account with existing channels like LINE Login channel, select the provider the channel to integrate belongs to.

<!-- note start -->

**Be careful when you select a provider**

Once you assign a provider to manage your LINE Official Account, you can't change or de-assign the provider.

<!-- note end -->

<!-- warning start -->

**Cases that require special attention when selecting a provider**

For example, the following cases require special attention:

- Channels and providers are managed by individuals or companies.
- Create channels of unrelated services or companies under one provider.
- Channels are created under a provider managed by a service (company) that operates channel management tools, etc.

In such cases, problems may arise in the future due to the inability to move channels later between providers and the fact that a user is given different user IDs for different providers. After considering the risks involved, select an appropriate provider.

<!-- warning end -->

### Step 2-2. Log in to the LINE Developers Console 

The created Messaging API channel can be configured in the LINE Developers Console. Log in to the [LINE Developers Console](https://developers.line.biz/console/) with the account you used to login for the [LINE Official Account Manager](https://manager.line.biz/).

![](https://developers.line.biz/media/messaging-api/getting-started/login-dialog.png)

### Step 2-3. Check that you have a channel 

Select the provider you selected in [Step 2-1](https://developers.line.biz/en/docs/messaging-api/getting-started/#step-one-enable-use-of-messaging-api). Make sure that a channel is created for the provider.

![](https://developers.line.biz/media/messaging-api/getting-started/console-home-en.png)

## [End-of-life] Create a channel in the LINE Developers Console 

It's no longer possible to create Messaging API channels directly from the LINE Developers Console. For more information, see the news from September 4, 2024, [As of September 4, 2024, it's no longer possible to create Messaging API channels directly from the LINE Developers Console](https://developers.line.biz/en/news/2024/09/04/no-longer-possible-to-create-messaging-api-channels-from-console/).

## Next steps 

Now that you have a channel, you're ready to use the Messaging API. In the following page, you will configure the channel to build a bot:

- [Building a bot](https://developers.line.biz/en/docs/messaging-api/building-bot/)
```

```# Issue channel access token v2.1

There are [four types of channel access tokens](https://developers.line.biz/en/docs/basics/channel-access-token/#channel-access-token-types) available on the LINE Platform. Of these, channel access tokens v2.1 and stateless channel access tokens can be generated using JSON Web Token (JWT).

This page explains how to specify an assertion signing key, how to generate a JWT from a signing key, and how to issue a channel access token using the generated JWT, targeting channel access tokens v2.1.

## Process of issuing a channel access token v2.1 

The process of issuing a channel access token v2.1 is illustrated in the diagram below. This diagram shows the following three steps:

- [Create an assertion signing key](https://developers.line.biz/en/docs/messaging-api/generate-json-web-token/#create-an-assertion-signing-key) (Step 1 in the diagram)
- [Generate a JWT](https://developers.line.biz/en/docs/messaging-api/generate-json-web-token/#generate-jwt) (Step 6 in the diagram)
- [Issue a channel access token v2.1](https://developers.line.biz/en/docs/messaging-api/generate-json-web-token/#issue_a_channel_access_token_v2_1) (Step 7 in the diagram)

![](https://developers.line.biz/media/messaging-api/channel-access-token/channel-access-token-issue-flow-en.svg)

<!-- tip start -->

**Channel access token v2.1 specification**

The authentication method for issuing a channel access token v2.1 is in accordance with [Using JWTs as Authorization Grants (RFC 7523)](https://datatracker.ietf.org/doc/html/rfc7523#section-2.1). This is the Assertion Framework of [OAuth Assertion Framework (RFC 7521)](https://datatracker.ietf.org/doc/html/rfc7521#section-4.1) using [JSON Web Token (RFC 7519)](https://datatracker.ietf.org/doc/html/rfc7519).

<!-- tip end -->

## Create an assertion signing key 

Issuing an assertion signing key is done in the these two steps:

- [1. Generate a key pair for the assertion signing key](https://developers.line.biz/en/docs/messaging-api/generate-json-web-token/#generate-a-key-pair-for-the-assertion-signing-key)
- [2. Register public key and get `kid`](https://developers.line.biz/en/docs/messaging-api/generate-json-web-token/#register-public-key-and-get-kid)

### 1. Generate a key pair for the assertion signing key 

To create a JWT, you must first create an assertion signing key pair (private key, public key).

#### Assertion signing key specification 

You can use a [JSON Web Key (RFC7517)](https://datatracker.ietf.org/doc/html/rfc7517) that meets these criteria as an assertion signing key for JWT.

- The key must be an RSA public key. (Set the `kty`property to `RSA`)
- The RSA key must be 2048 bits long.
- Use RS256 (RSASSA-PKCS1-v1_5 with SHA256) as the signing algorithm. (Set the `alg` property to `RS256`)
- State that the public key is for signing. (Set `use` or `key_ops` as instructed in the table below).

Therefore, the public key of the assertion signing key must contain these properties:

| Property | Description |
| --- | --- |
| `kty` | Cryptographic algorithm family used in key. Set to `RSA`. |
| `alg` | Algorithm used in the key. Set to `RS256`. |
| `use`<sup>\*1</sup> | Usage of the key. Set to `sig`. |
| `key_ops`<sup>\*1</sup> | Operation for the key to be used. Set to `["verify"]` only. |
| `e` | Absolute value for restoring public key |
| `n` | Cryptographic index for restoring public key |

\*1 Specify either one of `use` or `key_ops`.

<!-- note start -->

**Check before you register a public key**

Make sure the public key you register doesn't have the `kid` property. An error occurs if the public key of the assertion signing key has the `kid` property. This is because that `kid` is issued only when you register a public key in the LINE Developers Console.

<!-- note end -->

You can choose to write your own program to generate an assertion signing key pair based on the published specification, but you can use libraries that meet the specification to generate a key more easily.

Here is an example of the steps for generating an assertion signing key:

- [Create a key pair with jwx (Go language library)](https://developers.line.biz/en/docs/messaging-api/generate-json-web-token/#use-go-lang)
- [Create a key pair with JWCrypto (Python library)](https://developers.line.biz/en/docs/messaging-api/generate-json-web-token/#use-python)
- [Create a key pair with a browser](https://developers.line.biz/en/docs/messaging-api/generate-json-web-token/#use-browser)

#### Create a key pair with jwx (Go language library) 

You can generate a key pair with the [jwx command line tool](https://github.com/lestrrat-go/jwx/tree/develop/v2/cmd/jwx). The command line tool is part of [jwx](https://github.com/lestrrat-go/jwx), an open source Go language library, used for JWT implementation. If you don't have Go language development environment set up, download Go from the [Go language official site](https://go.dev/doc/install).

To issue an assertion signing key:

##### 1. Install the jwx command line tool 

Install the jwx command line tool with this command.

```sh
$ git clone https://github.com/lestrrat-go/jwx.git
$ cd jwx
$ make jwx
```

When the installation is complete, you'll see the path where the jwx command line tool has been installed.

```
// Example of installed path display
Installed jwx in {installed path}
```

You should configure the path so that the commands in subsequent steps can be executed.

##### 2. Generate private key and public key 

Create a private key with this command.

```sh
$ jwx jwk generate --type RSA --keysize 2048 --template '{"alg":"RS256","use":"sig"}' > private.key
```

Create a public key with the private key.

```sh
$ jwx jwk format --public-key private.key > public.key
```

If successful, a private key and public key are generated:

**Private key example**

```json
{
  "alg": "RS256",
  "d": "JeSJWnvZ......",
  "dp": "gBDRXGg7......",
  "dq": "MjFJ4xM9......",
  "e": "AQ......",
  "kty": "RSA",
  "n": "pTS2jGso......",
  "p": "xQibzkW6......",
  "q": "1qWtyQ9s......",
  "qi": "sdVGblc......",
  "use": "sig"
}
```

**Public key example**

```json
{
  "alg": "RS256",
  "e": "AQ......",
  "kty": "RSA",
  "n": "pTS2jGso......",
  "use": "sig"
}
```

#### Create a key pair with JWCrypto (Python library) 

You can create a key pair with an open source Python library, [JWCrypto](https://github.com/latchset/jwcrypto) for JWT implementation. To use JWCrypto, you need Python 3 and pip installed on your computer. If you don't have Python 3, download an installer for your OS from the [Python official site](https://www.python.org/downloads/) and proceed with installation. Pip is installed when Python3 is installed. If you have Python 3 but no pip, see the [pip documentation](https://pip.pypa.io/en/stable/installation/) for installation.

To issue an assertion signing key:

##### 1. Install JWCrypto 

Install JWCrypto with this command.

```python
$ pip install jwcrypto
```

##### 2. Write code to create private and public keys 

Create a python file that generates private and public keys by specifying `kty` as `RSA`, `alg` as `RS256`, `use` as `sig`, and `size` as `2048`, like below.

```python
from jwcrypto import jwk
import json
key = jwk.JWK.generate(kty='RSA', alg='RS256', use='sig', size=2048)

private_key = key.export_private()
public_key = key.export_public()

print("=== private key ===\n"+json.dumps(json.loads(private_key),indent=2))
print("=== public key ===\n"+json.dumps(json.loads(public_key),indent=2))
```

Save the python file using any file name you want. In this case, the file name is `app.py`.

In the same directory where you saved the python file, generate a public key based on the private key with this command.

```sh
$ python app.py
```

If successful, a private key and public key are generated in the standard output:

**Private key example**

```json
{
  "alg": "RS256",
  "d": "zKh7iwIIPXXFKYQS...",
  "dp": "u1qKg_43UeuGpZFI...",
  "dq": "69AzYgpcg0ckypUrv...",
  "e": "AQ..",
  "kty": "RSA",
  "n": "_RzHf7cgG_i6Pdo_...",
  "p": "_20iRavoSrMIwWuRPxo...",
  "q": "_a5QodMBbEriAgztXvHi...",
  "qi": "JozdjTtK57IFLeVAB...",
  "use": "sig"
}
```

**Public key example**

```json
{
  "alg": "RS256",
  "e": "AQAB",
  "kty": "RSA",
  "n": "_RzHf7cgG_i6Pdo...",
  "use": "sig"
}
```

#### Generate a key pair with a browser 

If your browser supports [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API), you can use the [`SubtleCrypto.generateKey()`](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/generateKey) method to generate a private key and public key. If you have Google Chrome, enter and run this code from the console of Chrome's developer tools.

```javascript
(async () => {
  const pair = await crypto.subtle.generateKey(
    {
      name: "RSASSA-PKCS1-v1_5",
      modulusLength: 2048,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: "SHA-256",
    },
    true,
    ["sign", "verify"],
  );

  console.log("=== private key ===");
  console.log(
    JSON.stringify(
      await crypto.subtle.exportKey("jwk", pair.privateKey),
      null,
      "  ",
    ),
  );

  console.log("=== public key ===");
  console.log(
    JSON.stringify(
      await crypto.subtle.exportKey("jwk", pair.publicKey),
      null,
      "  ",
    ),
  );
})();
```

If successful, a private key and public key are generated.

**Private key example**

```json
{
  "alg": "RS256",
  "d": "GaDzOmc4......",
  "dp": "WAByrYmh......",
  "dq": "WLwjYun0......",
  "e": "AQ......",
  "ext": true,
  "key_ops": [
    "sign"
  ],
  "kty": "RSA",
  "n": "vsbOUoFA......",
  "p": "5QJitCu9......",
  "q": "1ULfGui5......",
  "qi": "2cK4apee......"
}
```

**Public key example**

```json
{
  "alg": "RS256",
  "e": "AQ......",
  "ext": true,
  "key_ops": [
    "verify"
  ],
  "kty": "RSA",
  "n": "vsbOUoFA......"
}
```

### 2. Register public key and get `kid` 

After you generate a key pair, register the public key in the [LINE Developers Console](https://developers.line.biz/console/) and in return, get `kid`. To register your public key, visit the console and open the channel settings for your channel. Click the **Basic settings** tab and then the **Register a public key** button next to assertion signing key. Enter the public key and finalize the registration with the **Register** button.

If the public key is successfully registered, you'll get `kid` in return.

## Generate a JWT 

JWT is a string and contains header, payload, and signature, all of which are required. To generate a JWT, you can use any [JWT library](https://www.jwt.io/libraries) or write your own code from scratch with your assertion signing key.

### Header 

The header must contain these properties:

| Property | Type | Description |
| --- | --- | --- |
| `alg` | String | The algorithm for JWT generation. Set the value to `"RS256"` |
| `typ` | String | The type of the token. Set the value to `"JWT"`. |
| `kid` | String | The key ID. Set the value to the `kid` property returned for [2. Register public key and get `kid`](https://developers.line.biz/en/docs/messaging-api/generate-json-web-token/#register-public-key-and-get-kid). |

This is an example of a decoded header:

```json
{
  "alg": "RS256",
  "typ": "JWT",
  "kid": "536e453c-aa93-4449-8e90-add2608783c6"
}
```

### Payload 

The payload must contain these properties:

| Property | Type | Description |
| --- | --- | --- |
| `iss` | String | Channel ID. You can retrieve your channel ID from the [LINE Developers Console](https://developers.line.biz/console/). The value of this property and `sub` must be the same. |
| `sub` | String | Channel ID. You can retrieve your channel ID from the [LINE Developers Console](https://developers.line.biz/console/). The value of this property and `iss` must be the same. |
| `aud` | String | Set the value to `https://api.line.me/`. |
| `exp` | Number | The expiration time of the JWT in UNIX time (in seconds). The maximum lifetime of a JWT assertion is 30 minutes. |
| `token_exp` | Number | The channel access token's validity period in seconds. The maximum lifetime of a channel access token is 30 days. |

This is an example of a decoded payload:

```json
{
  "iss": "1234567890",
  "sub": "1234567890",
  "aud": "https://api.line.me/",
  "exp": 1559702522,
  "token_exp": 86400
}
```

### Signature 

You need to sign the header and payload to generate a JWT. Learn how to create a signature and use the result to generate a JWT with [node-jose](https://developers.line.biz/en/docs/messaging-api/generate-json-web-token/#jwt-use-nodejs) (Node.js library) or [PyJWT](https://developers.line.biz/en/docs/messaging-api/generate-json-web-token/#jwt-use-python) (Python library).

#### Generate a JWT with node-jose (Node.js library) 

To create a signature and generate a JWT with node-jose, a Node.js library, make sure you have [Node.js](https://nodejs.org/en) and [node-jose](https://github.com/cisco/node-jose#installing) installed.

The example code below uses node-jose to sign with a **private key** to generate a JWT. To generate your own JWT using this code, first change the value of `privateKey` to the private key of your assertion signing key. Also change `header` and `payload` to your own values and run the code. Make sure to sign with your **private key** to prove that the content isn't tampered with. See [node-jose](https://github.com/cisco/node-jose#installing) for more information on the usage.

```javascript
let jose = require("node-jose");

let privateKey = `
{
    "p": "4h8yEw4q9VkzhXMgXZsIZVkEuZ49EmtWYk9zs0hPTa24ejjRMA6KTYh_va0GlaChO9t0MVQVuduznt-OFZyRAinr4svU4MKD2A3gTHJJCxs0xICva8rkHXqxfPwXngpb5L_xFURbXcSTzMcKckWuOpyPznAgY4XsZxw0t7ewj9E",
    "kty": "RSA",
    "q": "pVhBdRN5K3MEiZzU4__TsrtSBJDD_stu60m73iIvsHIrvK3Dmfl-J1zhsyOvi3NH9mVXpUimBwP8nTe-BlVM71G7_EotFHeKH1zTmBlx6AOngmrc40W2Hd__OZW0NfC_xOTvI_Ea2BNGoGtcrIGVFLTivJ4y9wAVOKA058zJ0ls",
    "d": "ObzE_-TROJazDm-ry-8TKRBMGzwcwTK6lMFSk7n-Xp6h7cDauSdRRYnZivC1lh5plVG3I9aUmPTRbVk7nrPqOlp4WWKQ27lyLd5IogbArpXgnBSkp9Zy0lWzvOsI3gHNnYuehyksHB53FIK93t838JfDQoXUUzalNoNwAGfkTNZxT4GIXGMGzNck2Z_urOATMf8-wdad-u4a5IB2KfHugwH2kw-Zig7fbdcN4_DeKWpuigdesa48Yj_hRJRws-mVFp-xHlGJehumnM_v8FLD85ap8L1hwvBqdJQeurcLXYzZbtdp9a5GpJI7gzOTMoEdxIKlEIIbaOKv4rkkztdhoQ",
    "e": "AQAB",
    "use": "sig",
    "kid": "536e453c-aa93-4449-8e90-add2608783c6",
    "qi": "XQ2puK9LT5yimyJXlXb4nHEBzPGe3sYbaZW_gMK4iHuM8cseImwLNP8ZIeGaNx5X_hZ6ZOzkjtYJjY85fvaWa2UDGdGlEw3ZO-Nk0Qu_exBrqZgZAsua75TjpJRw01Yd1TNBx5MYuvhltJLsjW-uSjcE-rZoO74FEe9pYYeQjI4",
    "dp": "Qq_wlK4Y_ULRbwoFAZY3Y6xdOGDyofwF_fhwpu8sdDxHq8QV7ZZcM4GOKuJcjsRQyNZv7hxeS_H_h1tnC_igy4KRjtGOdrrnJ1DwVZte72eWqF1LXv73R7pnnfS7AmELuOriruL6Dy1qaXpKGmlyeNazkq5-3tsgXUh0Q7po2AE",
    "alg": "RS256",
    "dq": "Wj1ovDT8lLIZb-Ggby9YotuJT-SSk6UDzHZZikquLGajaD6N2qNILsOKivKXBEzOobN9uj-EHaAXZtbdZyd27cZ2CqORJvJ299b5xLFecXpNGeio1YFee7-c1BjYWfgjMZqgycT1GairizINSjkO3FY8ySSuPBBXhKgrN7eVDrE",
    "n": "kgwP0NPaoAwhSh9iLlRaT7FSRbNsl6T5-j-bB3xAT1UbsxOJ9v06S3_54bpYlEAkjlrO-i1vmSzfSVnqFXnjWThWRvPmBDth3Ka7hQm9UXjiAvTzYxXGFjyhALqa_-DQCtdrqIhi8E4hAuSu--kGgnFKg3G-21KJuqnVzsXrClGkxbmVufx0MJjJxr1YGfkTMG8i0dovS9tnkioDAkt1knupiYk5ir_WiNy4T-70T5s3ktC5_4Uz10hS-rWeUxiihzG8G7ceg84-Kt5jKP_AgUnel-ksRyfgSJCYC9nHyz913a3ALj3Dzt7TBaxwAjlxESrdNz5RE9DNDZfPmNWRSw"
  }
`;

let header = {
  alg: "RS256",
  typ: "JWT",
  kid: "536e453c-aa93-4449-8e90-add2608783c6",
};

let payload = {
  iss: "1234567890",
  sub: "1234567890",
  aud: "https://api.line.me/",
  exp: Math.floor(new Date().getTime() / 1000) + 60 * 30,
  token_exp: 60 * 60 * 24 * 30,
};

jose.JWS.createSign(
  { format: "compact", fields: header },
  JSON.parse(privateKey),
)
  .update(JSON.stringify(payload))
  .final()
  .then((result) => {
    console.log(result);
  });
```

Sign the Base64url-encoded header, Base64url-encoded claim set, and a private key (such as an rsa_private.pem file), using the algorithm you specified in the header. The Base64url-encoded result is your JWT. Here is an example of JWT.

```sh
eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjJjNjU4NWYzLThkZGQtNDZjNC05YmUyLWI1NGE3MGFhOTRlYSJ9.eyJpc3MiOiIxNjUzOTQ3MTcyIiwic3ViIjoiMTY1Mzk0NzE3MiIsImF1ZCI6Imh0dHBzOi8vYXBpLmxpbmUubWUvIiwiZXhwIjoiMTU4NTIwMDA2MiIsInRva2VuX2V4cCI6IjI1OTIwMDAifQ.UVG6PAEub-OPbZ3nJuVxRRPjY6Sz_eIHJV9DTTAHCR79YsG4yWvoa9AeIctibb6IJQKgTEV7mF7LsUDmXldEDqYwyEmKs38zj_995Ntc9SYBFphHpr09NqfMoqMphwKqms2NOnqgcHreFs27d9Q0Qv8Rtv2t7SB2cVO__KrsjzYNs3miTvDdkqYLXFo5fXwuzNtHOCAJomd6bhMR8Yd1-vJmtMCBPK4hmA98w8fG_NhcyLbw-B9AuxQ6z92zXiRhNyPlK_3ce2T7HtgUluJ4xJl4xdLJ_C6hvTAqtQxmSiJKzbjUiANF6hVBTomU8vkaIjEKjnlT1uPMihfrsA3pzQ
```

#### Generate a JWT with PyJWT (Python library) 

To create a signature and generate a JWT with PyJWT, you need [Python](https://www.python.org/downloads/) and [PyJWT](https://github.com/jpadilla/pyjwt) installed.

The example code below uses PyJWT to sign with a **private key** to generate a JWT. To generate your own JWT using this code, first change the value of `privateKey` to the private key of your assertion signing key. Also, change `kid` in `headers` and `payload` to your own values and run the code. Make sure to sign with your **private key** to prove that the content isn't tampered with. See [PyJWT](https://github.com/jpadilla/pyjwt#installing) for more information on the usage.

```python
import jwt
from jwt.algorithms import RSAAlgorithm
import time

privateKey = {
  "alg": "RS256",
  "d": "dcA-LXLBRecBQbW7a8LKAriFJhnpXzwu2uNoVF_8-QmGVzI5682FWh_CWhl_B6J0fpmA-d7_EP0WCB3AGhxlyTP6ROoYJo7nygb_KMLREM7n64LFGbvNtw4jk7dmISXl_JuEX6CG09BBx4GLh9AGHSaK4v9B-dDvrNZlAo2mIjISHNcAPENbOl_XIOmZpJd56znjjc1gGKaYGbIm8unxHnPhL66IVYGRu8gxKfG6JUP7o370-VDfFOeaAR0HshTycP6M41jcDSjL6z9-J-Sh0zSZXqGS4u82TNtmwtRTzVwd0w30KQ0TTROTiNsz5apVHjpMvmAxRlbvcW41xIq8sQ",
  "dp": "PAWBMzwnwgc-yixarV30gemH6Wk15HfSUYpR4wJZUHemGx_LE5GXdnKoyy8G9DAl6XMpm7YVH8cPXgXYNh-JlAggvzUeH5A7KAV4ZPTNak4CI844GSbYIu_dPBcVAg0O6sxQWugYpPbPnMDpE7qf4KilSSVG3JKqEMxkYySjZZE",
  "dq": "LBA_q2YYnglCL41-1b3BmzCm-hs7Q-N__otDWO01I03VYnzU-vEQmxy6Fzrh2Y4Fgwp6D8iScu42AOyhE-T-qDNbAsCB0iZeFqm84g6VQAfDbknjIUZtcGvQgzy-zlrl253_QdyJvl2b44KT1hfoF0tDNA1rhOy7WlBM__rH0Pc",
  "e": "AQAB",
  "kty": "RSA",
  "n": "x2glWJ7baQV4vdElnAXA5yu8yFk4LpszkHW3Ey-BKGT3kGVLy3Jk3OvkwjBFOglXWeyTWe_rJkMYkBKuon5syZVjrjb24CmViAXGr6d6IvrYWj8IGZ6ElVABfnjGgZMVywmBb7hIh2p8QR0L8UJEuWjBU5nlwkMBpvnY2HXAVhvir8CN7WRj_GBMxxgg7wSuW1tV-7Qf44grMqJ0Je7zjflS4-TpI8Ox3nhamn0d7NIdQ3jNdTP7IZF61IvETgb_6NdFnfsN-aifJC-Ea3ZwhVcEGJ5z3MMoKSoChJmkJMiV9CldqGRnEDWwBugZHeEtn71eGVE3DAXAzrf525YHYQ",
  "p": "7eH8LAzNkITH6t7CWU5tPAmQlGQPkby66Yfq52tSZ43pQRz0CdtDYCQnGoBXvHzAHhzH4MjmNLOSGVimZK_dIRg5lJaPvVe6hgQ3pYud5WzPWsnQTsC7agQ2rfQglyFUtjwd1gWBIY4gwHj4BYG6Up3g0TlX1sf_juZxcLhkOsc",
  "q": "1pf-Pj2ZPL1nGqVcMVH_hfziIOBtjxc5vMGyHwTaLAA9y2xKfe_SRU8kUK2q5ZykJ8wMckR9Pduuyn-vp4q2FANVSN69G01pUKM2ppkgXuil2S3REmzniGdajZjkpWKaZ6z1tJ_xSv9ghx06Dbro8n___KnpBq6afb022anRxJc",
  "qi": "6L6SgH_pkyqq1Tb6QXPAGmtqVZT58Ljf3QTw6Tx5OdZ9NNvDReHHb64MgbUMLhLzGMeXGqDI5j0WLhtXv4ddCKWkF7OeKLUNuRP7yLpyYMazn8TEOjKHsgLAklenxcSgYaoO_wULh1mze1_ZO2PJNgvkIx_Xzr0XDUAqUp4W0jk",
  "use": "sig"
}

headers = {
    "alg": "RS256",
    "typ": "JWT",
    "kid": "9869e446-3489-4516-a83f-ec9214ad94d0"
}

payload = {
  "iss": "1234567890",
  "sub": "1234567890",
  "aud": "https://api.line.me/",
  "exp":int(time.time())+(60 * 30),
  "token_exp": 60 * 60 * 24 * 30
}

key = RSAAlgorithm.from_jwk(privateKey)

JWT = jwt.encode(payload, key, algorithm="RS256", headers=headers, json_encoder=None)
print(JWT)
```

Sign the Base64url-encoded header, Base64url-encoded claim set, and a private key using the algorithm you specified in the header. The Base64url-encoded result is your JWT. Here is an example of JWT.

```sh
eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ijk4NjllNDQ2LTM0ODktNDUxNi1hODNmLWVjOTIxNGFkOTRkMCJ9.eyJpc3MiOiIxMjM0NTY3ODkwIiwic3ViIjoiMTIzNDU2Nzg5MCIsImF1ZCI6Imh0dHBzOi8vYXBpLmxpbmUubWUvIiwiZXhwIjoxNjIzOTk1NTk5LCJ0b2tlbl9leHAiOjI1OTIwMDB9.Zf32xTqgUHSYw2C2Mlmunqz_AtkaqvGh0msx9XJMX6QYLPT4m4QYF3PsER-zfbhbByNT4rH09JEMRP7bzcNMQ8l4n_WXwTyLkNciZYzF-sTiVHiZu4ucJm4_l8ni5NaqOVEntsCp1wQi8-VLjaMpQlQ7crCdouEMFFeyVwgERfH8ui6UZaJeIlJKRZTnO6iYvKYuLyUsqzowfwZo0hcnnZIXKnjZ81ukjH3_78EHXOD5ivovAT7CtmBoglm3Bvsi0N6PlEONLhHqpCleaYTXRmCykxDLP600JRvi5TYApaN-8n2Bo3FskXJLuxquWLP-LTfMDlkakmfEfcQCiz7daQ
```

## Issue a channel access token v2.1 

You can [issue a channel access token v2.1](https://developers.line.biz/en/reference/messaging-api/#issue-channel-access-token-v2-1) with the JWT assertion you [generated](https://developers.line.biz/en/docs/messaging-api/generate-json-web-token/#generate-jwt).

<!-- note start -->

**To manage channel access tokens v2.1 using key IDs**

- When you request for a channel access token v2.1, the response you get is a pair of the channel access token and a unique key ID (`key_id`). For proper management of channel access tokens, safely store the channel access token and key ID pair.
- The key ID is an identifier added to the Messaging API on June 22, 2020. If your app uses a channel access token v2.1 without a key ID, we recommend that you re-issue a channel access token v2.1 and safely store the token and key ID pair. If you re-issue a channel access token, make sure to update your bot to use the new token.

<!-- note end -->

The process for getting a channel access token v2.1 is as follows:

![](https://developers.line.biz/media/messaging-api/channel-access-token/using_keyID_procedure_01.png)

1. Execute the [Issue channel access token v2.1](https://developers.line.biz/en/reference/messaging-api/#issue-channel-access-token-v2-1) endpoint with the JWT you generated to issue a channel access token.
2. The LINE Platform sends you a channel access token and a key ID.
3. Store the channel access token and key ID pair in a database or somewhere else.

### Revoke channel access token v2.1 

You can [revoke a channel access token v2.1](https://developers.line.biz/en/reference/messaging-api/#revoke-channel-access-token-v2-1) if your channel access token is valid.

<!-- note start -->

**To verify the validity of channel access tokens**

You can use an invalid channel access token to execute the [Revoke channel access token v2.1](https://developers.line.biz/en/reference/messaging-api/#revoke-channel-access-token-v2-1) endpoint and get no error. You can get key IDs for valid channel access tokens using the [Get all valid channel access token key IDs v2.1](https://developers.line.biz/en/reference/messaging-api/#get-all-valid-channel-access-token-key-ids-v2-1) endpoint. You can identify valid access tokens by matching the obtained key IDs with pairs of a channel access token and a key ID stored in a database, etc.

<!-- note end -->

The process for revoking a channel access token v2.1 is as follows:

![](https://developers.line.biz/media/messaging-api/channel-access-token/using_keyID_procedure_02.png)

1. Re-generate a JWT from the assertion signing key you stored.
2. Execute the [Get all valid channel access token key IDs v2.1](https://developers.line.biz/en/reference/messaging-api/#get-all-valid-channel-access-token-key-ids-v2-1) endpoint with the JWT.
3. The LINE Platform returns key IDs for valid channel access tokens.
4. Check the key IDs against your database.
5. See if you have a channel access token and key ID pair that matches any of the key IDs returned.
6. Retrieve the channel access token validated.
7. Execute the [Revoke channel access token v2.1](https://developers.line.biz/en/reference/messaging-api/#revoke-channel-access-token-v2-1) endpoint with the channel access token.
8. The LINE Platform revokes the channel access token.
```

```# Build a bot

This guide describes how to use the Messaging API to build a LINE bot.

## Before you begin 

Before you start to set up and build a bot, make sure you have:

- A dedicated [Messaging API channel](https://developers.line.biz/en/docs/messaging-api/getting-started/) for your bot
- A server to host your bot

## Settings on LINE Developers Console 

Prepare a [channel access token](https://developers.line.biz/en/docs/messaging-api/building-bot/#issue-a-channel-access-token) and set a [webhook URL](https://developers.line.biz/en/docs/messaging-api/building-bot/#setting-webhook-url). The token is necessary for your bot to make calls to the Messaging API. The webhook URL is required for your bot to receive webhook payloads from the LINE Platform. After you complete the set up, [add your LINE Official Account as a friend](https://developers.line.biz/en/docs/messaging-api/building-bot/#add-your-line-official-account-as-friend) to [verify](https://developers.line.biz/en/docs/messaging-api/building-bot/#confirm-webhook-behavior).

### Prepare a channel access token 

Issue a channel access token if you don't have one yet. Channel access tokens are access tokens that are used for the Messaging API. You can issue any of these tokens:

- [Channel access token with a user-specified expiration (Channel access token v2.1)](https://developers.line.biz/en/docs/basics/channel-access-token/#user-specified-expiration) (recommended)
- [Stateless channel access token](https://developers.line.biz/en/docs/basics/channel-access-token/#stateless-channel-access-token)
- [Short-lived channel access token](https://developers.line.biz/en/docs/basics/channel-access-token/#short-lived-channel-access-token)
- [Long-lived channel access token](https://developers.line.biz/en/docs/basics/channel-access-token/#long-lived-channel-access-token)

### Set a webhook URL 

The webhook URL is the endpoint of your bot server to which the LINE Platform sends the webhook payloads. Only one bot server endpoint can be set in the webhook URL.

Use the following steps to set the webhook URL:

1. Log in to the [LINE Developers Console](https://developers.line.biz/console/) and click the provider the Messaging API channel belongs to.
1. Click the Messaging API channel.
1. Click the **Messaging API** tab.
1. Click **Edit** under **Webhook URL**. Enter the webhook URL (the destination where the LINE Platform is to send events to) and then click **Update**.

   The webhook URL must use HTTPS and have an SSL/TLS certificate issued by a certificate authority widely trusted by general web browsers. Self-signed certificates aren't permitted. If you experience issues related to your SSL/TLS configuration, check whether your SSL/TLS certificate chain is complete and whether your intermediate certificates are correctly installed on your server.

1. Click **Verify**. If the webhook URL does accept a request, you'll see **Success**.
1. Enable **Use webhook**.

![](https://developers.line.biz/media/messaging-api/build-bot/webhook-url-example-com.png)

### Add your LINE Official Account as a friend 

Add your LINE Official Account associated with the Messaging API channel as a friend to your LINE account, to test later on. An easy way to add is to scan the QR code on the **Messaging API** tab in the [LINE Developers Console](https://developers.line.biz/console/).

### Restrict who can call the API when using a long-lived channel access token (optional) 

When using a long-lived channel access token, you can restrict which server can call the LINE Platform API by IP address.

To register IP addresses, visit the [LINE Developers Console](https://developers.line.biz/console/), open the channel settings and the **Security** tab. You can register IP addresses one by one or use classless inter-domain routing (CIDR) notation to register your network address.

We recommend that you use a [Channel access token with a user-specified expiration (Channel access token v2.1)](https://developers.line.biz/en/docs/basics/channel-access-token/#user-specified-expiration) in the Messaging API.

![](https://developers.line.biz/media/messaging-api/build-bot/security-settings-input-en.png)

## Verify that webhook works 

When a user adds your LINE Official Account as a friend or sends a message to your LINE Official Account, the LINE Platform sends an HTTP POST request to your bot server. The destination of this request is the **Webhook URL** you register in the [LINE Developers Console](https://developers.line.biz/console/), on the **Messaging API** tab. The request contains a webhook event object, with a signature in the header.

This section explains how to check if your server can [receive webhook events](https://developers.line.biz/en/docs/messaging-api/building-bot/#receive-webhook-events).

### Receive webhook events 

To check if your bot server does receive webhook events, first block the LINE Official Account you added in the [earlier step](https://developers.line.biz/en/docs/messaging-api/building-bot/#set-up-bot-on-line-developers-console). Then find from your server logs that your bot server received an [unfollow event](https://developers.line.biz/en/reference/messaging-api/#unfollow-event) from the LINE Platform. Here is an example log.

```sh
2017-07-21T09:18:46.755256+00:00 app[web.1]: 2017-07-21 09:18:46.737  INFO 4 --- [io-13386-exec-2] c.e.bot.spring.KitchenSinkController     : unfollowed this bot: UnfollowEvent(source=UserSource(userId=Uxxxxxxxxxx...), timestamp=2017-07-21T09:18:46.031Z)
```

If you got a similar log, your bot server did receive a webhook event from the LINE Platform. Don't forget to unblock the LINE Official Account after you check the log.

## Settings on LINE Official Account Manager 

The [LINE Official Account Manager](https://manager.line.biz/) is a tool to manage your LINE Official Account. In addition to using the features provided by the Messaging API, you can improve the user experience by [customizing your business profile](https://developers.line.biz/en/docs/messaging-api/building-bot/#customize-profile), create LINE VOOM posts, and much more.

For a complete list of features available to LINE Official Accounts, see [LY for Business](https://www.lycbiz.jp/en/).

<!-- tip start -->

**Greeting messages and auto-reply messages**

If the settings for **Greeting messages** and **Auto-reply messages** are set to **Enabled** in the **Messaging API Settings** tab of the channel, the LINE Official Account will automatically respond when a user adds your LINE Official Account as a friend or sends you a message. The default setting for **Greeting Message** and **Auto-reply messages** is **Enabled** when the channel is created.

If you don't want greeting and response messages to be sent automatically because the response process is handled by the Messaging API, set the **Greeting Messages** and **Auto-reply messages** settings to **Disabled** in the [LINE Official Account Manager](https://manager.line.biz/).

You can use both together, such as using greeting messages to respond when a user adds your LINE Official Account as a friend, and using the Messaging API for other responses. But, you may find it difficult to identify whether an automatic response is sent from a greeting message or response message, or from a bot using the Messaging API. To avoid confusion, we recommend that you set the **Greeting messages** and **Auto-reply messages** settings to **Disabled**, especially if this is the first time for you to create a LINE Bot.

<!-- tip end -->

### Customize your business profile 

Business profile is where you enter and set the basic information of your LINE Official Account that gets displayed to users. You can customize the profile photo, cover photo, buttons, and plug-ins. To set your profile, go to the LINE Official Account Manager.

For more information about profile customization, see [Profile](https://www.lycbiz.com/jp/manual/OfficialAccountManager/profile/) (only available in Japanese) in LINE for Business.

### Set a greeting message (optional) 

You can send a greeting message when a user first adds your LINE Official Account as a friend. To set a greeting message, open the channel settings on the [LINE Developers Console](https://developers.line.biz/console/) and click the **Messaging API** tab. Under **Greeting messages**, click **Edit**. This opens up the LINE Official Account Manager. Set a greeting message there. Alternatively, you can do this programmatically by responding to users after receiving a [follow event](https://developers.line.biz/en/reference/messaging-api/#follow-event).

### Set auto reply messages (optional) 

You can send auto reply messages to users when they send messages to your LINE Official Account. To set auto reply messages, open the channel settings on the [LINE Developers Console](https://developers.line.biz/console/) and click the **Messaging API** tab. Under **Auto-reply messages**, click **Edit**. This opens up LINE Official Account Manager. Set auto reply messages there. But, you can do more with the Messaging API as you can program your bot to reply in different ways to various webhook events.

## Next steps 

Once you set up your bot, your LINE Official Account can receive messages from users and send messages to users. You can also use rich menus and quick replies to create a personalized experience. For more information on features available with the Messaging API, see the [Messaging API documentation](https://developers.line.biz/en/docs/messaging-api/).
```

I've already created LINE messaging API channel, This is my information:
Channel ID: 2009964032
Channel secret: 36973b5b8dc80f819dfa121225b44f73
Your user ID: Ua8d8df951f6183b804e489549c492b1a
Webhook URL: TBD
Channel access token (long-lived) 24 hrs: `59yNXlJLOyPImUzBeMU/1aDKFScZzybg+3FWc09ywdm+zcfhDi9TNCMsZxGgno80EAM/Ipxz1JzFzAkygs/gSxAMr/Ny3JR0N5XrfWzWe6Uq4cQIxeD815nSm+ILQVy0ivif1QINq2gJJZUVxXpZaAdB04t89/1O/w1cDnyilFU=`

Is there anything missing, pls let me know.

------------

The Overall requirements:
- I want 1 line bot account for get data from user input then store data to Firebase Firestore.
```// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKlmulfZf2OVLGNUdE1as9TqF3sOhgm-4",
  authDomain: "heath-logs.firebaseapp.com",
  projectId: "heath-logs",
  storageBucket: "heath-logs.firebasestorage.app",
  messagingSenderId: "504398625581",
  appId: "1:504398625581:web:a7219ee24d88e8ad6ff1a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);```
- The data is about health data, it will have blood pressure, HR, SP O2, weight, water intake, water output
- User can input via message with specific wording (EX: user message `HR=70`, `BP=120/80`, water intake = 1500 (water will record as ml))
- for health info in will record 2 times per day (which is เช้า and ก่อนนอน) except for water output >> this can input many times a day ,, water intake 1 time a day (ก่อนนอน) default as 1500 ml
- This is for Thai users (pls show UI as Thai Language is u can, if not it's okay)

----------

**Is there anything not clear, pls let me know**
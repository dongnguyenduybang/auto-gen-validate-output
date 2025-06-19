# 📊 Test Report Summary


---
Time: 19/06/2025, 16:07:49
## 📋 Overview

| Metric | Count |
|--------|-------|
| Total Endpoints | 101 |
| ✅ Passed Endpoints | 10 |
| ❌ Failed Endpoints | 91 |
| Total Test Cases | 7673 |
| ✅ Passed Tests | 5235 |
| ❌ Failed Tests | 1757 |
| ⚠️ Warnings | 967 |

## ❌ Failed Endpoints (91)

| Endpoint | DTO | Passed | Failed | Warnings | 200 | 201 | 400 | 403 | 404 | 500 | Detail Report |
|----------|-----|--------|--------|----------|-----|-----|-----|-----|-----|-----|---------------|
| /Invitation/AcceptInvitation | accept-invitation | 3 | 1 | 1 | 0 | 1 | 2 | 0 | 0 | 0 | [📄 View Report](./failed-reports/accept-invitation/accept-invitation-combined-16-07-19-06-2025.report.txt) |
| /UserProfile/AddCoverPhoto | add-cover-photo | 3 | 1 | 1 | 0 | 1 | 2 | 0 | 0 | 0 | [📄 View Report](./failed-reports/add-cover-photo/add-cover-photo-combined-16-07-19-06-2025.report.txt) |
| /Message/AddDMMessageReaction | add-dm-message-reaction | 80 | 6 | 5 | 0 | 1 | 24 | 55 | 0 | 0 | [📄 View Report](./failed-reports/add-dm-message-reaction/add-dm-message-reaction-combined-16-07-19-06-2025.report.txt) |
| /Message/AddMessageReaction | add-message-reaction | 134 | 16 | 5 | 0 | 1 | 19 | 114 | 0 | 0 | [📄 View Report](./failed-reports/add-message-reaction/add-message-reaction-combined-16-07-19-06-2025.report.txt) |
| /UserProfile/AddUserStatus | add-user-status | 18 | 15 | 28 | 0 | 1 | 17 | 0 | 0 | 0 | [📄 View Report](./failed-reports/add-user-status/add-user-status-combined-16-07-19-06-2025.report.txt) |
| /Member/AssignAsAdmin | assign-as-admin | 44 | 26 | 0 | 0 | 1 | 0 | 43 | 0 | 0 | [📄 View Report](./failed-reports/assign-as-admin/assign-as-admin-combined-16-07-19-06-2025.report.txt) |
| /Member/BanFromChannel | ban-from-channel | 45 | 25 | 0 | 0 | 1 | 0 | 44 | 0 | 0 | [📄 View Report](./failed-reports/ban-from-channel/ban-from-channel-combined-16-07-19-06-2025.report.txt) |
| /UserSetting/BlockUser | block-user | 1 | 5 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | [📄 View Report](./failed-reports/block-user/block-user-combined-16-07-19-06-2025.report.txt) |
| /AvatarFrame/CreateAvatarFrame | create-avatar-frame | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | [📄 View Report](./failed-reports/create-avatar-frame/create-avatar-frame-combined-16-07-19-06-2025.report.txt) |
| /Channel/CreateChannel | create-channel | 50 | 10 | 24 | 0 | 1 | 9 | 40 | 0 | 0 | [📄 View Report](./failed-reports/create-channel/create-channel-combined-16-07-19-06-2025.report.txt) |
| /Invitation/CreateInvitation | create-invitation | 96 | 27 | 2 | 0 | 0 | 0 | 96 | 0 | 0 | [📄 View Report](./failed-reports/create-invitation/create-invitation-combined-16-07-19-06-2025.report.txt) |
| /AvatarFrame/DeleteAvatarFrame | delete-avatar-frame | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | [📄 View Report](./failed-reports/delete-avatar-frame/delete-avatar-frame-combined-16-07-19-06-2025.report.txt) |
| /Channel/DeleteChannelAvatar | delete-channel-avatar | 29 | 7 | 0 | 1 | 0 | 0 | 28 | 0 | 0 | [📄 View Report](./failed-reports/delete-channel-avatar/delete-channel-avatar-combined-16-07-19-06-2025.report.txt) |
| /Channel/DeleteChannel | delete-channel | 29 | 7 | 0 | 1 | 0 | 0 | 28 | 0 | 0 | [📄 View Report](./failed-reports/delete-channel/delete-channel-combined-16-07-19-06-2025.report.txt) |
| /Message/DeleteDMMessagesForEveryone | delete-dm-messages-for-everyone | 39 | 13 | 2 | 1 | 0 | 1 | 36 | 1 | 0 | [📄 View Report](./failed-reports/delete-dm-messages-for-everyone/delete-dm-messages-for-everyone-combined-16-07-19-06-2025.report.txt) |
| /Message/DeleteDMMessagesOnlyMe | delete-dm-messages-only-me | 39 | 13 | 2 | 1 | 0 | 1 | 36 | 1 | 0 | [📄 View Report](./failed-reports/delete-dm-messages-only-me/delete-dm-messages-only-me-combined-16-07-19-06-2025.report.txt) |
| /Friend/DeleteFriendRequest | delete-friend-request | 5 | 1 | 0 | 1 | 0 | 0 | 4 | 0 | 0 | [📄 View Report](./failed-reports/delete-friend-request/delete-friend-request-combined-16-07-19-06-2025.report.txt) |
| /Message/DeleteMessagesForEveryone | delete-messages-for-everyone | 88 | 22 | 0 | 0 | 0 | 0 | 88 | 0 | 0 | [📄 View Report](./failed-reports/delete-messages-for-everyone/delete-messages-for-everyone-combined-16-07-19-06-2025.report.txt) |
| /Message/DeleteMessagesOnlyMe | delete-messages-only-me | 88 | 22 | 0 | 0 | 0 | 0 | 88 | 0 | 0 | [📄 View Report](./failed-reports/delete-messages-only-me/delete-messages-only-me-combined-16-07-19-06-2025.report.txt) |
| /UserProfile/DeleteUserAvatar | delete-user-avatar | 0 | 4 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | [📄 View Report](./failed-reports/delete-user-avatar/delete-user-avatar-combined-16-07-19-06-2025.report.txt) |
| /UserProfile/DeleteUserVisitedProfile | delete-user-visit-profile | 5 | 1 | 0 | 1 | 0 | 0 | 4 | 0 | 0 | [📄 View Report](./failed-reports/delete-user-visit-profile/delete-user-visit-profile-combined-16-07-19-06-2025.report.txt) |
| /Member/DismissAsAdmin | dismiss-as-admin | 45 | 25 | 0 | 0 | 1 | 0 | 44 | 0 | 0 | [📄 View Report](./failed-reports/dismiss-as-admin/dismiss-as-admin-combined-16-07-19-06-2025.report.txt) |
| /Message/ForwardMessagesToDMChannel | forward-dm-message-channel | 57 | 1 | 2 | 0 | 1 | 5 | 50 | 1 | 0 | [📄 View Report](./failed-reports/forward-dm-message-channel/forward-dm-message-channel-combined-16-07-19-06-2025.report.txt) |
| /ChannelView/GetChannel | get-channel | 29 | 7 | 0 | 1 | 0 | 0 | 28 | 0 | 0 | [📄 View Report](./failed-reports/get-channel/get-channel-combined-16-07-19-06-2025.report.txt) |
| /ChannelView/GetDMChannel | get-dm-channel | 5 | 1 | 0 | 1 | 0 | 0 | 4 | 0 | 0 | [📄 View Report](./failed-reports/get-dm-channel/get-dm-channel-combined-16-07-19-06-2025.report.txt) |
| /MessageView/GetDMMessage | get-dm-message | 27 | 9 | 0 | 1 | 0 | 2 | 24 | 0 | 0 | [📄 View Report](./failed-reports/get-dm-message/get-dm-message-combined-16-07-19-06-2025.report.txt) |
| /FriendView/GetFriend | get-friend | 1 | 5 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | [📄 View Report](./failed-reports/get-friend/get-friend-combined-16-07-19-06-2025.report.txt) |
| /InvitationView/GetInvitation | get-invitation | 2 | 2 | 1 | 1 | 0 | 1 | 0 | 0 | 0 | [📄 View Report](./failed-reports/get-invitation/get-invitation-combined-16-07-19-06-2025.report.txt) |
| /MemberView/GetMember | get-member | 64 | 27 | 0 | 1 | 0 | 0 | 63 | 0 | 0 | [📄 View Report](./failed-reports/get-member/get-member-combined-16-07-19-06-2025.report.txt) |
| /MessageView/GetMessage | get-message | 66 | 25 | 0 | 1 | 0 | 2 | 63 | 0 | 0 | [📄 View Report](./failed-reports/get-message/get-message-combined-16-07-19-06-2025.report.txt) |
| /MessageView/GetPinnedMessage | get-pinned-message | 29 | 7 | 0 | 1 | 0 | 0 | 28 | 0 | 0 | [📄 View Report](./failed-reports/get-pinned-message/get-pinned-message-combined-16-07-19-06-2025.report.txt) |
| /StickerView/GetStickerCollection | get-sticker-collection | 3 | 3 | 1 | 0 | 0 | 3 | 0 | 0 | 0 | [📄 View Report](./failed-reports/get-sticker-collection/get-sticker-collection-combined-16-07-19-06-2025.report.txt) |
| /StickerView/GetSticker | get-sticker | 1 | 3 | 3 | 0 | 0 | 1 | 0 | 0 | 0 | [📄 View Report](./failed-reports/get-sticker/get-sticker-combined-16-07-19-06-2025.report.txt) |
| /UserView/GetUserByUsername | get-user-by-username | 1 | 5 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | [📄 View Report](./failed-reports/get-user-by-username/get-user-by-username-combined-16-07-19-06-2025.report.txt) |
| /UserView/GetUser | get-user | 5 | 1 | 0 | 1 | 0 | 0 | 4 | 0 | 0 | [📄 View Report](./failed-reports/get-user/get-user-combined-16-07-19-06-2025.report.txt) |
| /MessageView/JumpToDMMessage | jump-to-dm-message | 51 | 45 | 6 | 1 | 0 | 2 | 48 | 0 | 0 | [📄 View Report](./failed-reports/jump-to-dm-message/jump-to-dm-message-combined-16-07-19-06-2025.report.txt) |
| /MessageView/JumpToMessage | jump-to-message | 105 | 82 | 0 | 0 | 0 | 0 | 105 | 0 | 0 | [📄 View Report](./failed-reports/jump-to-message/jump-to-message-combined-16-07-19-06-2025.report.txt) |
| /Member/LeaveChannel | leave-channel | 23 | 2 | 0 | 0 | 1 | 0 | 22 | 0 | 0 | [📄 View Report](./failed-reports/leave-channel/leave-channel-combined-16-07-19-06-2025.report.txt) |
| /ChannelView/ListAllChannels | list-all-channel | 1 | 4 | 2 | 1 | 0 | 0 | 0 | 0 | 0 | [📄 View Report](./failed-reports/list-all-channel/list-all-channel-combined-16-07-19-06-2025.report.txt) |
| /MemberView/ListBannedUsers | list-baned-user | 71 | 29 | 2 | 1 | 0 | 0 | 70 | 0 | 0 | [📄 View Report](./failed-reports/list-baned-user/list-baned-user-combined-16-07-19-06-2025.report.txt) |
| /UserView/ListBlockedUsers | list-block-user | 1 | 4 | 2 | 1 | 0 | 0 | 0 | 0 | 0 | [📄 View Report](./failed-reports/list-block-user/list-block-user-combined-16-07-19-06-2025.report.txt) |
| /ChannelView/ListDMChannels | list-dm-channel | 1 | 4 | 2 | 1 | 0 | 0 | 0 | 0 | 0 | [📄 View Report](./failed-reports/list-dm-channel/list-dm-channel-combined-16-07-19-06-2025.report.txt) |
| /MessageView/ListDMMessageReactions | list-dm-message-reaction | 49 | 24 | 7 | 1 | 0 | 8 | 40 | 0 | 0 | [📄 View Report](./failed-reports/list-dm-message-reaction/list-dm-message-reaction-combined-16-07-19-06-2025.report.txt) |
| /MessageView/ListDMMessages | list-dm-message | 29 | 11 | 2 | 1 | 0 | 0 | 28 | 0 | 0 | [📄 View Report](./failed-reports/list-dm-message/list-dm-message-combined-16-07-19-06-2025.report.txt) |
| /FriendView/ListFriends | list-friend | 1 | 4 | 2 | 1 | 0 | 0 | 0 | 0 | 0 | [📄 View Report](./failed-reports/list-friend/list-friend-combined-16-07-19-06-2025.report.txt) |
| /FriendView/ListInComingFriendRequests | list-incoming-friend-request | 1 | 4 | 2 | 1 | 0 | 0 | 0 | 0 | 0 | [📄 View Report](./failed-reports/list-incoming-friend-request/list-incoming-friend-request-combined-16-07-19-06-2025.report.txt) |
| /InvitationView/ListInvitation | list-invitation | 71 | 29 | 2 | 1 | 0 | 0 | 70 | 0 | 0 | [📄 View Report](./failed-reports/list-invitation/list-invitation-combined-16-07-19-06-2025.report.txt) |
| /MemberView/ListMembers | list-member | 72 | 18 | 0 | 0 | 0 | 0 | 72 | 0 | 0 | [📄 View Report](./failed-reports/list-member/list-member-combined-16-07-19-06-2025.report.txt) |
| /MessageView/ListMessageFragments | list-message-fragment | 29 | 7 | 0 | 1 | 0 | 0 | 28 | 0 | 0 | [📄 View Report](./failed-reports/list-message-fragment/list-message-fragment-combined-16-07-19-06-2025.report.txt) |
| /MessageView/ListMessageReactions | list-message-reaction | 137 | 132 | 6 | 0 | 0 | 4 | 133 | 0 | 0 | [📄 View Report](./failed-reports/list-message-reaction/list-message-reaction-combined-16-07-19-06-2025.report.txt) |
| /MessageView/ListMessages | list-message | 71 | 29 | 2 | 1 | 0 | 0 | 70 | 0 | 0 | [📄 View Report](./failed-reports/list-message/list-message-combined-16-07-19-06-2025.report.txt) |
| /FriendView/ListOutGoingFriendRequests | list-outgoing-friend-request | 1 | 4 | 2 | 1 | 0 | 0 | 0 | 0 | 0 | [📄 View Report](./failed-reports/list-outgoing-friend-request/list-outgoing-friend-request-combined-16-07-19-06-2025.report.txt) |
| /ChannelView/ListOutGoingMessageRequests | list-outgoing-message-request | 1 | 4 | 2 | 1 | 0 | 0 | 0 | 0 | 0 | [📄 View Report](./failed-reports/list-outgoing-message-request/list-outgoing-message-request-combined-16-07-19-06-2025.report.txt) |
| /StickerView/ListStickers | list-sticker | 3 | 3 | 1 | 0 | 0 | 3 | 0 | 0 | 0 | [📄 View Report](./failed-reports/list-sticker/list-sticker-combined-16-07-19-06-2025.report.txt) |
| /Message/MarkAsRead | mark-as-read | 83 | 8 | 0 | 0 | 1 | 4 | 78 | 0 | 0 | [📄 View Report](./failed-reports/mark-as-read/mark-as-read-combined-16-07-19-06-2025.report.txt) |
| /Message/MarkDMAsRead | mark-dm-as-read | 35 | 1 | 0 | 0 | 1 | 4 | 30 | 0 | 0 | [📄 View Report](./failed-reports/mark-dm-as-read/mark-dm-as-read-combined-16-07-19-06-2025.report.txt) |
| /Message/PinUnpinDMMessage | pin-dm-message | 55 | 4 | 10 | 0 | 1 | 9 | 45 | 0 | 0 | [📄 View Report](./failed-reports/pin-dm-message/pin-dm-message-combined-16-07-19-06-2025.report.txt) |
| /Message/PinUnpinMessage | pin-message | 124 | 16 | 15 | 0 | 1 | 9 | 114 | 0 | 0 | [📄 View Report](./failed-reports/pin-message/pin-message-combined-16-07-19-06-2025.report.txt) |
| /Message/QuoteDMMessage | quote-dm-message | 127 | 10 | 18 | 0 | 1 | 51 | 75 | 0 | 0 | [📄 View Report](./failed-reports/quote-dm-message/quote-dm-message-combined-16-07-19-06-2025.report.txt) |
| /Message/QuoteMessage | quote-message | 202 | 24 | 8 | 0 | 1 | 51 | 150 | 0 | 0 | [📄 View Report](./failed-reports/quote-message/quote-message-combined-16-07-19-06-2025.report.txt) |
| /Member/RemoveFromChannel | remove-from-channel | 58 | 54 | 0 | 1 | 0 | 0 | 57 | 0 | 0 | [📄 View Report](./failed-reports/remove-from-channel/remove-from-channel-combined-16-07-19-06-2025.report.txt) |
| /Message/ReportDMMessage | report-dm-message | 122 | 81 | 31 | 0 | 1 | 26 | 95 | 0 | 0 | [📄 View Report](./failed-reports/report-dm-message/report-dm-message-combined-16-07-19-06-2025.report.txt) |
| /Message/ReportMessage | report-message | 188 | 79 | 16 | 0 | 0 | 20 | 168 | 0 | 0 | [📄 View Report](./failed-reports/report-message/report-message-combined-16-07-19-06-2025.report.txt) |
| /UserReport/ReportUser | report-user | 31 | 57 | 22 | 0 | 6 | 25 | 0 | 0 | 0 | [📄 View Report](./failed-reports/report-user/report-user-combined-16-07-19-06-2025.report.txt) |
| /Message/RevokeDMMessageReaction | revoke-dm-message-reaction | 80 | 6 | 5 | 1 | 0 | 24 | 55 | 0 | 0 | [📄 View Report](./failed-reports/revoke-dm-message-reaction/revoke-dm-message-reaction-combined-16-07-19-06-2025.report.txt) |
| /Invitation/RevokeInvitation | revoke-invitation | 58 | 22 | 0 | 1 | 0 | 1 | 56 | 0 | 0 | [📄 View Report](./failed-reports/revoke-invitation/revoke-invitation-combined-16-07-19-06-2025.report.txt) |
| /RingbackTone/RingbackToneCreate | ring-back-tone-create | 12 | 11 | 12 | 0 | 1 | 11 | 0 | 0 | 0 | [📄 View Report](./failed-reports/ring-back-tone-create/ring-back-tone-create-combined-16-07-19-06-2025.report.txt) |
| /RingbackTone/RingbackToneRename | ring-back-tone-rename | 16 | 16 | 4 | 0 | 0 | 16 | 0 | 0 | 0 | [📄 View Report](./failed-reports/ring-back-tone-rename/ring-back-tone-rename-combined-16-07-19-06-2025.report.txt) |
| /Message/SendDMLocation | send-dm-location | 174 | 9 | 102 | 0 | 1 | 68 | 105 | 0 | 0 | [📄 View Report](./failed-reports/send-dm-location/send-dm-location-combined-16-07-19-06-2025.report.txt) |
| /Message/SendDmMessageMedia | send-dm-message-media | 200 | 132 | 130 | 0 | 0 | 15 | 185 | 0 | 0 | [📄 View Report](./failed-reports/send-dm-message-media/send-dm-message-media-combined-16-07-19-06-2025.report.txt) |
| /Invitation/SendInvitation | send-invitation | 3 | 1 | 1 | 0 | 1 | 2 | 0 | 0 | 0 | [📄 View Report](./failed-reports/send-invitation/send-invitation-combined-16-07-19-06-2025.report.txt) |
| /Message/SendLocation | send-location | 282 | 22 | 111 | 0 | 1 | 68 | 213 | 0 | 0 | [📄 View Report](./failed-reports/send-location/send-location-combined-16-07-19-06-2025.report.txt) |
| /Message/SendMessageSticker | send-message-sticker | 134 | 17 | 4 | 0 | 1 | 19 | 114 | 0 | 0 | [📄 View Report](./failed-reports/send-message-sticker/send-message-sticker-combined-16-07-19-06-2025.report.txt) |
| /Message/SendMessage | send-message | 125 | 10 | 4 | 0 | 1 | 19 | 105 | 0 | 0 | [📄 View Report](./failed-reports/send-message/send-message-combined-16-07-19-06-2025.report.txt) |
| /Message/SendPokeMessage | send-poke-message | 28 | 1 | 1 | 0 | 0 | 3 | 25 | 0 | 0 | [📄 View Report](./failed-reports/send-poke-message/send-poke-message-combined-16-07-19-06-2025.report.txt) |
| /Member/TransferOwnershipAndLeaveChannel | transfer-ownership-leave-channel | 46 | 24 | 0 | 0 | 1 | 0 | 45 | 0 | 0 | [📄 View Report](./failed-reports/transfer-ownership-leave-channel/transfer-ownership-leave-channel-combined-16-07-19-06-2025.report.txt) |
| /Member/TransferOwnership | transfer-ownership | 46 | 24 | 0 | 0 | 1 | 0 | 45 | 0 | 0 | [📄 View Report](./failed-reports/transfer-ownership/transfer-ownership-combined-16-07-19-06-2025.report.txt) |
| /Member/UnbanFromChannel | unban-from-channel | 45 | 25 | 0 | 0 | 1 | 0 | 44 | 0 | 0 | [📄 View Report](./failed-reports/unban-from-channel/unban-from-channel-combined-16-07-19-06-2025.report.txt) |
| /UserSetting/UnblockUser | unblock-user | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | [📄 View Report](./failed-reports/unblock-user/unblock-user-combined-16-07-19-06-2025.report.txt) |
| /Friend/Unfriend | unfriend | 2 | 4 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | [📄 View Report](./failed-reports/unfriend/unfriend-combined-16-07-19-06-2025.report.txt) |
| /Message/PinUnpinDMMessage | unpin-dm-message | 55 | 4 | 10 | 0 | 1 | 9 | 45 | 0 | 0 | [📄 View Report](./failed-reports/unpin-dm-message/unpin-dm-message-combined-16-07-19-06-2025.report.txt) |
| /Message/PinUnpinMessage | unpin-message | 124 | 16 | 15 | 0 | 1 | 9 | 114 | 0 | 0 | [📄 View Report](./failed-reports/unpin-message/unpin-message-combined-16-07-19-06-2025.report.txt) |
| /Channel/UpdateChannelAvatar | update-channel-avatar | 62 | 6 | 1 | 1 | 0 | 1 | 60 | 0 | 0 | [📄 View Report](./failed-reports/update-channel-avatar/update-channel-avatar-combined-16-07-19-06-2025.report.txt) |
| /Channel/UpdateChannelName | update-channel-name | 83 | 7 | 1 | 1 | 0 | 4 | 78 | 0 | 0 | [📄 View Report](./failed-reports/update-channel-name/update-channel-name-combined-16-07-19-06-2025.report.txt) |
| /UserProfile/UpdateCoverPhoto | update-cover-photo | 2 | 2 | 1 | 0 | 0 | 2 | 0 | 0 | 0 | [📄 View Report](./failed-reports/update-cover-photo/update-cover-photo-combined-16-07-19-06-2025.report.txt) |
| /Message/UpdateDMMessage | update-dm-message | 108 | 1 | 16 | 1 | 0 | 42 | 65 | 0 | 0 | [📄 View Report](./failed-reports/update-dm-message/update-dm-message-combined-16-07-19-06-2025.report.txt) |
| /Message/UpdateMessage | update-message | 0 | 213 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | [📄 View Report](./failed-reports/update-message/update-message-combined-16-07-19-06-2025.report.txt) |
| /Member/UpdateNickname | update-nickname | 84 | 41 | 1 | 1 | 0 | 2 | 81 | 0 | 0 | [📄 View Report](./failed-reports/update-nickname/update-nickname-combined-16-07-19-06-2025.report.txt) |
| /UserProfile/UpdateUserDisplayName | update-user-display-name | 3 | 1 | 2 | 1 | 0 | 2 | 0 | 0 | 0 | [📄 View Report](./failed-reports/update-user-display-name/update-user-display-name-combined-16-07-19-06-2025.report.txt) |
| /UserProfile/UpdateUserEmail | update-user-email | 4 | 1 | 0 | 1 | 0 | 3 | 0 | 0 | 0 | [📄 View Report](./failed-reports/update-user-email/update-user-email-combined-16-07-19-06-2025.report.txt) |
| /UserProfile/UpdateUserStatus | update-user-status | 6 | 9 | 10 | 1 | 0 | 5 | 0 | 0 | 0 | [📄 View Report](./failed-reports/update-user-status/update-user-status-combined-16-07-19-06-2025.report.txt) |

## ✅ Passed Endpoints (10)

| Endpoint | DTO | Passed | Failed | Warnings | 200 | 201 | 400 | 403 | 404 | 500 | Detail Report |
|----------|-----|--------|--------|----------|-----|-----|-----|-----|-----|-----|---------------|
| /Friend/AcceptFriendRequest | accept-friend-request | 6 | 0 | 0 | 0 | 1 | 0 | 5 | 0 | 0 | [📄 View Report](success-reports\accept-friend-request\accept-friend-request-combined-16-07-19-06-2025.report.txt) |
| /Channel/AcceptMessageRequest | accept-message-request | 6 | 0 | 0 | 0 | 1 | 0 | 5 | 0 | 0 | [📄 View Report](success-reports\accept-message-request\accept-message-request-combined-16-07-19-06-2025.report.txt) |
| /Friend/AddFriend | add-friend | 6 | 0 | 0 | 0 | 1 | 0 | 5 | 0 | 0 | [📄 View Report](success-reports\add-friend\add-friend-combined-16-07-19-06-2025.report.txt) |
| /Friend/CancelFriendRequest | cancel-friend-request | 6 | 0 | 0 | 0 | 1 | 0 | 5 | 0 | 0 | [📄 View Report](success-reports\cancel-friend-request\cancel-friend-request-combined-16-07-19-06-2025.report.txt) |
| /Channel/RejectMessageRequest | reject-message-request | 6 | 0 | 0 | 0 | 1 | 0 | 5 | 0 | 0 | [📄 View Report](success-reports\reject-message-request\reject-message-request-combined-16-07-19-06-2025.report.txt) |
| /Message/SendDMMessage | send-dm-message | 70 | 0 | 10 | 0 | 1 | 19 | 50 | 0 | 0 | ❌ No Report |
| /RingbackTone/SetRingbackTone | set-ring-back-tone | 6 | 0 | 5 | 0 | 0 | 0 | 0 | 1 | 0 | [📄 View Report](success-reports\set-ring-back-tone\set-ring-back-tone-combined-16-07-19-06-2025.report.txt) |
| /Message/UpdateDmMediaAttachments | update-dm-media-attachment | 462 | 0 | 277 | 0 | 0 | 0 | 185 | 0 | 0 | [📄 View Report](success-reports\update-dm-media-attachment\update-dm-media-attachment-combined-16-07-19-06-2025.report.txt) |
| UserProfile/UpdateUserAvatar | update-user-avatar | 5 | 0 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | [📄 View Report](success-reports\update-user-avatar\update-user-avatar-combined-16-07-19-06-2025.report.txt) |
| /UserProfile/VisitedProfile | visit-profile | 6 | 0 | 0 | 0 | 1 | 0 | 5 | 0 | 0 | [📄 View Report](success-reports\visit-profile\visit-profile-combined-16-07-19-06-2025.report.txt) |


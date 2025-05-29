export class ChannelDataBuilder {
  private data: any = {
    data: {
      channel: {},
      includes: {
        users: [],
        members: [],
        messages: [],
        channelMetadata: [],
      },
    },
  };

  setChannel(channel: any) {
    this.data.data.channel = channel;
    return this;
  }

  addUser(user: any) {
    this.data.data.includes.users.push(user);
    return this;
  }

  addMember(member: any) {
    this.data.data.includes.members.push(member);
    return this;
  }

  addMessage(message: any) {
    this.data.data.includes.messages.push(message);
    return this;
  }

  addMetadata(meta: any) {
    this.data.data.includes.channelMetadata.push(meta);
    return this;
  }

  getLastMessage() {
    const messages = this.data.data.includes.messages;
    return messages[messages.length - 1] || null;
  }

  build() {
    return this.data;
  }
}

export class MessageDataBuilder {
  private data: any = {
    data: {
      message: {},
      includes: {
        users: [],
        channels: [],
        members: [],
        channelMetadata: [],
      },
    },
  };

  setMessage(message: any) {
    this.data.data.message = message;
    return this;
  }

  addUser(user: any) {
    this.data.data.includes.users.push(user);
    return this;
  }

  addChannel(channel: any) {
    this.data.data.includes.channels.push(channel);
    return this;
  }

  addMember(member: any) {
    this.data.data.includes.members.push(member);
    return this;
  }

  addMetadata(metadata: any) {
    this.data.data.includes.channelMetadata.push(metadata);
    return this;
  }

  getLastMessage() {
    const messages = this.data.data.includes.messages;
    return messages[messages.length - 1] || null;
  }

  build() {
    return this.data;
  }
}

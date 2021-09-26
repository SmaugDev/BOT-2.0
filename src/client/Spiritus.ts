import { Intents } from "discord.js";
import { ShewenyClient } from "sheweny";

import type { Config } from "../../index";

export default class Spiritus extends ShewenyClient {
  public config: Config;
  constructor(config: Config) {
    super({
      allowedMentions: {
        parse: ["roles", "users"],
      },
      intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
      ],
      partials: ["CHANNEL", "MESSAGE", "REACTION", "USER", "GUILD_MEMBER"],
      presence: {
        status: "online",
        activities: [
          {
            name: "Spiritus bot",
            type: "WATCHING",
          },
        ],
      },
      handlers: {
        commands: {
          directory: "./commands",
          guildId: "809702809196560405",
        },
        // events: {
        //   directory: "./events",
        // },
        // buttons: {
        //   directory: "./interactions/buttons",
        // },
        // selectMenus: {
        //   directory: "./interactions/selectMenus",
        // },
      },
    });
    this.config = config;
  }
}
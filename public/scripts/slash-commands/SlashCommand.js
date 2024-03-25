export class SlashCommand {
    /**@type {String}*/ name;
    /**@type {Function}*/ callback;
    /**@type {String}*/ helpString;
    /**@type {String}*/ helpStringFormatted;
    /**@type {String}*/ helpStringFormattedWithoutName;
    /**@type {Boolean}*/ interruptsGeneration;
    /**@type {Boolean}*/ purgeFromMessage;
    /**@type {String[]}*/ aliases;
}

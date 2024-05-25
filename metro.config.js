const { getDefaultConfig } = require("@expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

// Add support for `.ttf` files in asset extensions
defaultConfig.resolver.assetExts.push("ttf");

module.exports = defaultConfig;

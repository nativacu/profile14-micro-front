const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "remoteapp3",
    // publicPath: "http://localhost:4204/"
    publicPath: "https://scintillating-madeleine-31e054.netlify.app/",
    scriptType: "text/javascript",
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  // experiments: {
  //   outputModule: true
  // },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: "var", name: "remoteapp3" },

      // For remotes (please adjust)
      name: "remoteapp3",
      filename: "remoteEntry.js",
      exposes: {
        // './ProfileV14Module': './/src/app/profile-v14/profile-v14.module.ts',
        './web-components': './src/bootstrap.ts',
      },


      shared: share({
        "@angular/core": { requiredVersion: 'auto' },
        "@angular/common": { requiredVersion: 'auto' },
        "@angular/router": { requiredVersion: 'auto' },
        "@angular/platform-browser": { requiredVersion: 'auto' },
        "@angular/platform-browser-dynamic": { requiredVersion: 'auto' },

        ...sharedMappings.getDescriptors()
      })

    }),
    sharedMappings.getPlugin()
  ],
};

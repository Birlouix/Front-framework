module.exports = function(gulp, plugins, params){

return function(){

  plugins.realFavicon.generateFavicon({
    masterPicture: params.tasksPath.source.favicon,
    dest: params.tasksPath.destination.favicon,
    iconsPath: '/favicon/',
    design: {
      ios: {
        pictureAspect: 'backgroundAndMargin',
        backgroundColor: '#ffffff',
        margin: '35%',
        assets: {
          ios6AndPriorIcons: true,
          ios7AndLaterIcons: true,
          precomposedIcons: false,
          declareOnlyDefaultIcon: true
        },
        appName: 'Auchan'
      },
      desktopBrowser: {},
      windows: {
        pictureAspect: 'whiteSilhouette',
        backgroundColor: '#f52f2f',
        onConflict: 'override',
        assets: {
          windows80Ie10Tile: true,
          windows10Ie11EdgeTiles: {
            small: false,
            medium: true,
            big: false,
            rectangle: false
          }
        },
        appName: 'Auchan'
      },
      androidChrome: {
        pictureAspect: 'shadow',
        themeColor: '#f7f7f7',
        manifest: {
          name: 'Auchan',
          display: 'standalone',
          orientation: 'notSet',
          onConflict: 'override',
          declared: true
        },
        assets: {
          legacyIcon: false,
          lowResolutionIcons: false
        }
      },
      safariPinnedTab: {
        pictureAspect: 'silhouette',
        themeColor: '#5bbad5'
      }
    },
    settings: {
      compression: 2,
      scalingAlgorithm: 'Mitchell',
      errorOnImageTooSmall: false,
      readmeFile: false,
      htmlCodeFile: true,
      usePathAsIs: false
    },
    markupFile: 'faviconData.json'
  });

  };

};

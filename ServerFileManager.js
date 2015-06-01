/**
 * author : SungYong Jang <jsy@adain.kr>
 * date : 15. 6. 1.
 * description : server file manager
 */

var fs = Npm.require('fs');
var path = Npm.require('path');

/**
 * @class ServerFileManager server file manager
 * @constructor
 */
ServerFileManager = {

  /**
   * make file info
   * @param path
   * @param name
   * @param isDirectory
   * @returns {{}}
   */
  makeFileInfo: function(path, name, isDirectory){
    return {
      path: path,
      name: name,
      isDir: isDirectory
    };
  },

  /**
   * get folder and file list from folder path
   * @param {string} folderPath
   * @param {boolean} [isSearchChild]
   */
  getFolderAndFileList: function(folderPath, isSearchChild){
    var result = [];
    var dir = fs.readdirSync(folderPath);
    var absPath = null;
    var stat = null;

    _.each(dir, function(file){
      absPath = folderPath + path.sep + file;

      stat = fs.statSync(absPath);

      result.push(ServerFileManager.makeFileInfo(absPath, file, stat.isDirectory()));

      if(stat.isDirectory()){
        if(isSearchChild){
          result = result.concat(ServerFileManager.getFolderAndFileList(absPath, isSearchChild));
        }
      }
    });

    return result;
  },

  /**
   * get only folder list from folder path
   * @param {string} folderPath
   * @param {boolean} [isSearchChild]
   */
  getFolderList: function(folderPath, isSearchChild){
    var result = [];
    var dir = fs.readdirSync(folderPath);
    var absPath = null;
    var stat = null;

    _.each(dir, function(file){
      absPath = folderPath + path.sep + file;
      stat = fs.statSync(absPath);
      if(stat.isDirectory()){
        result.push(ServerFileManager.makeFileInfo(absPath, file, stat.isDirectory()));

        if(isSearchChild){
          result = result.concat(ServerFileManager.getFolderList(absPath, isSearchChild));
        }
      }
    });

    return result;
  },

  /**
   * get only file list from folder path
   * @param {string} folderPath
   * @param {boolean} [isSearchChild]
   */
  getFileList: function(folderPath, isSearchChild){
    var result = [];
    var dir = fs.readdirSync(folderPath);
    var absPath = null;
    var stat = null;

    _.each(dir, function(file){
      absPath = folderPath + path.sep + file;
      stat = fs.statSync(absPath);
      if(stat.isDirectory()){
        if(isSearchChild){
          result = result.concat(ServerFileManager.getFileList(absPath, isSearchChild));
        }
      }else{
        result.push(ServerFileManager.makeFileInfo(absPath, file, stat.isDirectory()));
      }
    });

    return result;
  }
};
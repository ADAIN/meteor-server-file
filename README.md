# Meteor server file manager
simple meteor server file manager

# usage
    ServerFileManager.getFolderAndFileList(folderPath, isSearchChild);
    [{ path: 'assets/app/data/Alpha', name: 'Alpha', isDir: true }, ...]
    
    ServerFileManager.getFolderList(folderPath, isSearchChild);
    [{ path: 'assets/app/data/Alpha', name: 'Alpha', isDir: false }, ...]
    
    ServerFileManager.getFileList(folderPath, isSearchChild);
    [{ path: 'assets/app/data/Alpha', name: 'Alpha', isDir: false }, ...]
const kEmojiButtonsInEachRow = 3;

// Returns a section header DOM object. This object
// should be added into a container DOM object.
function createToggleHeaderDOM(headerName) {
  var sectionObject = document.createElement('a');
  sectionObject.className = "toggle";
  sectionObject.href = "#";
  sectionObject.text = headerName;
  return sectionObject;
}

// Returns a collapsible content DOM object.
function createCollapsibleContentDOM() {
  var innerObject = document.createElement('ul');
  innerObject.className = 'inner';
  return innerObject;
}

// Returns a DOM table object containing a list of 
// emoji buttons.
function createEmojiListDOM(emojiList) {
  var tableObject = document.createElement('table');
  tableObject.className = 'emo-table';
  
  var tableColumn = null;
  jQuery.each(emojiList, function(index, emoji) {
    if (index % kEmojiButtonsInEachRow == 0) {
      tableColumn = document.createElement('tr');
      tableObject.append(tableColumn);
    }
    var tableButton = createEmojiButtonDOM(emoji);
    tableColumn.append(tableButton);
  });
  
  return tableObject;
}

// Returns a DOM object that contains a single emoji
// button. Click the emoji button to copy the emoji
// to clipboard.
function createEmojiButtonDOM(emoji) {
  var emojiButton = document.createElement('button');
  emojiButton.className = 'emo-btn';
  emojiButton.innerText = emoji;
  emojiButton.emoji = emoji;
  
  var emojiObject = document.createElement('td');
  emojiObject.className = 'emolist';
  emojiObject.append(emojiButton);
  
  return emojiObject;
}

// |collapsible| indicates if |contentData| should be
// presented in a collapsible content DOM, with |headerName|
// as a toggleable header section.
//
// Returns a DOM object that presents data in |contentData|.
// For each key value pair in |contentData|, the method will
// create a toggleable |headerName| DOM object, with they key
// as the header name, and collapsible content DOM object. 
//
// If the value is a list, then the content DOM will be a
// table containing a list of emojis. 
// If the value is a key-value pair, then the method will
// show the content as a collapsible DOM object.
function createDOMWithHeaderAndContent(headerName, 
                                       contentData,
                                       collapsible) {
  var contentDOM = null;
  if (Array.isArray(contentData)) {
    // If contentData is a list, assume that we have
    // a list of emojis.
    contentDOM = createEmojiListDOM(contentData); 
  }
  else {
    // We are dealing with a dictionary. Generate
    // DOM recursively.
    for(var key in contentData) {
      contentDOM = createDOMWithHeaderAndContent
                          (key, contentData[key], true);
    }
  }
  
  if (collapsible) {
    var collapsibleDOM = createCollapsibleContentDOM();
    collapsibleDOM.append(contentDOM);

    var headerDOM = createToggleHeaderDOM(headerName);

    var containerDOM = document.createElement('li');
    containerDOM.append(headerDOM);
    containerDOM.append(collapsibleDOM);
  
    return containerDOM;    
  }
  else {
    return contentDOM;
  }
}

// TODO(vlukman): We don't want to have the "emoji" as
// a top level category. Instead we want to show the 
// categories in json['emoji'].
// Returns a DOM object that presents data in |json|.
function createDOMWithJson(json) {
  return createDOMWithHeaderAndContent("", json, false);
}
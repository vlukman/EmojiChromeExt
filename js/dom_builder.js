function createContainerDOM() {
  var toggleObject = document.createElement('li');
  return toggleObject;
}

function createSectionHeaderDOM(headerName) {
  var sectionObject = document.createElement('a');
  sectionObject.className = "toggle";
  sectionObject.href = "#";
  sectionObject.text = headerName;
  return sectionObject;
}

function createSectionContentDOM() {
  var innerObject = document.createElement('ul');
  innerObject.className = 'inner';
  return innerObject;
}

function createEmojiDOM(emoji) {
  var emojiButton = document.createElement('button');
  emojiButton.className = 'emo-btn';
  emojiButton.innerText = emoji;
  emojiButton['data-clipboard-text'] = emoji;
  
  var emojiObject = document.createElement('td');
  emojiObject.className = 'emolist';
  emojiObject.append(emojiButton);
  
  return emojiObject;
}

function createEmojiListDOM(emojiList) {
  var tableObject = document.createElement('table');
  tableObject.className = 'emo-table';
  
  jQuery.each(emojiList, function(index, emoji) {
    var tableRow = createEmojiDOM(emoji);
    var tableColumn = document.createElement('tr');
    tableColumn.append(tableRow);
    tableObject.append(tableColumn);
  });
  
  return tableObject;
}

// TODO(vlukman): we are currently assuming that contentData is always a list
// Take care of the case when contentData is a dictionary.
function createEmojiSectionDOM(headerName, contentData) {
  var emojiListDOM = createEmojiListDOM(contentData);
  
  var contentDOM = createSectionContentDOM();
  contentDOM.append(emojiListDOM);

  var headerDOM = createSectionHeaderDOM(headerName);

  var containerDOM = createContainerDOM();
  containerDOM.append(headerDOM);
  containerDOM.append(contentDOM);
  
  return containerDOM;
}

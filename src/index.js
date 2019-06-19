import React from "react";
import ReactDOM from "react-dom";

import Main from "./Main";
ContentstackUIExtension.init().then(extension => {
  const { config, entry: { _data, content_type }} = extension;
  extension.window.enableAutoResizing();
  const wrapper = document.getElementById("root");
  wrapper ? ReactDOM.render(<Main config={config} entryData={_data} contentType={content_type} />, wrapper) : false;
});

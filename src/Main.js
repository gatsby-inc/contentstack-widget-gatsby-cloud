import React from "react";
import PropTypes from "prop-types";
import { ExtensionUI } from "@gatsby-cloud-pkg/gatsby-cms-extension-base"

const Main = ({ config, entryData }) => {
  const { instanceUrl, authToken } = config;
  const { url } = entryData;

  return (
    <div className="container" style={{ padding: '15px' }}>
        <ExtensionUI contentSlug={url} previewInstanceUrl={instanceUrl} authToken={authToken} />
    </div>
  )
}

Main.propTypes = {
  config: PropTypes.object,
  entryData: PropTypes.object,
}

export default Main;
